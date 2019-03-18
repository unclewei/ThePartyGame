//index.js
//获取应用实例
const app = getApp()
var setCardTime = 800;
var localContentList = [];
var randomImgsNub = ''
var randomContentNub = ''
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
      }, 950);
       
      setTimeout(function() {
        that.randomCard();
      }, setCardTime);

    }
  },

  /**
   * 抽卡
   */
  randomCard: function() {
    var that = this;
    if (localContentList.length == 0){
      localContentList = contents;
    }
    randomImgsNub = that.random(0, imgs.length);
    randomContentNub = that.random(0, localContentList.length);
    that.setData({
      image: imgs[randomImgsNub],
      content: localContentList[randomContentNub]
    })
    localContentList.splice(randomContentNub,1);
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

  onLoad: function(e) {
    console.log(e)
    localContentList = contents;
    this.showDataBegain(e);
    var phoneInfo = wx.getSystemInfoSync();
    if (phoneInfo.system.indexOf('iOS') != -1 || phoneInfo.model.indexOf('iPhone') != -1){
      setCardTime = 750;
      console.log('是苹果系统')
    }
  },
  gotoExplain(){
    wx.navigateTo({
      url: '../decode/decode',
    })
  },

  showDataBegain(options){
    var that = this
    var randomContentNub = options.randomContentNub;
    var randomImgsNub = options.randomImgsNub;
    if (randomImgsNub || randomContentNub){
      that.setData({
        image: imgs[randomImgsNub],
        content: localContentList[randomContentNub]
      })
      localContentList.splice(randomContentNub, 1);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: `【${this.data.content.title}】${this.data.content.text}`,
      path: `/pages/index/index?randomContentNub=${randomContentNub}&randomImgsNub==${randomImgsNub}`,
      imageUrl: this.data.image,
    }
  }

})