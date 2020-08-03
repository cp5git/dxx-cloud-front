/**
 * @description page 用于所有关于页面 公共函数存放
 * @author +c
 * @DateTime    2020-03-01T17:31:12+0800
 */

import Vue from 'vue'


/**
 * @description 跳转的通用方法
 * @param path:路径  params：传参
 */
Vue.prototype.goToPage = function(path, params) {
    this.$router.push({
        path: path,
        params: params
    });
}

/**
 * @description 所有表格的数据必须带key
 * @param arr:传入数组
 */
Vue.prototype.tableAddKey = function(arr) {

    arr.forEach((item, index) => {
        item.key = index + 1;
    })

    return arr;
}

/**
 * @description 公用分页配置
 */
Vue.prototype.pagination = {
    defaultCurrent: 1,
    defaultPageSize: 10, // 默认每页显示数量
    showTotal: total => `共 ${total} 条数据`, // 显示总数
    showSizeChanger: true, // 显示可改变每页数量
    pageSizeOptions: ['10', '20', '30', '40'], // 每页数量选项
}

/**
 * @description 所有表格分页的总量需要重置
 * @param num:总量
 */
Vue.prototype.setPaginationTotal = function(num) {

    const pagination = { ...this.pagination };
    pagination.total = num; //数据总量
    this.pagination = pagination;
}

/**
 * [randomNum 生成从minNum到maxNum的随机数]
 * @author +c
 * @DateTime    2020-05-26T17:30:49+0800
 * @description {{description}}
 * @param       {[type]}                 minNum [description]
 * @param       {[type]}                 maxNum [description]
 * @return      {[type]}                        [description]
 */
Vue.prototype.randomNum = function(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
            break;
        default:
            return 0;
            break;
    }
}