const { createApp } = Vue

createApp({
  data() {
    return {
      shopName: 'UltraKoki',
      menuItems: [
        { id: 1, text: '首页', link: '#' },
        { id: 3, text: 'APP', link: 'app.html' },
        { id: 4, text: '产品手册', link: 'manual.html' },
        { id: 5, text: '联系方式', link: 'contact.html' }
      ],
      heroTitle: 'UltraKoki 追求极致咖啡体验',
      heroSubtitle: '为您带来专业级咖啡冲泡体验',
      products: [
        {
          id: 1,
          name: 'UltraKoki Pro 手冲咖啡壶',
          description: '德国进口不锈钢，精密温控系统',
          price: 599,
          image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
          id: 2,
          name: 'UltraKoki Scale 咖啡秤',
          description: '0.1g精确度，蓝牙连接，智能计时',
          price: 399,
          image: 'https://images.unsplash.com/photo-1517080317843-0b926a4d2b6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
          id: 3,
          name: 'UltraKoki Grinder 磨豆机',
          description: '钛合金磨盘，45档精密调节',
          price: 859,
          image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }
      ],
      contactInfo: {
        email: 'Service@ultrakoki.com',
        address: '广东省深圳市光明区马田街道将石路182号合和工业园2楼',
        contact: '廖先生',
        phone: '13603013812'
      },
      footerText: '© 2024 UltraKoki 版权所有'
    }
  }
}).mount('#app')
