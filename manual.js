const { createApp } = Vue

createApp({
  data() {
    return {
      shopName: 'UltraKoki 精品咖啡器具',
      menuItems: [
        { id: 1, text: '首页', link: 'index.html' },
        { id: 2, text: '产品手册', link: 'manual.html' },
        { id: 3, text: 'APP', link: 'app.html' },
        { id: 4, text: '联系方式', link: 'contact.html' }
      ],
      manualCategories: [
        {
          id: 1,
          name: '开箱必看',
          manuals: {
            simplified: './manuals/1-开箱必看-2023中文版.pdf',
            japanese: './manuals/1-开箱必看-2023日文版.pdf',
            english: './manuals/1-开箱必看-2023英文版.pdf'
          }
        },
        {
          id: 2,
          name: '操作说明书',
          manuals: {
            simplified: './manuals/2-手冲咖啡秤简体说明书.pdf',
            traditional: './manuals/2-操作說明書繁體_220524.pdf',
            english: './manuals/2-UserManual221026.pdf'
          }
        },
        {
          id: 3,
          name: '使用攻略',
          manuals: {
            simplified: './manuals/3-天秤應用攻略S.pdf',
            traditional: './manuals/3-天秤應用攻略T.pdf',
            english: './manuals/3-ApplicationGuide.pdf'
          }
        }
      ],
      footerText: '© 2024 UltraKoki 版权所有'
    }
  }
}).mount('#manual-app')
