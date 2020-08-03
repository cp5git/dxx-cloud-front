import axios from "axios";
import store from '@/store'
import myConfig from '../config/config.js'
import { notification } from 'ant-design-vue'
// import router from 'vue-router'
import router from '../routes'

// 创建一个实例
const server = axios.create({
    // 将我们访问的地址设为baseURL
    baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
    // 设置超时时间
    timeout: 10000,
    headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Credentials": true
    }
});

// 请求拦截器
server.interceptors.request.use(
    config => {
        // 每个请求都带token与服务器进行身份匹配
		if(typeof(localStorage.getItem("dxx_token"))!= undefined && localStorage.getItem("dxx_token")!=null){
			config.headers['dxx_token'] = localStorage.getItem("dxx_token");
		}

        //请求设置为formdata传参
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

        config.transformRequest = [function(data) {

            // 在请求之前对data传参进行格式转换
            data = JSON.stringify(data)

            //弹出请求data
            if (myConfig.openDebug) {
                data = data ? data : {};
                notification['info']({
                    message: config.url,
                    description: data,
                });
            }

            //是否开启XSSS&SQL的检测机制，1.请求有XSS&SQL：直接过滤 
            if (myConfig.openCheckXSS && data) {
                if (checkXssAndSql(data)) {
                    return null;
                }
            }

            //修改fromdata 不以对象传参
            
            if (JSON.stringify(data) != "{}" && data != null) {

                var dataJosn = JSON.parse(data + "");
                var str = "";
                for (var key in dataJosn) {
                    str += key + '=' + dataJosn[key] + "&"
                }
                return str.slice(0, str.length - 1);
            }

            return data;

        }]

        return config
    },
    error => {
        return Promise.reject(error);
    }
);
// 响应拦截器
server.interceptors.response.use(
    response => {

        if (response.data.code == 10200) {
			//写入token
			localStorage.setItem("dxx_token",response.headers["dxx_token"]);
        }else{
			notification['error']({
			    message: '提示',
			    description: response.data.msg,
			});
		}
		
		//未登录，跳转到登录页面
		if(response.data.code == 10401){
			router.push("/demo/login");
			
		}
		

        //关闭loading
        store.state.page.isShowLoading = false;

        //检测数据是否规范，不规范返回空数据
        if (myConfig.openJsonCheck) {
            if (!jsonIsRule(response.data)) {
                return { 'data': [] };
            }
        }

        //是否开启XSSS&SQL的检测机制
        if (myConfig.openCheckXSS && response.data) {
            if (checkXssAndSql(JSON.stringify(response.data))) {
                return  { 'data': [] };
            }
        }

        return response;
    },
    error => {

        //关闭loading
        store.state.page.isShowLoading = false;

        if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串

            notification['error']({
                message: '网络超时',
                description: '请保持网络通畅',
            });

            return Promise.reject(error); // reject这个错误信息
        }

        if (error.message.includes('404')) { // 判断请求异常信息中是否含有超时timeout字符串

            notification['error']({
                message: '请求地址不存在',
                description: '请查看服务器配置',
            });

            return Promise.reject(error); // reject这个错误信息
        }

        notification['error']({
            message: '网络出错',
            description: '请保持网络通畅',
        });

        //可以进行404或者500跳转

        return Promise.reject(error);
    }
);

/**
 * [jsonIsRule 检测json是否符合要求]
 * @author +c
 * @DateTime    2020-03-03T10:41:16+0800
 * @description {{description}}
 * @param       {[type]}                 jsonObj [数据返回的对象]
 * @return      {[type]}                         [description]
 */
function jsonIsRule(jsonObj) {

    var isOK = true;
    var errorArr = [];
    try {
        //检测是否有code
        if (!jsonObj.code) {
            isOK = false;
            errorArr.push('返回数据必须带返回码,请参考：')
            errorArr.push('返回数组：{"code": "200","message": "","data": []}')
            errorArr.push('返回对象：{"code": "200","message": "","data": {}}')
        }
        //检测data里面的数据是否规范
        if (jsonObj.body) {
            var jsonStr = JSON.stringify(jsonObj.body);
        }

        if (!isOK) {

            notification['error']({
                message: '返回的json格式不规范',
                description: '请查看报错',
            });

            console.error('返回的json不规范')
            errorArr.forEach((val) => {
                console.error(val)
            })
        }
    } catch (e) {

        notification['error']({
            message: '返回的json格式不规范',
            description: '请查看报错',
        });
        // 
        console.error('返回的json格式不规范')
        console.error('常见错误：key缺少双引号，例如：{key:"val"}')
        console.error('常见错误：json结尾多了逗号，例如：{"key":"val",}')
        console.error('常见错误：逗号使用中文逗号，例如：{"key":"val"，"key":"val"}')
        console.error('常见错误：缺少结束逗号，例如：{"key:"val}')
        console.error('请自行查找' + e)

    }


    return isOK;
}


/**
 * [checkText 检查请求是否含有xss,sql攻击]
 * @author +c
 * @DateTime    2020-06-05T14:41:05+0800
 * @description {{description}}
 * @param       {[type]}                 id   [description]
 * @param       {[type]}                 text [description]
 * @return      {[type]}                      [description]
 */
function checkXssAndSql(dataJosn) { //xss攻击特殊字符过滤

    var jsonObj = JSON.parse(dataJosn)
    dataJosn = "";
    for (var Key in jsonObj) {
        dataJosn += jsonObj[Key]
    }
    var arr = ["alert", "eval", "<script>", "</script>", "onblur", "onload", "onfocus", "onerror", "onclick", "onMouseOver",
        "onMouseOut", "onSelect", "onChange", "onSubmit", "console", "href",
        "<iframe>", "</iframe>", "<video>", "</video>",
        "<canvas>", "</canvas>", "<label>", "</label>", "<span>", "</span>", "document", "location",
        "javascript", "select", "update", "delete", "truncate", "join", "union", "exec", "insert", "drop", "count"
    ];
    var isHasXss = false;
    arr.forEach((val, i) => {
        if (dataJosn.indexOf(val) != -1) {
            console.error("请求参数包含XSS或SQL,内容包括：" + val + "，请检查");
            isHasXss = true;
        }
    })

    if (isHasXss) {
        notification['error']({
            message: '请求不规范',
            description: '请求参数包含XSS或SQL，请检查',
        });
    }
    return isHasXss;
}


export default server;