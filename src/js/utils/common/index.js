let Common = {
  formatDate:function(inputTime,style){
    const date = new Date(inputTime);
    const Y = date.getFullYear() + style;
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + style;
    const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    return {
      YMD: Y + M + D,
      YMDhms: Y + M + D + '  ' + h + m + s,
      ymd: Y + '年' + M + '月' + D + '日'
    };
  }
}

module.exports = Common;