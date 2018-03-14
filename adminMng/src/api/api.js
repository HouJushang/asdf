/**
 * Created by gen on 2017/8/29.
 */
import axios from 'axios'
import {baseUrl} from '../config'

axios.interceptors.response.use(function (response) {
  const responseData = response.data;
  switch (responseData.code) {
    case 'success':
      return Promise.resolve(responseData.data);
    case 'error':
      return Promise.reject(responseData.message);
    default:
      return Promise.reject(response);
  }
}, function (error) {
  alert('网络请求错误' + error)
})

const getApi = function (url, data) {
  url = baseUrl + url
  return axios.get(url, {
    params: data,
  })
}
const delApi = function (url, data) {
  url = baseUrl + url
  return axios.delete(url, {
    params: data
  })
}

const postApi = function (url, data) {
  url = baseUrl + url
  return axios.post(url, data)
}

const putApi = function (url, data) {
  url = baseUrl + url
  return axios.put(url, data)
}
const upload = function (url, data) {
  url = baseUrl + url
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  })
}
export {
  getApi,
  delApi,
  postApi,
  putApi,
  upload,
}
