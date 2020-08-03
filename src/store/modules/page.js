/**
 * 管理page的其他状态
 */

const page = {

    state: {
        isShowLoading: false, //是否隐藏loading
        isButtonLoading: false, //按钮是否loading
    },
    mutations: {
    	/**
    	 * [buttonShowLoading 按钮loading显示2秒后关闭]
    	 * @author +c
    	 * @DateTime    2020-03-07T09:19:27+0800
    	 * @description {{description}}
    	 * @param       {[type]}                 state [description]
    	 * @return      {[type]}                       [description]
    	 */
        buttonShowLoading(state) {
        	
            state.isButtonLoading = true;
            setTimeout(function() {
                state.isButtonLoading = false;
            }, 1000)
        },
    	
    },
    actions: {

    }
}



export default page