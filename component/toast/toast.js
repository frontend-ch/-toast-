// toast.js

/**
 * 显示toast 默认3000ms
 */
function showToast(page, toastText, count, isShowMask) {

  // toast时间  
  count = parseInt(count) ? parseInt(count) : 3000;

  page.setData({
    //设置toast时间，toast内容  
    count: count,
    toastText: toastText,
    // 显示toast  
    isShowToast: true,
    isShowMask: isShowMask,
  });

  // 定时器关闭  
  setTimeout(function () {
    page.setData({
      isShowToast: false,
      isShowMask: false
    });
  }, count);
}

/**
 * 显示toast 默认1500ms 
 */
function showToastDefault(page, toastText) {
  this.showToast(page, toastText, 1500, false);
}

/**
 * 全屏不可点击 显示toast 默认2000ms 
 */
function showToastWithMask(page, toastText) {
  this.showToast(page, toastText, 2000, true);
}

module.exports = {
  showToast: showToast,
  showToastDefault: showToastDefault,
  showToastWithMask: showToastWithMask
}
