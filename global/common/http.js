import Request from '@/global/global-config/plug-in/luch-request/index.js'

const getTokenStorage = () => {
	let token = ''
	try {
		token = uni.getStorageSync('token')
	} catch (e) {}
	return token
}

const http = new Request()
/**
 * 修改全局配置示例
 const http = new Request({
	header: {a:1}, // 举例
	baseURL: 'https://www.fastmock.site/mock/26243bdf9062eeae2848fc67603bda2d/luchrequest',
	validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置
		return statusCode >= 200 && statusCode < 300
	}
})
 http.config.baseURL = 'https://www.fastmock.site/mock/26243bdf9062eeae2848fc67603bda2d/luchrequest'
 **/

http.setConfig((config) => { /* 设置全局配置 */
	config.baseURL = 'https://www.fastmock.site/mock/26243bdf9062eeae2848fc67603bda2d/luchrequest'
	config.header = {
		...config.header,
		a: 1, // 演示
		b: 2 // 演示
	}
	config.custom = {
		// auth: false, // 是否传token
		// loading: false // 是否使用loading
	}
	return config
})

http.interceptors.request.use((config) => { /* 请求之前拦截器。可以使用async await 做异步操作  */
	config.header = {
		...config.header,
		a: 3 // 演示
	}
	/**
	 * custom {Object} - 自定义参数
	 */
	// if (config.custom.auth) {
	//   config.header.token = '123456'
	// }
	// if (config.custom.loading) {
	//   uni.showLoading()
	// }
	/*
	if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
	  return Promise.reject(config)
	}
	*/
	return config
}, (config) => {
	return Promise.reject(config)
})


http.interceptors.response.use((response) => { /* 请求之后拦截器。可以使用async await 做异步操作  */
	// if (response.config.custom.loading) {
	//    uni.hideLoading()
	//  }
	if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
		return Promise.reject(response)
	}
	return response
}, (response) => { // 请求错误做点什么。可以使用async await 做异步操作
	// if (response.config.custom.loading) {
	//    uni.hideLoading()
	//  }
	return Promise.reject(response)
})


export default http;