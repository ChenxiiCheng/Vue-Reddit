import axios from 'axios';
import { Message, Loading } from 'element-ui';

/**
 * 封装Message
 */
const MsgError = () => {
  Message({
    type: 'error',
    message: 'Ohhh some problems happen, please refresh page！'
  });
};

/**
 * 封装Loading
 */
let loadingInstance;
const startLoading = () => {
  loadingInstance = Loading.service({
    text: "I'm Loading... Please don't hurry me",
    fullscreenLoading: true,
    spinner: 'el-icon-loading'
  });
};

const endLoading = () => {
  loadingInstance.close();
};

/**
 * 创建axios实例
 */
const instance = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
  timeout: 3000
});

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
  function(config) {
    startLoading();
    return config;
  },
  function(error) {
    endLoading();
    MsgError();
    return Promise.reject(error);
  }
);

/**
 * 添加响应拦截器
 */
instance.interceptors.response.use(
  function(response) {
    endLoading();
    return response.data;
  },
  function(error) {
    endLoading();
    MsgError();
    return Promise.reject(error);
  }
);

export default instance;
