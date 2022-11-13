(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{277:function(s,a,t){"use strict";t.r(a);var e=t(13),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"使用-less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-less"}},[s._v("#")]),s._v(" 使用 less")]),s._v(" "),a("p",[s._v("less 是一门向后兼容的 CSS 扩展语言，详情可以查看"),a("a",{attrs:{href:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("中文官网"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"安装和配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和配置"}},[s._v("#")]),s._v(" 安装和配置")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" less-loader -D\n或\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" less-loader -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("然后找到根目录的两个 webpack 配置文件 webpack.dev.config 和 webpack.prod.config, 在 module.rules 下新增一段代码")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.less$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("i")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("commonCssLoader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'less-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("blockquote",[a("p",[s._v("注意 "),a("strong",[s._v("commonCssLoader")]),s._v(" 是单独提取出来定义的用来复用的 loader")])]),s._v(" "),a("h2",{attrs:{id:"修改-css-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-css-文件"}},[s._v("#")]),s._v(" 修改 css 文件")]),s._v(" "),a("p",[s._v("现在可以把 css 文件的后缀修改成 less 了")]),s._v(" "),a("ol",[a("li",[s._v("找到默认目录 /src/css 修改 index.css 文件后缀成 index.less")]),s._v(" "),a("li",[s._v("修改 /src/index/index.js 文件进行修改")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../css/index.css'")]),s._v("\n改成\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../css/index.less'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("完成。")])])}),[],!1,null,null,null);a.default=n.exports}}]);