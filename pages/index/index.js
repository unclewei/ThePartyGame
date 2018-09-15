//index.js
//获取应用实例
const app = getApp()
import {
  contents,
  imgs
} from '../inc/content.js';
Page({

  data: {
    image: '../images/img14.jpg',
    content: {
      title: 'The Party Game',
      text: '点击卡片，做你所做，说你所想，即可。',
    },
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
      }, 1950);
       
      setTimeout(function() {
        that.randomCard();
      }, 1800);

    }
  },

  /**
   * 抽卡
   */
  randomCard: function() {
    var that = this;
    var randomImgsNub = that.random(0, imgs.length);
    var randomContentNub = that.random(0, contents.length);
    that.setData({
      image: imgs[randomImgsNub],
      content: contents[randomContentNub]
    })
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