mock数据  使用指南
命令：node server.js 
启动服务后可以输出mock数据参考：
http://127.0.0.1:1337/api?path=/merchantapp/web/login
重复多条数据可以添加参数&rep=40
http://127.0.0.1:1337/api?path=/merchantapp/demo/list&rep=40


apiDoc 使用指南

1.安装
安装node.js
安装apiDoc:   npm install apidoc -g

2.写配置文件 apidoc.json
{
    "name": "德信行接口文档",
    "version": "1.0.0",
    "description": "海南信易游",
    "title": "API文档",
    "url": "http://127.0.0.1:1337/api?path=",
    "sampleUrl": "http://192.168.197.135/"
}

3.编译
命令：apidoc
编译后在 ./doc 里面


4.apidoc 文档参数详细说明

/ *
* @apiDeprecated [标红的提示消息] //标红的提示消息，警示作用
* @api {POST} /test/:id 测试二 //指定接收方式以及显示名称
* @apiGroup //分组
* @apiVersion //版本
* @apiDescription //描述
* @apiParam  {String} name 名字 // 参数类型 以及参数名称 没有中括号代表必选参数
* @apiParam  {String} [phone] 手机 // 参数类型 以及参数名称 [phone] 代表可选参数
* @apiSuccess (Success) {String} msg 信息 //返回成功数据名称以及类型
* @apiError (Error) {String} msg 信息 //返回失败数据名称以及类型
* @apiParamExample 请求样例  //示例
* /index.php?i=8888        //例子
* @apiSuccessExample {json} 返回样例  // 返回成功数据以及指定返回数据格式
*                {"code":"0","msg":"修改成功"} //指定json格式后可以不用格式化，apidoc 输出的时候会做做处理
* @apiErrorExample {json} 失败返回样例 // 返回失败数据以及指定返回数据格式
*                {"code":"0","msg":"修改成功"}
*/

5.例子

/**
 * @api {get} /login  登录接口
 * @apiGroup my
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name  账号
 * @apiParam {String} password 密码
 * 
 * @apiSuccess {String} token 用户token
 * @apiSuccess {String} userName 用户名称
 * @apiSuccess {String} userAvatar 头像地址
 * @apiSuccess {String} userType 用户类型：0-未绑定用户，1-游客，2-商户
 * 
 * @apiSuccessExample {json} 请求成功数据
 * {
 *    "errcode": "1",
 *    "errmsg": "操作成功",
 *    "data": {
 *       "token": "2dc63hhjn34gd7c78",
 *       "userName": "+c",
 *       "userAvatar": "http://www.a.com/i.png",
 *       "userType":"2"
 *    }
 * }
 * 
 */