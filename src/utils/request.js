/*
 * axios二次封装
 */
import axois from "axios";
import router from "./../router";
// import { ELMessage } from "element-plus";
import config from "./../config";

const TOKEN_INVAILD = "token认证失败，请重新登陆";
const NETWORK_ERROR = "网络请求异常，请稍后重试";

// 创建axois实例对象，添加全局配置
const service = axois.create({
  baseURL: config.baseApi,
  timeout: 8000,
});

// 请求拦截
service.interceptors.request.use((req) => {
  // TODO
  const headers = req.headers;
  if (!headers.Authorization) headers.Authorization = "Bear Jack";
  return req;
});

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data;
  if (code === 200) {
    return data;
  } else if (code === 40001) {
    // ELMessage.error(TOKEN_INVAILD);
    setTimeout(() => {
      router.push("/login");
    }, 15000);
    return Promise.reject(TOKEN_INVAILD);
  } else {
    // ELMessage.error(msg || NETWORK_ERROR);
    return Promise.reject(msg || NETWORK_ERROR);
  }
});

/*
 * 请求核心函数
 */

function request(options) {
  options.method = options.method || "get";
  if (options.method.toLowerCase() === "get") {
    options.params = options.data;
  }
  if (config.env === "prod") {
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
  }
  return service(options);
}

["get", "post", "put", "delete", "patch"].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      method: item,
      url,
      data,
      ...options,
    });
  };
});

export default request;
