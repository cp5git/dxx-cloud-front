/**
 * @api {get} /all 接口规范
 * @apiGroup ApiRule
 * @apiVersion 1.0.0
 * @apiDeprecated [注意:] 
 * @apiDescription 1.所有的接口需使用Https协议、Json数据格式、UTF8编码<br/>2.所有接口返回的<span style="color:orange">图片都必须是绝对路径</span><br/>3.所有返回数据最外层必须有code，msg，data<br/>4.所有成功数据都必须是正确的json格式，验证工具：<a href="http://www.bejson.com/jsoneditoronline/" target="_blank">连接</a>
 * 
 * @apiSuccess {String} code 错误码  200:没错误， 403没权限  ， 404没找到
 * @apiSuccess {String} msg  错误信息
 * @apiSuccess {Object/Array} data  返回数据：返回数据是数组则返回[] ,对象则{}
 *
 * @apiSuccessExample {json} 请求成功数据
 *     {
 *          "code": "200",
 *          "msg": "",
 *          "data":{}
 *      }
 * @apiErrorExample {json} 请求失败数据
 *     {
 *          "code":10001,
 *          "msg":"用户权限不足",
 *          "data":{}
 *      }
 */


