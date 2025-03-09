const { createApp } = Vue

createApp({
    data() {
        return {
            shopName: 'UltraKoki 精品咖啡器具',
            menuItems: [
                { id: 1, text: '首页', link: 'index.html' },
                { id: 2, text: '产品', link: 'index.html#products' },
                { id: 3, text: 'APP', link: 'index.html#app-download' },
                { id: 4, text: '联系方式', link: 'contact.html' }
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
}).mount('#contact-app')
