<template>
    <div id="userLayout" :class="['user-layout-wrapper']">
        <div class="container">
            <div class="top">
                <div class="header">
                    <a href="/">
                        <img src="@/static/img/logo.png" class="logo" alt="logo">
                        <span class="title">Ant Design</span>
                    </a>
                </div>
                <div class="desc">
                    Ant Design 是西湖区最具影响力的 Web 设计规范
                </div>
            </div>
            <div id="login-from">
                <a-form :form="form" @submit="fromSubmit">
                    <a-form-item>
                        <a-input placeholder="账号：admin" :style="{ height: '40px' }" v-decorator="['account',fromValidate.account]" />
                    </a-form-item>
                    <a-form-item>
                        <a-input placeholder="密码：password" type="password" :style="{ height: '40px' }" v-decorator="['password',fromValidate.password]" />
                    </a-form-item>
                    <a-form-item prop="verifyCode" class="verifyCodeItemCss">
                        <a-input class="verify_css" placeholder="请输入4位验证码" :style="{ width: '70%',height: '40px',marginRight:'10px' }" v-decorator="['vCode',fromValidate.vCode]"></a-input>
                        <div id="v_container"></div>
                    </a-form-item>
                    <a-form-item>
                        <a-checkbox>
                            保存账号
                        </a-checkbox>
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" html-type="submit" size="large" :style="{ width: '100%' }" :loading="$store.state.page.isButtonLoading">
                            登录
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
            <div class="footer">
                <div class="links">
                    <a href="_self">帮助</a>
                    <a href="_self">隐私</a>
                    <a href="_self">条款</a>
                </div>
                <div class="copyright">
                    Copyright &copy; 2018 XXXXXXXXXXXXXXXXX
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import md5 from 'js-md5';
import { GVerify } from '@/utils/verifyCode';
export default {
    data() {
        return {
            //处理表单使其具有自动收集数据并校验的功能
            form: this.$form.createForm(this),

            //传参
            params: {},
            //表单验证
            fromValidate: {
                account: {
                    rules: [{
                        required: true,
                        message: '请输入账号',
                    }],
                    initialValue: 'amdin', //填写在input
                },
                password: {
                    rules: [{
                        required: true,
                        message: '请输入密码'
                    }],
                    initialValue: 'pass', //填写在input

                },
                vCode: {
                    rules: [{
                        required: true,
                        message: '请输入验证码',
                    }, {
                        validator: this.validateCode
                    }]
                },
            }
        }
    },

    components: {

    },
    created() {
        this.loadDate();
    },
    mounted() {
        this.verifyCode = new GVerify('v_container')
    },
    methods: {

        /**
         * @author +c
         * @loadDate 加载基础数据
         * @DateTime    2020-03-01T21:21:37+0800
         */
        loadDate() {

            //登录成功,保存登录信息到缓存
            this.setUserToCashe({ username: "admin", headUrl: "http://www.a.com/i.png", user_type: "2" });
            this.$message.success('登录成功', 0.5)
                .then(() => this.goToPage('/'));


            //登录页面 判断是否登录过，跳转首页
            // if (this.UserIsLogin()) {
            //     this.$message.success('登录成功', 0.5)
            //         .then(() => this.goToPage('/'));
            // }
        },

        /**
         * @author +c
         * @fromSubmit 表单提交
         * @DateTime    2020-03-01T21:21:37+0800
         */
        fromSubmit(e) {

            e.preventDefault();

            this.form.validateFieldsAndScroll((err, fromDate) => {
                //验证通过
                if (!err) {
                    //加密
                    fromDate.password = md5(fromDate.password);
                    this.params = fromDate;

                    //button显示loading,过2秒后关闭
                    this.$store.commit('buttonShowLoading')

                    new Promise(this.loginRequest)
                        .then(res => {

                            //登录成功,保存登录信息到缓存
                            this.setUserToCashe(res);

                            //跳转首页
                            this.$message.success('登录成功', 0.5)
                                .then(() => this.goToPage('/'));

                        })
                        .catch(err => {

                            this.$notification['error']({
                                message: '登录失败',
                                description: err,
                            });
                        })
                }
            })
        },

        /**
         * @author +c
         * @loginRequest 登录请求Promise
         * @DateTime    2020-03-01T21:23:37+0800
         */
        loginRequest(resolve, reject) {
            this.$http({
                    method: "post",
                    url: this.apiHost + "/merchantapp/user/login",
                    data: this.params,
                })
                .then(res => {

                    if (res.data.code == "200") {
                        //通过
                        resolve(res.data.data)
                    } else {
                        //拒绝
                        reject(res.data.msg)
                    }
                })
        },

        /**
         * @author +c
         * @description 判断验证码是否正确
         * @comparePassword 自定义验证规则  其他规则放在\src\utils\validate\validate.js
         * @DateTime    2020-03-01T11:21:37+0800
         * @param       {[type]}                 value [用户输入的值]
         */
        validateCode(rule, value, callback) {
            if (value == '' || value == undefined || value == null) {
                callback();
            } else {
                if (!this.verifyCode.validate(value)) {
                    callback(new Error('验证码错误'));
                } else {
                    callback();
                }
            }
        },


    }
}
</script>
<style lang="less" scoped>
</style>