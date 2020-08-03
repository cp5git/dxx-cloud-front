<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
            <!-- 左导航 -->
            <div class="logo" />
            <a-menu :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']" mode="inline" theme="dark" :inlineCollapsed="collapsed">

                <a-sub-menu key="sub1">
                    <span slot="title">
                        <a-icon type="mail" />
                        <span>Demo</span>
                    </span>
                    <a-menu-item key="5143">
                        <router-link to='/demo/test'>测试</router-link>
                    </a-menu-item>
					<a-menu-item key="5544">
					    <router-link to='/demo/login'>登录页</router-link>
					</a-menu-item>

                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <!-- 顶部 -->
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed" />
                <div class="header-r">
                    
                </div>
            </a-layout-header>
            <a-layout style="padding: 0 24px">
                <!-- 面包屑 -->
                <ant-breadcrumb />
                <!-- 内容区 -->
                <a-layout-content :style="{margin: 0}">
                    <router-view></router-view>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
import antBreadcrumb from '../components/breadcrumb/antBreadcrumb'
export default {
    data() {
        return {
            //左导航缩小
            collapsed: false,
        };
    },
    components: {
        antBreadcrumb
    },

    beforeCreate() {

    },
    //页面的构造方法
    create: {

    },
    //页面的自定义方法
    methods: {
        loadDate() {

        },

    }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

.header-r {
    width: 300px;
    float: right;
    text-align: right;
    margin-right: 20px;
}

.header-u {
    cursor: pointer;
    padding: 0 5px;
    display: inline-block;
    height: 100%;
    margin-left: 20px;
    line-height: 64px;
}

.header-u div {
    display: inline-block;
    padding: 0 10px;
    font-size: 26px;
    color: #8e8e8e;
}

.header-u b {
    margin-left: 5px;
}

.ant-layout-sider{height: 100%;overflow-y:auto }
</style>