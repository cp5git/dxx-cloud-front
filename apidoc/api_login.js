
/**
 * @api {get} /merchantapp/user/login  登录接口
 * @apiGroup user
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
 * {
 *    "code": "200",
 *    "msg": "",
 *    "data": {
 *       "username": "+c",
 *       "headUrl": "http://www.a.com/i.png",
 *       "user_type":"2"
 *    }
 * }
 * 
 */