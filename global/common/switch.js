export default function(page) {
  console.log(page)
  uni.switchTab({
    url: "../home/"+page
  })
}