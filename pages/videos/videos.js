// pages/videos/videos.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    wx.request({
    url: 'https://c.m.163.com/recommend/getChanListNews',
    data: {"channel":"T1457068979049", "size":10},
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: function(res){
      // success
      console.log(res)
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  

})