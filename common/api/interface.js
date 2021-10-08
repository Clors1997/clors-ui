/**
 * 通用uni-app网络请求
 * 基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
 */

/*
// 开放的接口
import http from './interface'
http.config.baseUrl = "http://localhost:8080/api/"
http.request(url:'user/list',method:'GET').then((res)=>{
	console.log(JSON.stringify(res))
})
http.get('user/list').then((res)=>{
	console.log(JSON.stringify(res))
})
http.get('user/list', {status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.post('user', {id:1, status: 1}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.put('user/1', {status: 2}).then((res)=>{
	console.log(JSON.stringify(res))
})
http.delete('user/1').then((res)=>{
	console.log(JSON.stringify(res))
}) 
*/
import global_type from "./global_type.js"

let data_type = {}

export default {
  config: {
    baseUrl: "https://getman.cn/mock/clors/demo",
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {},
    method: "GET",
    dataType: "json",
    /* 如设为json，会对返回的数据做一次 JSON.parse */
    responseType: "text",
    success() {},
    fail() {},
    complete() {}
  },
  interceptor: {
    request: null,
    response: null
  },
  request(options) {
    if (!options) {
      options = {}
    }
    if(options.data_type) {
      data_type = options.data_type
      delete options.data_type
    }else {
      data_type = {}
    }
    options.baseUrl = options.baseUrl ||
      this.config.baseUrl
    options.dataType = options
      .dataType || this.config.dataType
    options.url = options.baseUrl +
      options.url
    options.data = options.data || {}
    options.method = options.method ||
      this.config.method
    //TODO 加密数据

    //TODO 数据签名
    /* 
    _token = {'token': getStorage(STOREKEY_LOGIN).token || 'undefined'},
    _sign = {'sign': sign(JSON.stringify(options.data))}
    options.header = Object.assign({}, options.header, _token,_sign) 
    */

    return new Promise((resolve,
      reject) => {
      let _config = null

      options.complete = (
        response) => {
        let statusCode = response
          .statusCode
        response.config = _config
        if (process.env
          .NODE_ENV ===
          'development') {
          if (statusCode ===
            200) {
            console.log("【" +
              _config
              .requestId +
              "】 结果：", response
              .data)
          }
        }
        if (this.interceptor
          .response) {
          let newResponse = this
            .interceptor.response(
              response)
          if (newResponse) {
            response = newResponse
          }
        }
        // 统一的响应日志记录
        // _reslog(response)
        if (statusCode === 200) { //成功
          // 成功时，每次输出最新结构
          console.log("【" + _config.requestId + "】 结构：", getResponceObj( response.data ))
          
          // 判断全局类型
          let global_check = checkResponceObj(global_type, response.data)
          if(global_check === true) {
            //判断局部类型
            if(response.data.rc == 0) {
              let data_check = checkResponceObj(data_type, response.data)
              if(data_check === true) {
                resolve(response);
              }else {
                reject({
                  key: data_check,
                  response
                })
              }
            }else {
              resolve(response);
            }
          }else {
            reject({
              key: global_check,
              response
            })
          }
        } else {
          reject(response)
        }
      }

      _config = Object.assign({},
        this.config, options)
      _config.requestId = new Date()
        .getTime()

      if (this.interceptor
        .request) {
        this.interceptor.request(
          _config)
      }

      // 统一的请求日志记录
      // _reqlog(_config)

      if (process.env.NODE_ENV ===
        'development') {
        console.log("【" + _config
          .requestId + "】 地址：" +
          _config.url)
        if (_config.data) {
          console.log("【" + _config
            .requestId + "】 参数：" +
            JSON.stringify(_config
              .data))
        }
      }
      uni.request(_config);
    });
  },
  get(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'GET'
    return this.request(options)
  },
  post(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'POST'
    return this.request(options)
  },
  put(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'PUT'
    return this.request(options)
  },
  delete(url, data, options) {
    if (!options) {
      options = {}
    }
    options.url = url
    options.data = data
    options.method = 'DELETE'
    return this.request(options)
  }
}


/**
 * 请求接口日志记录
 */
function _reqlog(req) {
  // if (process.env.NODE_ENV === 'development') {
  // 	console.log("【" + req.requestId + "】 地址：" + req.url)
  // }
  //TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
  let _statusCode = res.statusCode;
  if (process.env.NODE_ENV ===
    'development') {
    console.log("【" + res.config
      .requestId + "】 地址：" + res
      .config.url)
    console.log("【" + res.config
      .requestId + "】 响应结果：" + JSON
      .stringify(res))
  }
  //TODO 除了接口服务错误外，其他日志调接口异步写入日志数据库
  switch (_statusCode) {
    case 200:
      break;
    case 401:
      break;
    case 404:
      break;
    default:
      break;
  }
}

/**
 * 解析结构
 */
function getResponceObj(res) {
  let type_obj = {}
  for (let key in res) {
    let type = Object.prototype.toString
      .call(res[key])
    switch (type) {
      case '[object Number]':
        type_obj[key] = {
          type: '[object Number]'
        }
        break;
      case '[object String]':
        type_obj[key] = {
          type: '[object String]'
        }
        break;
      case '[object Object]':
        type_obj[key] = {
          type: '[object Object]',
          data: getResponceObj(
            res[key])
        }
        break;
      case '[object Array]':
        type_obj[key] = {
          type: '[object Array]',
          data: res[key].length > 0 ?
            getResponceObj(res[
              key][0]) : {}
        }
        break;
      default:
        break;
    }
  }
  return type_obj
}

/**
 * 检查结构
 */
function checkResponceObj(default_type, res) {
  for (let key in default_type) {
    let type = Object.prototype.toString.call(res[key])
    switch (type) {
      case '[object Number]':
      case '[object String]':
        if(type === default_type[key].type) {
          continue;
        }else {
          return key;
        }
        break;
      case '[object Object]':
        if(type === default_type[key].type && checkResponceObj(default_type[key].data, res[key]) === true) {
          continue;
        }else {
          return key
        }
        break;
      case '[object Array]':
        if(type === default_type[key].type) {
          for (let key2 in res[key]) {
            if(checkResponceObj(default_type[key].data, res[key][key2]) === true) {
              continue
            }else {
              return key
            }
          }
          continue;
        }else {
          return key
        }
        break
      default:
        break
    }
  }
  return true
}
