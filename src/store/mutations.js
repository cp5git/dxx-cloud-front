/**
     * mutations用于改变state的值,mutation 都是同步事务
     * 若函数本身无返回，调用后返回undefined
     */
    const mutations = {
        setdapingjson(state, n) {
            state.daping.dapingjson = n
        }
    }
    
    export default mutations