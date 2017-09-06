//app.js
App({
  init: function() {
    this.globalData.userInfo = {
      "nickName": "Lonzo",
      "avatarUrl": "http://wx.qlogo.cn/mmopen/icSHGibMIMB82jDEHibGFA1s6dhwMibWrQAPeRvT2w2y2rpZVM5l3BftVEr3rTgX4fXDlznnMmZY0zYtgkfFw7L3o9r0tTblGTxB/0",
      "gender": 1,
      "province": "福建",
      "city": "厦门",
      "country": "中国"
    };
  },
  onLaunch: function() {
    this.init();
  },
  globalData: {
    curAritcle: null
  }
})
