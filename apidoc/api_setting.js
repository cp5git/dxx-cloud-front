/**
 * @api {get} /setting/organizeList  demolist接口
 * @apiGroup setting
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
                "account": "Edrward",
                "userName": "描述哥",
                "accountState": "正常",
                "cont": "用户描述"
            }
        ]
    }
}
 * 
 */


/**
 * @api {get} /setting/routes  路由接口
 * @apiGroup setting
 * @apiVersion 1.0.0
 *
 *     
 * @apiSuccessExample {json} 请求成功数据
 *
{
    "code": "200",
    "msg": "",
    "data": [{
            "id": "10",
            "parentId": "2c90805a667c16e401667c1afb3e0006",
            "name": "系统管理",
            "code": "SYS_MANAGER",
            "path": "",
            "remark": "系统管理",
            "resourceType": "dir",
            "resourceOrder": 99,
            "iconCls": "icon-ticket",
            "children": [{
                "id": "13",
                "parentId": "10",
                "name": "资源管理",
                "code": "SYS_MANAGER",
                "path": "/setting/system/resource",
                "remark": "资源管理",
                "resourceType": "menu",
                "resourceOrder": 1,
                "iconCls": null,
                "children": null
            },
            {
                "id": "12",
                "parentId": "10",
                "name": "角色管理",
                "code": "SYS_MANAGER",
                "path": "/setting/system/role",
                "remark": "角色管理",
                "resourceType": "menu",
                "resourceOrder": 2,
                "iconCls": null,
                "children": null
            },
            {
                "id": "14",
                "parentId": "10",
                "name": "用户管理",
                "code": "SYS_MANAGER",
                "path": "/setting/system/user",
                "remark": "用户管理",
                "resourceType": "menu",
                "resourceOrder": 3,
                "iconCls": null,
                "children": null
            },
            {
                "id": "49",
                "parentId": "10",
                "name": "日志管理",
                "code": "rjgl",
                "path": "/setting/system/systemlog",
                "remark": "日志管理",
                "resourceType": "menu",
                "resourceOrder": 4,
                "iconCls": "icon-ticket",
                "children": null
            }]
    }]
}
 * 
 */