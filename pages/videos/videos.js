// pages/videos/videos.js
Page({
  data:{
    dataArray: [],
    lengths: []//播放时长的数组，将数据的秒数转化成 00:00 的格式
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    wx.request({
      url: 'https://c.m.163.com/recommend/getChanListNews',
      data: {"channel":"T1457068979049", "size":10},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data["视频"])
        that.setData({
          dataArray: res.data["视频"]
        })
        var arr = res.data["视频"]
        var lengths = []
        for(var i = 0;i<arr.length;i++) {
          var item = arr[i]
          lengths.push(that.videoLength(item.length))
        }
        console.log(lengths)
        that.setData({
          lengths: lengths
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  videoLength: function(seconds) {
    var time = parseInt(seconds)
    var minute = 0, second = 0
    if(time>60) {
      minute = parseInt(time/60)
      second = parseInt(time%60)
      return minute+":"+this.fix(second,2)
    }else {
      return String(time)
    }
  },

  fix: function (num, length) {
    return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num
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
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'CCNews', // 分享标题
      desc: 'videos',
      path: 'pages/videos/videos' // 分享路径
    }
  }
})