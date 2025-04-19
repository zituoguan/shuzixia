import { $, component$, useSignal, useOnWindow, useContext } from "@builder.io/qwik";
import { Chart, registerables } from 'chart.js';

import { useLocalStorage } from "~/hooks/useLocalStorage";
import { ChecklistContext } from "~/store/checklist-context";
import type { Priority, Sections, Section } from '~/types/PSC';
import Icon from '~/components/core/icon';

/**
 * Component for client-side user progress metrics.
 * Combines checklist data with progress from local storage,
 * calculates percentage completion for each priority level,
 * and renders some pretty pie charts to visualize results
 */
export default component$(() => {

  // All checklist data, from store
  const checklists = useContext(ChecklistContext);
  // Completed items, from local storage
  const [checkedItems] = useLocalStorage('PSC_PROGRESS', {});
  // Ignored items, from local storage
  const [ignoredItems] = useLocalStorage('PSC_IGNORED', {});
  // Local storage for closing and ignoring the welcome dialog
  const [ignoreDialog, setIgnoreDialog] = useLocalStorage('PSC_CLOSE_WELCOME', false);
  // Store to hold calculated progress results
  const totalProgress = useSignal({ completed: 0, outOf: 0 });
  // Ref to the radar chart canvas
  const radarChart  = useSignal<HTMLCanvasElement>();
  // Completion data for each section
  const sectionCompletion =  useSignal<number[]>([]);

  /**
   * Calculates the users progress over specified sections.
   * Given an array of sections, reads checklists in each,
   * counts total number of checklist items
   * counts the number of completed items from local storage
   * and returns the percentage of completion
   */
  const calculateProgress = $((sections: Sections): { completed: number, outOf: number } => {
    if (!checkedItems.value || !sections.length) {
      return { completed: 0, outOf: 0 };
    }
    let totalItems = sections.reduce((total: number, section: Section) => total + section.checklist.length, 0);
    let totalComplete = 0;
    sections.forEach((section: Section) => {
      section.checklist.forEach((item) => {
        const id = item.point.toLowerCase().replace(/ /g, '-');
        const isComplete = checkedItems.value[id];
        const isIgnored = ignoredItems.value[id];
        if (isComplete) {
          totalComplete++;
        }
        if (isIgnored) {
          totalItems--;
        }
      });
    });
    return { completed: totalComplete, outOf: totalItems };
    // return Math.round((totalComplete / totalItems) * 100);
  });

  /**
   * Filters the checklist items in a given array of sections,
   * so only the ones of a given priority are returned
   * @param sections - Array of sections to filter
   * @param priority - The priority to filter by
   */
  const filterByPriority = $((sections: Sections, priority: Priority): Sections => {
    const normalize = (pri: string) => pri.toLowerCase().replace(/ /g, '-');
    return sections.map(section => ({
      ...section,
      checklist: section.checklist.filter(item => normalize(item.priority) === normalize(priority))
    }));
  });

  /**
   * Draws a completion chart using ProgressBar.js
   * Illustrating a given percent rendered to a given target element
   * @param percentage - The percentage of completion (0-100)
   * @param target - The ID of the element to draw the chart in
   * @param color - The color of the progress chart, defaults to Tailwind primary
   */
  const drawProgress = $((percentage: number, target: string, color?: string) => {
    // Get a given color value from Tailwind CSS variable
    const getCssVariableValue = (variableName: string, fallback = '') => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim()
      || fallback;
    }
    // Define colors and styles for progress chart
    const primaryColor = color || 'hsl(var(--pf, 220, 13%, 69%))';
    const foregroundColor = 'hsl(var(--nc, 220, 13%, 69%))';
    const red = `hsl(${getCssVariableValue('--er', '0 91% 71%')})`;
    const green = `hsl(${getCssVariableValue('--su', '158 64% 52%')})`;
    const labelStyles = {
      color: foregroundColor, position: 'absolute', right: '0.5rem',  top: '2rem'
    };
    // Animations to occur on each step of the progress bar
    const stepFunction = (state: any, bar: any) => {
      const value = Math.round(bar.value() * 100);
      bar.path.setAttribute('stroke', state.color);
      bar.setText(value ? `${value}%` : '');
      if (value >= percentage) {
        bar.path.setAttribute('stroke', primaryColor);
      }
    };
    // Define config settings for progress chart
    const progressConfig = {
      strokeWidth: 6,
      trailWidth: 3,
      color: primaryColor,
      trailColor: foregroundColor,
      text: { style: labelStyles },
      from: { color: red },
      to: { color: green },
      step: stepFunction,
    };
    // Initiate ProgressBar.js passing in config, to draw the progress chart
    import('progressbar.js').then((ProgressBar) => {
      const line = new ProgressBar.SemiCircle(target, progressConfig);
      line.animate(percentage / 100);
    });
  });

  /**
   * Given a priority, filters the checklist, calculates data, renders chart
   * @param priority - The priority to filter by
   * @param color - The color override for the chart
   */
  const makeDataAndDrawChart = $((priority: Priority, color?: string) => {
    filterByPriority(checklists.value, priority)
    .then((sections: Sections) => {
      calculateProgress(sections)
        .then((progress) => {
          const { completed, outOf } = progress;
          const percent = Math.round((completed / outOf) * 100)
          drawProgress(percent, `#${priority}-container`, color)
        })
    });
  });

  /**
   * When the window has loaded (client-side only)
   * Initiate the filtering, calculation and rendering of progress charts
   */
  useOnWindow('load', $(() => {

    calculateProgress(checklists.value)
      .then((progress) => {
        totalProgress.value = progress;
    })

    makeDataAndDrawChart('基本', 'hsl(var(--su, 158 64% 52%))');
    makeDataAndDrawChart('可选', 'hsl(var(--wa, 43 96% 56%))');
    makeDataAndDrawChart('高级', 'hsl(var(--er, 0 91% 71%))');
  }));


  /**
   * Calculates the percentage of completion for each section
   */
  useOnWindow('load', $(async () => {
    sectionCompletion.value = await Promise.all(checklists.value.map(section => {
      return calculateProgress([section]).then(
        (progress) => Math.round(progress.completed / progress.outOf * 100)
      );
    }));
  }));


  interface RadarChartData {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      [key: string]: any; // Anything else goes!
    }[];
  }

  /**
   * Builds the multi-dimensional data used for the radar chart
   * based on each section, each level of priority, and the progress
   * @param sections - The sections to build data from
   */
  const makeRadarData = $((sections: Sections): Promise<RadarChartData> => {
    // The labels for the corners of the chart, based on sections
    const labels = sections.map((section: Section) => section.title);
    // Items applied to every dataset
    const datasetTemplate = {
      borderWidth: 1,
    };
    // Helper function to asynchronously calculate percentage
    const calculatePercentage = async (section: Section, priority: Priority) => {
      const filteredSections = await filterByPriority([section], priority);
      const progress = await calculateProgress(filteredSections);
      return progress.outOf > 0 ? (progress.completed / progress.outOf) * 100 : 0;
    };
  
    // Asynchronously build data for each priority level
    const buildDataForPriority = (priority: Priority, color: string) => {
      return Promise.all(sections.map(section => calculatePercentage(section, priority)))
        .then(data => ({
          ...datasetTemplate,
          label: priority.charAt(0).toUpperCase() + priority.slice(1),
          data: data,
          backgroundColor: color,
        }));
    };
  
    // Wait on each set to resolve, and return the final data object
    return Promise.all([
      buildDataForPriority('高级', 'hsl(0 91% 71%/75%)'),
      buildDataForPriority('可选', 'hsl(43 96% 56%/75%)'),
      buildDataForPriority('基本', 'hsl(158 64% 52%/75%)'),      
    ]).then(datasets => ({
      labels,
      datasets,
    }));
  });
  
  

  useOnWindow('load', $(() => {
    Chart.register(...registerables);

    makeRadarData(checklists.value).then((data) => {
      if (radarChart.value) {
        new Chart(radarChart.value, {
          type: 'radar',
          data,
          options: {
            responsive: true,
            scales: {
              r: {
                angleLines: {
                  display: true,
                  color: '#7d7d7da1',
                },
                suggestedMin: 0,
                suggestedMax: 100,
                ticks: {
                  stepSize: 25,
                  callback: (value) => `${value}%`,
                  color: '#ffffffbf',
                  backdropColor: '#ffffff3b',
                },
                grid: {
                  display: true,
                  color: '#7d7d7dd4',
                },
              },
            },
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  font: {
                    size: 10,
                  },
                },
              },
              tooltip: {
                callbacks: {
                  label: (ctx) => `完成了 ${ctx.dataset.label || ''} 个项目的 ${Math.round(ctx.parsed.r)}%`,
                }
              }
            },
          }
        });
        
      }
    });
  }));

  const items = [
    { id: '基本-container', label: '基本' },
    { id: '可选-container', label: '可选' },
    { id: '高级-container', label: '高级' },
  ];

  // Beware, some god-awful markup ahead (thank Tailwind for that!)
  return (
  <div class="flex justify-center flex-wrap items-stretch gap-6 mb-4 relative">
    {(!ignoreDialog.value && (!Object.keys(checkedItems.value).length) ) && (
    <div class="
      px-16 py-8 top-1/3 z-10 max-w-lg
      absolute flex flex-col justify-center bg-gray-600 rounded-md bg-clip-padding
      backdrop-filter backdrop-blur-md bg-opacity-40 border border-stone-800">
        <button
          class="absolute top-1 right-1 btn btn-sm opacity-50"
          onClick$={() => setIgnoreDialog(true)}
          >Close</button>
        <p class="text-xl block text-center font-bold">暂无统计数据</p>
        <p class="w-md text-left my-2">一旦您开始勾选清单中的项目，您将在这里看到您的进度</p>
        <p class="w-md text-left my-2">开始吧，选择下面的一个清单</p>
      </div>
    )}

    <div class="flex justify-center flex-col items-center gap-6">
      {/* Progress Percent */}
      <div class="rounded-box bg-front shadow-md w-96 p-4">
        <h3 class="text-primary text-2xl">你的进度</h3>
        <p class="text-lg">
          你完成了 <b>{totalProgress.value.completed} / {totalProgress.value.outOf}</b> 个项目
        </p>
        <progress
          class="progress w-80"
          value={totalProgress.value.completed}
          max={totalProgress.value.outOf}>
        </progress>
      </div>
    
      {/* Completion per level */}
      <div class="carousel rounded-box">
      {items.map((item) => (
        <div
          key={item.id}
          class="flex flex-col justify-items-center carousel-item w-20 p-4
                bg-front shadow-md mx-2.5 rounded-box">
          <div class="relative" id={item.id}></div>
          <p class="text-center">{item.label}</p>
        </div>
        ))}
      </div>
      {/* Something ??? */}
      <div class="p-4 rounded-box bg-front shadow-md w-96 flex-grow">
        <p class="text-sm opacity-80 mb-2">
          接下来，考虑切换到更安全和更注重隐私的应用程序和服务。
        </p>
        <p class="text-lg">
          查看我们推荐的软件目录，
          请访问 <a class="link link-secondary font-bold" href="https://shuziditu.com">数字地图</a>
        </p>
      </div>
    </div>

    {/* Radar Chart showing total progress per category and level */}
    <div class="rounded-box bg-front shadow-md w-96 p-4">
      <canvas ref={radarChart} id="myChart"></canvas>
    </div>

    <div class="justify-center flex-col items-center gap-6 hidden xl:flex">
      {/* Remaining Tasks */}
      <div class="p-4 rounded-box bg-front shadow-md w-96 flex-grow">
        <ul>
          { checklists.value.map((section: Section, index: number) => (
              <li key={index}>
                <a
                  href={`/checklist/${section.slug}`}
                  class={[
                    'my-2 w-80 flex justify-between items-center tooltip transition',
                    `hover:text-${section.color}-400`
                  ]}
                  data-tip={`完成了 ${section.checklist.length} 个项目的 ${sectionCompletion.value[index]}%`}
                >
                <p class="text-sm m-0 flex items-center text-left gap-1 text-nowrap overflow-hidden max-w-40">
                  <Icon icon={section.icon} width={14} />
                  {section.title}
                </p>
                <div class="progress w-36">
                  <span 
                    class={`block h-full transition bg-${section.color}-400`}
                    style={`width: ${sectionCompletion.value[index] || 0}%;`}></span>
                </div>
                </a>
              </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
});

