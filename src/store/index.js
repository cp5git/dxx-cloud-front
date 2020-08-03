/**
 * vuex并不能解决跨页面数据共享的问题，他解决的主要问题是不同组件间的通信，比如兄弟组件间通信
 */
import Vue from 'vue'
import Vuex from 'vuex'
import page from './modules/page'
import daping from './modules/daping'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        page,
        daping
    },
    getters,
    actions,
    mutations
})

export default store
