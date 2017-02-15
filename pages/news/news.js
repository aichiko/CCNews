// pages/news/news.js
Page({
  data:{
    dataArray:Array(),
    imageUrl: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1484295395524&di=d9fff879b6477d5bdc797323f4ba83c0&imgtype=0&src=http%3A%2F%2Fwww.hao1111.cn%2Fuploads%2Fallimg%2F161227%2F2139113R6-0.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1484295395524&di=d9fff879b6477d5bdc797323f4ba83c0&imgtype=0&src=http%3A%2F%2Fwww.hao1111.cn%2Fuploads%2Fallimg%2F161227%2F2139113R6-0.jpg"],
    name: "ash",
    indicator: true
  },
  showHud: function(error) {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  //进入详情界面
  goDetail: function(item) {
    console.log("goDetail")
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    //this.showHud()
    var that=this
    var imageArray = that.data.imageUrl
    this.setData({
      indicator: imageArray.length>1?true:false
    })//如果图片只有一张则不显示indicator
    wx.request({
      url: 'https://c.m.163.com/nc/article/list/T1467284926140/0-20.html',
      data: {},
      header: {
      'content-type': 'application/json'
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data)
        var arr = res.data["T1467284926140"]
        var arr2 = arr.shift()//移除最前面的一个image 新闻
        console.log(arr2)
        that.setData({
           dataArray: arr
         })
         try{
            wx.setStorageSync('newsStorage', arr)
         }catch (error){
            console.log(error)
         }
         
      },
      fail: function() {
        // fail
        //that.showHud()
      },
      complete: function() {
        // complete
        //that.showHud()
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
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'CCNews', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})