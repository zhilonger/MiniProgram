// pages/info/info.js

//创建音频
const myaudio = wx.createInnerAudioContext({});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['../images/timg1.jpg', '../images/timg2.png', '../images/timg3.jpg'],
    infos:{'name':"马小勇",'phone':'13333333333','mail':'zhilonger@163.com','zhi':'全栈开发'},
    navgita:[
      { 'url': '../images/prev.png', 'txt': '嘘寒问暖' },
      { 'url': '../images/money.png', 'txt': '打笔巨款' },
      { 'url': '../images/love.png', 'txt': '●●●' }
    ],
    isplay: true
  },
  //音频播放
  play: function () {
    myaudio.play();
    console.log(myaudio.duration);
    this.setData({ isplay: true });
  },
  // 音频暂停
  stop: function () {
    myaudio.pause();
    this.setData({ isplay: false });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {

    //loading动画显示
    wx.showLoading({
      title: '加载中',
    })

    //暂停动画
    myaudio.onPause(function () {
      wx.showToast({
        title: '已暂停',
      })
    })

    //设置音频路径和属性
    myaudio.src = "http://vd2.bdstatic.com/mda-iicuk42aeny2vsmw/sc/mda-iicuk42aeny2vsmw.mp4";
    myaudio.autoplay = true;
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //loading动画隐藏
    setTimeout(function () {
      wx.hideLoading()
    },200)
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})