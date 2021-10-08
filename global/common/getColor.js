/**
 * 用于获取颜色class
 */
export default function(...a_color_class) {
  let theme = getApp({allowDefault: true}).globalData.theme || ''
  if(theme == '') {
    return a_color_class;
  }else {
    return a_color_class.map(function(item){return item+'-'+theme});
  }
}