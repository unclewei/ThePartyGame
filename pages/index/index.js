//index.js
//获取应用实例
const app = getApp()
import {
  contents,
  imgs
} from '../inc/content.js';
Page({

  data: {
    title: 'The Truth',
    text: '哟哟哟哟哟哟哟哟',
    frameClass1: 'frame z1', //默认正面在上面
    frameClass2: 'frame z2'

  },

  rotateFn: function(e) {
    var that = this
    if (this.data.frameClass1 == 'frame z1' &&
      this.data.frameClass2 == 'frame z2') {
      that.setData({
        frameClass1: "frame front",
        frameClass2: "frame back",
      })
      setTimeout(function() {
        that.setData({
          frameClass1: "frame z1",
          frameClass2: "frame z2",
        })
      }, 2000);
    }
  },

  /**
   * random 
   * min ≤ r < max
   */
  random: function(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.floor(Rand * Range); //舍去
    return num;
  },

  onLoad: function() {

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