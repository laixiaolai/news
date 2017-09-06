//content.js
//获取应用实例
Page({
  data: {
    content: '正文内容'
  },
  onLoad: function () { // 设置title
    var app = getApp(),
      article = app.globalData.curArticle;
    wx.setNavigationBarTitle({
      title: article.title
    });

  }
})
