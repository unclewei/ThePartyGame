const imgs = [
  '../images/img1.jpg',
  '../images/img2.jpg',
  '../images/img3.jpg',
  '../images/img4.jpg',
  '../images/img5.jpg',
  '../images/img6.jpg',
  '../images/img7.jpg',
  '../images/img8.jpg',
  '../images/img9.jpg',
  '../images/img10.jpg',
  '../images/img11.jpg',
  '../images/img12.jpg',
  '../images/img13.jpg',
  '../images/img14.jpg',
  '../images/img15.jpg',
  '../images/img16.jpg',
  '../images/img17.jpg',
  '../images/img18.jpg',
  '../images/img19.jpg'
];

const contents = [{
    title: 'The Truth',
    text: '第一次XXOO是在何时何地与何人',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '细细道来，最刺激的一次XXOO',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '说一个最尴尬的XXOO经历',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '对肛交有什么看法',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '对BJ有什么看法',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '抖M or 抖S',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '最刺激的一次BJ',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '说一个和EX的故事',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: 'EX做过什么事情感动过你',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '为什么和EX分手？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: 'EX的活儿，好吗？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '评价一下EX',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '和EX做过最刺激的事情',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '最近的性幻想对象',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '最喜欢的体位,为什么？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '自慰的频率',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '说一说XXOO中发生过有趣的事',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '有没有试过无套XXOO？(不推荐)',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '讲一下你未来五年的计划',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '描述一下理想的婚姻',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '描述一下 最完美的 另一半 是怎么样的？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '在大庭广众下做过最丢脸的事情',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '这辈子最遗憾的事情',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '说一个自己觉得自己最尴尬的事情',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '你认为活着，最重要是什么',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '有用过性玩具吗',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '收到过最奇怪的礼物',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '对你左边第一个人说一句话，你会说什么',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '对你左边第二个人说一句话，你会说什么',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '对你右边第一个人说一句话，你会说什么',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '对你右边第二个人说一句话，你会说什么',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '说一个秘密吧~',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '挑一个人，问一个你想问的问题',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '挑一个人，让他/她问你一个问题',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '打开手机的相册，说说第二张相片的故事',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '在座的异性中，最喜欢谁，为什么？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '觉得这个小程序怎么样？(哈哈哈哈哈-来自作者的偷笑)',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '说一说你的兴趣爱好吧(真的找不到还有啥可问的了~)',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '多少钱可以睡你一晚？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '对一夜情有什么看法？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '试过一夜情吗？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '最快的一次XXOO，多快？和谁？知道原因吗？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '1-10分，给自己的XXOO技术打分？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '1-10分，给自己的容貌打分？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '1-10分，给自己的身材打分？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '1-10分，给自己的性格打分？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '迄今为止，做过最有成就感的事情，30秒，说一下',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '如果可以对EX说一句话，你会说什么',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '最敏感的部位？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '你手机里有毛片吗？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '第一次ZW是什么时候，在什么地方，什么启发的？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '有用过什么奇怪的道具ZW吗？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '选一个明星和你XXOO，你选谁，为什么？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '你觉得你是一个事业心很重的人吗？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '你觉得69这个姿势怎么样？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '最讨厌XXOO时候的哪种行为？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '最享受XXOO时候的哪种行为？',
    contentType: 1
  },
  {
    title: 'The Truth',
    text: '你觉得你是渣男/女吗？',
    contentType: 1
  },
];

module.exports = {
  contents,
  imgs
}