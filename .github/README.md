<h1 align="center">个人安全清单</h1>

<p align="center">
<b><i>保护你数字生活的终极安全建议清单</i></b>
<br />
<b>🌐 <a href="https://digital-defense.io/">digital-defense.io</a></b><br />
<br />
<a href="https://personal-security-checklist.as93.net"><img src="https://i.ibb.co/Rb6P6h6/shield.png" width="64" /><br /></a>
<br />
<kbd><br />👉 <a href="https://github.com/Lissy93/personal-security-checklist/blob/HEAD/CHECKLIST.md"><b>阅读安全清单</b></a> 👈<br /><br /></kbd>
<br />
</p>

<details>
    <summary><b>目录</b></summary>
    
- [安全清单](#the-checklist)
- [网站](#the-website)
- [API](#the-api)
- [贡献指南](#contributing)
- [致谢](#credits)
- [许可证](#license)

</details>

---

## 安全清单

你可以在 [`CHECKLIST.md`](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/CHECKLIST.md) 阅读完整清单。<br>
<sub>如需查看/编辑原始数据，请参见 [`personal-security-checklist.yml`](https://github.com/Lissy93/personal-security-checklist/blob/master/personal-security-checklist.yml)</sub>

---

## 网站

最简单的方式是通过我们的网站使用安全清单：**[digital-defense.io](https://digital-defense.io/)**

你可以浏览清单、根据威胁模型筛选并勾选已完成项（还有漂亮的图表让你看到自己的进度 ☺️）。

<p align="center">
<img width="600" src="https://i.ibb.co/jzKn05H/digital-defense.png" />
</p>

### 关于
网站源码位于 [`web/`](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/web)。<br />
该网站使用 Qwik 框架、TypeScript 及部分 DaisyUI 组件构建。

### 本地开发
如需本地运行或修改代码，你需要先安装 Node 和 Git。

1. 克隆代码仓库：`git clone git@github.com:Lissy93/personal-security-checklist.git`
2. 进入源码目录：`cd personal-security-checklist/web`
3. 安装依赖：`yarn`
4. 启动开发服务器：`yarn dev`

或者，你也可以直接在 Code Spaces 打开本仓库，环境已配置好。

### 部署
部署应用时，按照上述开发步骤操作，然后运行 `yarn build`、`yarn build.static`。将 `dist/` 目录上传到任意 CDN、Web 服务器或静态托管平台即可。

你也可以 Fork 本仓库并导入到你的服务商面板，或使用下方一键部署链接 😉

---

## API

我们还通过免费 API 提供所有数据，你可以自由使用。

### 用法
所有接口均有 OpenAPI 规范文档，可通过 [Swagger 文档]() 查看和测试。

基础地址：digital-defense.io/api

/api/checklists  
/api/checklists/[name-or-index]  
/api/checklists/[name]/[point-index]  
/api/search/[searchterm]  

## 贡献指南
所有清单数据都存储在 [`personal-security-checklist.yml`](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/personal-security-checklist.yml)。网站构建和 API 均引用此文件，且会动态插入到 [Checklist 页面](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/CHECKLIST.md)。

如果你只想修改数据，只需编辑此文件。

重要：提交 Pull Request 时，请为你添加/修改/删除的信息提供参考资料。

如需修改网站或 API 源码，请参考上文开发说明。

在提交 Issue 或 PR 前，请确保遵守 [社区指南](https://github.com/Lissy93/personal-security-checklist/blob/master/.github/CONTRIBUTING.md) 和 [行为准则](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/.github/CODE_OF_CONDUCT.md)。

---

## 致谢

感谢所有为本项目做出贡献或赞助的人！

### 赞助者

<!-- readme: sponsors -start -->
<!-- 赞助者表格内容省略，保持原样 -->
<!-- readme: sponsors -end -->

如果你觉得本仓库有帮助，欢迎在 GitHub 上赞助我 💜

### 贡献者

<!-- readme: contributors -start -->
<!-- 贡献者表格内容省略，保持原样 -->
<!-- readme: contributors -end -->

---

## 许可证

> _**[Lissy93/Personal-Security-Checklist](https://github.com/Lissy93/personal-security-checklist)** 遵循 [MIT](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/LICENSE) 许可证，版权所有 © [Alicia Sykes](https://aliciasykes.com) 2024._<br>
> <sup align="right">详情见 <a href="https://tldrlegal.com/license/mit-license">TLDR Legal > MIT</a></sup>

<details>
<summary>展开许可证</summary>

```
MIT 许可证 (MIT)
Copyright (c) Alicia Sykes <alicia@omg.com> 

特此免费授权任何获得本软件及相关文档文件（“软件”）副本的人无限制地处理本软件，包括但不限于使用、复制、修改、合并、出版、分发、再授权及/或销售本软件的副本，并允许向其提供本软件的人也可如此做，条件是须包含上述版权声明和本许可声明在本软件的所有副本或主要部分中。

本软件是“按原样”提供的，不附带任何明示或暗示的担保，包括但不限于适销性、特定用途适用性及非侵权。在任何情况下，作者或版权持有人均不对因本软件或本软件的使用或其他交易而产生的任何索赔、损害或其他责任承担责任，无论是在合同诉讼、侵权或其他方面。
```

</details>

<!-- License + Copyright -->
<p  align="center">
  <i>© <a href="https://aliciasykes.com">Alicia Sykes</a> 2024</i><br>
  <i>遵循 <a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a> 许可证</i><br>
  <a href="https://github.com/lissy93"><img src="https://i.ibb.co/4KtpYxb/octocat-clean-mini.png" /></a><br>
  <sup>感谢你的访问 :)</sup>
</p>

<!-- 恐龙很棒 -->
<!-- 
                        . - ~ ~ ~ - .
      ..     _      .-~               ~-.
     //|     \ `..~                      `.
    || |      }  }              /       \  \
(\   \\ \~^..'                 |         }  \
 \`.-~  o      /       }       |        /    \
 (__          |       /        |       /      `.
  `- - ~ ~ -._|      /_ - ~ ~ ^|      /- _      `.
              |     /          |     /     ~-.     ~- _
              |_____|          |_____|         ~ - . _ _~_-_
-->
