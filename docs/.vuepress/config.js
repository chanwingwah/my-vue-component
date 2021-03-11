const path = require('path')
module.exports = {
  markdown: {
    lineNumbers: true,
    plugins: [
      'markdown-it-task-lists'
    ]
  },
  base: '/my-ui/',
  title: 'Simple UI ',
  description: '一个的UI框架实践',  
  themeConfig: {
    logo: '/assets/images/moon-night.svg',
    nav: [
      {text: '主页', link: '/'},
      {text: '指南', link: '/guide/introduce'},
      {text: '博客', link: 'http://chanwingwah.info/'},
      {text: 'github', link: 'https://github.com/chanwingwah/my-vue-component/'},
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          '/guide/introduce',
          '/guide/get-started',
        ]
      },
      {
        title: '组件',
        collapsable: false
      },

    ]
  },
  scss:{
    includePaths: [path.join(__dirname, '../../styles')]
  }
}
