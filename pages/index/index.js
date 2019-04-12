//index.js
//获取应用实例
const app = getApp()
var toast = require('../../component/toast/toast.js');

Page({
  data: {

  },
  onLoad: function () {
   
  },
  onToastShow: function(e) {
    toast.showToastDefault(this,"弹出toast");
  }
})
