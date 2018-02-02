export function goodTime (input) {
  var now = new Date().getTime()
  var oldTime = input

  // var y = oldTime.getFullYear();
  // var m = oldTime.getMonth() + 1;
  // var d = oldTime.getDate();
  // return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + oldTime.toTimeString().substr(0, 8);
  let oDate = new Date(oldTime)
  let oYear = oDate.getFullYear()
  let oMonth = oDate.getMonth() + 1
  let oDay = oDate.getDate()
  let oHours = oDate.getHours()
  let oMinute = oDate.getMinutes()           // 暂不用

  let difference = now - oldTime;
  let result = '';
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;
  let year = month * 12;

  
  var _year = difference / year;
  var _month = difference / month;
  var _week = difference / (7 * day);
  var _day = difference / day;
  var _hour = difference / hour;
  var _min = difference / minute;
  if (_year >= 1) { result = oYear+'-'+oMonth+'-'+oDay+'/'+oHours+ "  " +  ~~(_year) + "年前" }
  else if (_month >= 1) { result =oYear+'-'+oMonth+'-'+oDay+'/'+oHours+ "  " + ~~(_month) + "个月前" }
  else if (_week >= 1) { result =oYear+'-'+oMonth+'-'+oDay+'/'+oHours+ "  " + ~~(_week) + "周前" }
  else if (_day >= 1) { result =  oYear+'-'+oMonth+'-'+oDay+'/'+oHours+ "  " + ~~(_day) + "天前" }
  else if (_hour >= 1) { result =  oYear+'-'+oMonth+'-'+oDay+'/'+oHours+ "  " + ~~(_hour) + "个小时前" }
  else if (_min >= 1) { result =  oYear+'-'+oMonth+'-'+oDay+'/'+oHours+ "  " + ~~(_min) + "分钟前" }
  else result = '刚刚'
  return result
}

