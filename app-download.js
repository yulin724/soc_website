const { createApp } = Vue

createApp({
  data() {
    return {
      shopName: 'UltraKoki',
      menuItems: [
        { id: 1, text: '首页', link: '../../index.html' },
        { id: 2, text: '产品', link: '../../index.html#products' },
        { id: 3, text: 'APP', link: '../../app.html' },
        { id: 4, text: '联系方式', link: '../../contact.html' }
      ],
      footerText: '© 2024 UltraKoki 版权所有'
    }
  }
}).mount('#app-download')
