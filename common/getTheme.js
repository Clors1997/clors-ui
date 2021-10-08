export default function() {
  return getApp({allowDefault: true}).globalData.theme || ''
}