//index.js
//获取应用实例
const app = getApp();
//创建音频
const myaudio = wx.createInnerAudioContext({});
Page({
  data: {
    motto: '欢迎来到我的小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isplay:true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //跳转到个人信息页面
  checkInfo:function(){
    wx.reLaunch({
      url: '../info/info'
    })
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
  onLoad: function () {

    //loading动画显示
    wx.showLoading({
      title: '加载中',
    })

    //暂停动画
    myaudio.onPause(function () {
      // console.log('mmp')
      wx.showToast({
        title: '已暂停',
      })
    })

    //设置音频路径和属性
    myaudio.src = "http://vd2.bdstatic.com/mda-iicuk42aeny2vsmw/sc/mda-iicuk42aeny2vsmw.mp4";
    myaudio.autoplay = true;



    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },
  onReady:function(){
    //loading动画隐藏
    setTimeout(function () {
      wx.hideLoading()
    },200)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
