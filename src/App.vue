<template>
    <div id="app">
        <!-- 全局设置 locale中文 -->
        <a-config-provider :locale="locale">
            <router-view></router-view>
        </a-config-provider>
    </div>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale/zh_CN';
export default {
    data() {
        return {
            locale: zhCN,
        };
    }
};
</script>
<style>
html,body,#root,#app{
        width: 100%;
        height: 100%;
    }
    .ant-layout.ant-layout-has-sider{height:100%;}
/*    .ant-layout{
        height: auto;
    }
    .ant-layout-has-sider{
        height: 100%;
    }*/
    
</style>