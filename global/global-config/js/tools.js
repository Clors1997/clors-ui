/* ============================
	js工具文件
 ==============================*/
module.exports = {
	//32位uuid
	uuid() {
		return `dxxxxxxxxxxxxxxxxxx${new Date().getTime()}`.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});;
	},
	//json赋值化
	jsonParse(e) {
		return JSON.parse(JSON.stringify(e))
	},
  // 防抖
	debounce: (fn, delay=300) => {
		let timer = null
		return function() {
			if (timer) {
				clearTimeout(timer)
			}
			timer = setTimeout(fn, delay)
		}
	},
  // 节流
	throttle: (fn, delay=300) => {
		let valid = true
		return function() {
			if (!valid) {
				return false
			}
			valid = false
			setTimeout(() => {
				fn()
				valid = true
			}, delay)
		}
	}
}
