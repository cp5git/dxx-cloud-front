import Vue from 'vue'
import Router from 'vue-router'
import basicLayout from './layouts/basicLayout'
import config from './config/config.js'
Vue.use(Router)
import axios from './utils/request'

Router.prototype.sysTitle = "XXX管理系统"; //系统名称

//如首页和登录页和一些不用权限的公用页面    meta参数：role权限 -member 需要登陆
const router = new Router({
    routes: [ 
       {
            path: '/home',
            component: basicLayout,
            meta: { title: "首页", role: [] },
            children: [{
                path: '/home/home',
                component: () => import('./views/home/home'),
                meta: { title: "首页", role: [] }
            }]
        }, {
            path: '',
            component: basicLayout,
            meta: { title: "demo" },
            children: [
                {
                    path: '/demo/test',
                    component: () => import('./views/demo/test'),
                    meta: { title: "测试", role: [] }
                }
				,{
				    path: '/demo/login',
				    component: () => import('./views/demo/login'),
				    meta: { title: "登录页", role: [] }
				
				}
            ]
        }
    ]
})


/**
 * [getRouteJson 获取资源并转换路由格式,添加到路由]
 * @author +c
 * @DateTime    2020-06-02T14:38:13+0800
 * @description {{description}}
 * @return      {[type]}                 [description]
 */
async function getRouteJson() {

    var routeArr = [];
    await axios({
            method: "post",
            url: config.apiHost + "/setting/routes",
            data: {},
        })
        .then(res => {

            if (res.data.code == "200") {

                //保存到localStorage
                localStorage.setItem("userRoute", JSON.stringify(res.data.data));

                res.data.data.forEach((item1, index1) => {

                    var obj = {
                        meta: { title: item1.name, role: [] },
                        children: []
                    }

                    if (item1.children != null) {

                        obj.path = '';
                        obj.component = basicLayout;

                        item1.children.forEach((item2, index2) => {
                            var obj2 = {
                                path: item2.path,
                                component: () => import('./views' + item2.path),
                                meta: { title: item2.name, role: [] },
                                children: []
                            }

                            obj.children.push(obj2)
                        })

                    } else {

                        obj.path = item1.path;
                        obj.component = () => import('./views' + item1.path);
                    }

                    console.log(obj)

                    router.addRoutes([obj])
                })


            }
        })
    return true;
}

// getRouteJson().then(res => {})


export default router