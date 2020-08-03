/**
 * @description 该配置文件用于记录全局变量,多用于不变的常量
 * @example  在vue调用   this.apiHost
 * @example  在js调用  import config from 'config.js'   config.apiHost
 */
import Vue from 'vue'
var vueConfig = require('../../vue.config.js')

// 基础路径
var baseUrl = vueConfig['devServer']['proxy']['/api']['baseUrl'];

//代理地址
var proxyUrl = vueConfig['devServer']['proxy']['/api']['target'];

let configList = {

    //打包发布地址
    // apiHost: process.env.NODE_ENV === 'development' ? "/api/" + baseUrl : baseUrl,
    //打包发布地址 npm run test:测试环境的请求带api
    apiHost: "http://127.0.0.1:8888/",

    //打包发布地址
    qjImgHost: process.env.NODE_ENV === 'development' ? "/qj/":"",

    //代理地址(用作后台返回相对路径图片)
    requestHost:process.env.NODE_ENV === 'development' ? proxyUrl + baseUrl : baseUrl,

    //是否开启debug模式 ,该模式会吧F12常用调试信息以tips形式展现,1.弹出请求的参数
    openDebug: process.env.NODE_ENV === 'development' ? false : false,

    // 基础路径
    baseUrl:baseUrl,

    //该模式会监听所有报错并保存到缓存（未实现）
    openWatchError:false,

    //是否开启json数据监测，不规范得json会报错并提醒
    openJsonCheck: true,

    //是否开启XSSS&SQL的检测机制，1.请求有XSS&SQL：直接过滤   2.返回数据有XSS：返回空数据
    openCheckXSS:true,

    //弱口令漏洞检测  （未实现）
    openCheckWeakPassword:true,

    //登录页面加密传输  （未实现）
    openPasswordMD5:true,

    //开启后，请求参数带null的话，提交空对象
    openRequestNoNull: true,
}

for (var obj in configList) {
    Vue.prototype[obj] = configList[obj]
}


const myConfig = configList

export default myConfig;