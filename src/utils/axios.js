import Axios from 'axios'
const axios =Axios.create({
    baseURL:'/'
});
// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error.response) // 返回接口返回的错误信息
    }
)