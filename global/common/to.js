export default function(page) {
  console.log(page)
  uni.navigateTo({
    url: "../"+page+"/"+page
  })
}