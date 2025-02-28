export default {
  pages: [
    'pages/index/index',
    'pages/domestic/index',
    'pages/training/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#000000',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/tabbar/Home.png',
        selectedIconPath: 'assets/tabbar/Home.png'
      },
      {
        pagePath: 'pages/domestic/index',
        text: '国内企业',
        iconPath: 'assets/tabbar/DomesticEnterprises.png',
        selectedIconPath: 'assets/tabbar/DomesticEnterprises.png'
      },
      {
        pagePath: 'pages/training/index',
        text: '培训活动',
        iconPath: 'assets/tabbar/TrainingActivities.png',
        selectedIconPath: 'assets/tabbar/TrainingActivities.png'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: 'assets/tabbar/MyPage.png',
        selectedIconPath: 'assets/tabbar/MyPage.png'
      }
    ]
  }
}
