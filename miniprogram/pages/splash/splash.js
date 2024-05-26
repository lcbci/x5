Page({
  onLoad: function() {
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/index/index' // 这里替换为你的Tab页面路径
      });
    }, 3000); // 3000毫秒后执行，即3秒
  }
});
