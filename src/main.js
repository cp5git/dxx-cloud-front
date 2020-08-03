import Vue from 'vue'
import App from './App.vue'
import './config/config.js'
import './utils/common'
import Vuex from 'vuex'
import store from './store'
import router from './routes'
import vFilter from './filter/filter.js'

import axios from './utils/request'
Vue.prototype.$http = axios

import 'ant-design-vue/dist/antd.css';
import './static/css/global.less'

import Antd from 'ant-design-vue';
Vue.use(Antd);
Vue.use(Vuex);

import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)


import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodemirror)

// 给 vue 实例挂载全局窗口对象
Vue.prototype.$XModal = VXETable.modal
Vue.prototype.XEUtils = XEUtils

import Moment from 'moment';
Vue.prototype.moment = Moment

Vue.config.productionTip = false




//注册过滤器
for (let key in vFilter){
  Vue.filter(key,vFilter[key])
}

//路由跳转前执行
router.beforeEach(({ meta, path }, from, next) => {
  
    window.document.title = meta.title == undefined ? router.sysTitle : meta.title + '-' + router.sysTitle

    if (localStorage.getItem('userInfo') == null && path != "/user/login"  && !path.includes('/bigScreen/preview')) {

    	next('/user/login');
    }

    next();
})


new Vue({
    render: h => h(App),
    router,
    store,
    data:{
      Bus:new Vue()
    }
}).$mount('#app')