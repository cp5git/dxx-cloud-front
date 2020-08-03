/**
 * @api {get} /merchantapp/demo/list  demolist接口
 * @apiGroup demo
 * @apiVersion 1.0.0
 *
 * @apiParam {String} openid  微信id
 * @apiParam {String} username 微信名
 * @apiParam {String} headurl 头像路径
 * 
 * @apiSuccess {String} username 用户名
 * @apiSuccess {String} headUrl 头像地址
 * @apiSuccess {String} user_type 用户类型：0-未绑定用户，1-游客，2-商户
 *     
 * @apiSuccessExample {json} 请求成功数据
 *
 {
    "code": "200",
    "msg": "",
    "data": {
        "page": 1,
        "totalPage": 1617,
        "pageSize": 10,
        "records": 16163,
        "total": 16163,
        "rows": [
            {
                "id": "13",
                "no": "Edrward 0",
                "content": "描述. 0",
                "address": "London Park no. 0",
                "status": "状态. 0",
                "update": "时间. 0"
            }
        ]
    }
}
 * 
 */

/**
 * @api {get} /merchantapp/demo/detail1  demodetail接口1
 * @apiGroup demo
 * @apiVersion 1.0.0
 * @apiSuccessExample {json} 请求成功数据
 {
    "code": "200",
    "msg": "",
    "data":{}
}
 *  
 */

/**
 * @api {get} /merchantapp/demo/detail2  demodetail接口2
 * @apiGroup demo
 * @apiVersion 1.0.0
 * @apiSuccessExample {json} 请求成功数据
 {
    "code": "200",
    "msg": "",
    "data":{
        "name":"付晓晓",
        "cardNo":"32943898021309809423"
    }
}
 *  
 */