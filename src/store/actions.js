/**
* Action 提交的是 mutation，而不是直接变更状态  actions 异步地
  调用后返回promise对象
*/
const actions = {
    setdapingjson(context, n) {
        return context.commit('setdapingjson', n)
    }
}

export default actions

