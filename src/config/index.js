/*
 * 环境配置封装
 * @date
 */
const env = import.meta.env.MODE || "prod";
const EnvConfig = {
  dev: {
    baseApi: "/",
    mockApi: "https://www.fastmock.site/mock/e7aee5c4f59f03ff4b6b33d30d6b9a8b/api",
  },
  test: {
    baseApi: "//test.baidu.com/api",
    mockApi: "https://www.fastmock.site/mock/e7aee5c4f59f03ff4b6b33d30d6b9a8b/api",
  },
  prod: {
    baseApi: "//baidu.com/api",
    mockApi: "",
  },
};
export default {
  env,
  namespace: 'manager',
  mock: true,
  ...EnvConfig[env]
};
