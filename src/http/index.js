
import axios from 'axios'


//设置baseURL
axios.defaults.baseURL = 'http://tt.linweiqin.com/api/tt';

//添加请求拦截器（所有的请求都会触发拦截器）
//每次请求，都给当前参数添加token字符串

axios.interceptors.request.use(function (config) { 
    //获取本地存储userinfo
    let userInfo = localStorage.getItem('userInfo');
    //判断本地存储是否为空对象
    if (userInfo) { 
        let oUserInfo = JSON.parse(userInfo);
        //判断请求的方法是get(data)还是post(params)
        config.data && (config.data['oauth_token'] = oUserInfo.oauth_token);
        config.params && (config.params['oauth_token'] = oUserInfo.oauth_token);
    }
// 必须return config.否则请求中断.
// 在发送请求之前做些什么
    return config;
}, function (error) { 
// 对请求错误做些什么
    return Promise.reject(error);
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});