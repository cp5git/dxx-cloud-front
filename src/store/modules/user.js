/**
 * 管理会员登录状态
 */
// import request from '../../utils/request.js'

const user = {

    state: {
        count:1, //验证会员真实字段
    },
    mutations: {
      increment (state) {
            state.count++
        },  
    },
    actions: {

    }
}



export default user
