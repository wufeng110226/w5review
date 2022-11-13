(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{273:function(s,n,a){"use strict";a.r(n);var e=a(13),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"快速上手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),n("h2",{attrs:{id:"项目依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目依赖"}},[s._v("#")]),s._v(" 项目依赖")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://nodejs.org/zh-cn/download/releases/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js v12+"),n("OutboundLink")],1),s._v(" （注意 "),n("strong",[s._v("windows7")]),s._v(" 能安装的最高 node 版本是 "),n("strong",[s._v("v13.14.0")]),s._v("）")]),s._v(" "),n("p",[s._v("可以使用 npm，但是推荐使用 Yarn")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://yarn.bootcss.com/docs/install#windows-stable",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"安装运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装运行"}},[s._v("#")]),s._v(" 安装运行")]),s._v(" "),n("p",[s._v("打开"),n("a",{attrs:{href:"https://github.com/wufeng110226/multipage-webpack5-framework",target:"_blank",rel:"noopener noreferrer"}},[s._v("仓库"),n("OutboundLink")],1),s._v("下载项目到本地")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/wufeng110226/multipage-webpack5-framework.git\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" multipage-webpack5-framework\n或网页下载ZIP压缩包，解压至自选目录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("安装模块依赖包")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n或\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("打开本地服务")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run serve\n或\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" serve\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("项目打包")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n或\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("├── dist（打包生产目录）\n├── node_modules\n├── release（部署）\n├── src（主要业务代码）\n│   ├── css\n│   ├── font\n│   ├── img\n│   ├── index\n│   |   ├── index.html\n|   |   └── index.js\n│   └── ...\n├── .babelrc\n├── .eslintignore\n├── .eslintrc.js\n├── .gitignore\n├── package.json\n├── README.md\n├── webpack.dev.config.js（开发环境）\n├── webpack.prod.config.js（生产环境）\n└── package.json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);