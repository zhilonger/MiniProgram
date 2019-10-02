// pages/jian/jian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    work: [
      { "date": "2017.10-", "company": "xxxx" },
      { "date": "2015.06-2017.09", "company": "xxxx" },
      { "date": "2008.09-2014.09", "company": "中远海运" },
    ],
    education: [
      { "date": "2004.09-2008.07", "company": "武汉理工大学" },
      { "date": "2001.09-2004.07", "company": "安阳县一中" },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //loading动画显示
    wx.showLoading({
      title: '加载中',
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //loading动画隐藏
    setTimeout(function () {
      wx.hideLoading()
    }, 200)
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