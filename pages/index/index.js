//index.js
//获取应用实例
const app = getApp()

Page({
  

  onLoad:function(){

  },

  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '小程序',
      path: '/pages/index/index'
    }
  }

})