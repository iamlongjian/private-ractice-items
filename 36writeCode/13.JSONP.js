/**
 * JSONP的核心原理：script标签不受同源策略的限制，所以可以用来进行跨域请求，优点是兼容性好，但是只支持GET请求
 */

const jsonp = ({ url, params, callbakName }) => {
  const generateUrl = () => {
    let dataSrc = ''
    for (const key in params) {
      if (Object.hasOwnProperty.call(params, key)) {
        const element = params[key];
        dataSrc += `${key}=${params[key]}`
      }
    }
    dataSrc += `callback=${callbakName}`
    return url + dataSrc
  }
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement('script')
    scriptEle.src = generateUrl()
    window[callbakName] = (data) => {
      resolve(data)
      document.removeChild(scriptEle)
    }
  })
}

jsonp({ url: `https:baidu.com`, params: { key: 'key', val: 'val' }, callbakName: 'cbs' })