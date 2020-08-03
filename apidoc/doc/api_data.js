define({ "api": [
  {
    "type": "get",
    "url": "/all",
    "title": "接口规范",
    "group": "ApiRule",
    "version": "1.0.0",
    "deprecated": {
      "content": "[注意:]"
    },
    "description": "<p>1.所有的接口需使用Https协议、Json数据格式、UTF8编码<br/>2.所有接口返回的<span style=\"color:orange\">图片都必须是绝对路径</span><br/>3.所有返回数据最外层必须有code，msg，data<br/>4.所有成功数据都必须是正确的json格式，验证工具：<a href=\"http://www.bejson.com/jsoneditoronline/\" target=\"_blank\">连接</a></p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>错误码  200:没错误， 403没权限  ， 404没找到</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object/Array",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据：返回数据是数组则返回[] ,对象则{}</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求成功数据",
          "content": "{\n     \"code\": \"200\",\n     \"msg\": \"\",\n     \"data\":{}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "请求失败数据",
          "content": "{\n     \"code\":10001,\n     \"msg\":\"用户权限不足\",\n     \"data\":{}\n }",
          "type": "json"
        }
      ]
    },
    "filename": "./api_rule.js",
    "groupTitle": "ApiRule",
    "name": "GetAll",
    "sampleRequest": [
      {
        "url": "http://14.18.234.39:8099/all"
      }
    ]
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "F:\\C3项目\\svn\\03 代码\\branches\\v2.0\\c3credit\\c3credit-front\\apidoc\\doc\\main.js",
    "groupTitle": "F:\\C3项目\\svn\\03 代码\\branches\\v2.0\\c3credit\\c3credit-front\\apidoc\\doc\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/merchantapp/demo/detail1",
    "title": "demodetail接口1",
    "group": "demo",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "请求成功数据",
          "content": " {\n    \"code\": \"200\",\n    \"msg\": \"\",\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_demo.js",
    "groupTitle": "demo",
    "name": "GetMerchantappDemoDetail1",
    "sampleRequest": [
      {
        "url": "http://14.18.234.39:8099/merchantapp/demo/detail1"
      }
    ]
  },
  {
    "type": "get",
    "url": "/merchantapp/demo/detail2",
    "title": "demodetail接口2",
    "group": "demo",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "请求成功数据",
          "content": " {\n    \"code\": \"200\",\n    \"msg\": \"\",\n    \"data\":{\n        \"name\":\"付晓晓\",\n        \"cardNo\":\"32943898021309809423\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_demo.js",
    "groupTitle": "demo",
    "name": "GetMerchantappDemoDetail2",
    "sampleRequest": [
      {
        "url": "http://14.18.234.39:8099/merchantapp/demo/detail2"
      }
    ]
  },
  {
    "type": "get",
    "url": "/merchantapp/demo/list",
    "title": "demolist接口",
    "group": "demo",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openid",
            "description": "<p>微信id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>微信名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headurl",
            "description": "<p>头像路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headUrl",
            "description": "<p>头像地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>用户类型：0-未绑定用户，1-游客，2-商户</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求成功数据",
          "content": "\n {\n    \"code\": \"200\",\n    \"msg\": \"\",\n    \"data\": {\n        \"page\": 1,\n        \"totalPage\": 1617,\n        \"pageSize\": 10,\n        \"records\": 16163,\n        \"total\": 16163,\n        \"rows\": [\n            {\n                \"id\": \"13\",\n                \"no\": \"Edrward 0\",\n                \"content\": \"描述. 0\",\n                \"address\": \"London Park no. 0\",\n                \"status\": \"状态. 0\",\n                \"update\": \"时间. 0\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_demo.js",
    "groupTitle": "demo",
    "name": "GetMerchantappDemoList",
    "sampleRequest": [
      {
        "url": "http://14.18.234.39:8099/merchantapp/demo/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setting/organizeList",
    "title": "demolist接口",
    "group": "setting",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openid",
            "description": "<p>微信id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>微信名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headurl",
            "description": "<p>头像路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headUrl",
            "description": "<p>头像地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>用户类型：0-未绑定用户，1-游客，2-商户</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求成功数据",
          "content": "\n {\n    \"code\": \"200\",\n    \"msg\": \"\",\n    \"data\": {\n        \"page\": 1,\n        \"totalPage\": 1617,\n        \"pageSize\": 10,\n        \"records\": 16163,\n        \"total\": 16163,\n        \"rows\": [\n            {\n                \"id\": \"13\",\n                \"account\": \"Edrward\",\n                \"userName\": \"描述哥\",\n                \"accountState\": \"正常\",\n                \"cont\": \"用户描述\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_setting.js",
    "groupTitle": "setting",
    "name": "GetSettingOrganizelist",
    "sampleRequest": [
      {
        "url": "http://14.18.234.39:8099/setting/organizeList"
      }
    ]
  },
  {
    "type": "get",
    "url": "/setting/routes",
    "title": "路由接口",
    "group": "setting",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "请求成功数据",
          "content": "\n{\n    \"code\": \"200\",\n    \"msg\": \"\",\n    \"data\": [{\n            \"id\": \"10\",\n            \"parentId\": \"2c90805a667c16e401667c1afb3e0006\",\n            \"name\": \"系统管理\",\n            \"code\": \"SYS_MANAGER\",\n            \"path\": \"\",\n            \"remark\": \"系统管理\",\n            \"resourceType\": \"dir\",\n            \"resourceOrder\": 99,\n            \"iconCls\": \"icon-ticket\",\n            \"children\": [{\n                \"id\": \"13\",\n                \"parentId\": \"10\",\n                \"name\": \"资源管理\",\n                \"code\": \"SYS_MANAGER\",\n                \"path\": \"/setting/system/resource\",\n                \"remark\": \"资源管理\",\n                \"resourceType\": \"menu\",\n                \"resourceOrder\": 1,\n                \"iconCls\": null,\n                \"children\": null\n            },\n            {\n                \"id\": \"12\",\n                \"parentId\": \"10\",\n                \"name\": \"角色管理\",\n                \"code\": \"SYS_MANAGER\",\n                \"path\": \"/setting/system/role\",\n                \"remark\": \"角色管理\",\n                \"resourceType\": \"menu\",\n                \"resourceOrder\": 2,\n                \"iconCls\": null,\n                \"children\": null\n            },\n            {\n                \"id\": \"14\",\n                \"parentId\": \"10\",\n                \"name\": \"用户管理\",\n                \"code\": \"SYS_MANAGER\",\n                \"path\": \"/setting/system/user\",\n                \"remark\": \"用户管理\",\n                \"resourceType\": \"menu\",\n                \"resourceOrder\": 3,\n                \"iconCls\": null,\n                \"children\": null\n            },\n            {\n                \"id\": \"49\",\n                \"parentId\": \"10\",\n                \"name\": \"日志管理\",\n                \"code\": \"rjgl\",\n                \"path\": \"/setting/system/systemlog\",\n                \"remark\": \"日志管理\",\n                \"resourceType\": \"menu\",\n                \"resourceOrder\": 4,\n                \"iconCls\": \"icon-ticket\",\n                \"children\": null\n            }]\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_setting.js",
    "groupTitle": "setting",
    "name": "GetSettingRoutes",
    "sampleRequest": [
      {
        "url": "http://14.18.234.39:8099/setting/routes"
      }
    ]
  },
  {
    "type": "get",
    "url": "/merchantapp/user/login",
    "title": "登录接口",
    "group": "user",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "openid",
            "description": "<p>微信id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>微信名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headurl",
            "description": "<p>头像路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "headUrl",
            "description": "<p>头像地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_type",
            "description": "<p>用户类型：0-未绑定用户，1-游客，2-商户</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求成功数据",
          "content": "{\n   \"code\": \"200\",\n   \"msg\": \"\",\n   \"data\": {\n      \"username\": \"+c\",\n      \"headUrl\": \"http://www.a.com/i.png\",\n      \"user_type\":\"2\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api_login.js",
    "groupTitle": "user",
    "name": "GetMerchantappUserLogin",
    "sampleRequest": [
      {
        "url": "http://14.18.234.39:8099/merchantapp/user/login"
      }
    ]
  }
] });
