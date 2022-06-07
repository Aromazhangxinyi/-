// pages/mine/mine.js
var app = getApp()
Page({
  data: {
    userInfo: {},
    motto: 'Hello MaskAngel',
    // orderItems
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '../../images/待付款.png',
      },
      {
        typeId: 1,
        name: '待发货',
        url: 'bill',
        imageurl: 'waiting.png',
      },
      {
        typeId: 2,
        name: '待收货',
        url: 'bill',
        imageurl: '../../images/having.png'
      },
      {
        typeId: 3,
        name: '待评价',
        url: 'bill',
        imageurl: '../../saying.png'
      }
    ],
  },
  //事件处理函数
  //toOrder :事件监听，跳转到我的订单界面；onLoad：在加载过程中，获取用户的信息
  toOrder: function () {
    wx.navigateTo({
      url: '../shopping/shopping'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
