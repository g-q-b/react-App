import React from 'react';

import axios from 'axios';

import PubSub from 'pubsub-js'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  //通知app 修改bLoading数据
  PubSub.publish('VIEW_LOADING',true);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  //通知app 修改bLoading数据
  PubSub.publish('VIEW_LOADING',false);
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

React.Component.axios=axios;
window.axios = axios;

export default axios;