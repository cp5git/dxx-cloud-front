<template>
    <div>
        <input type="text" v-model="account">
		<input type="text" v-model="password">
		<a-button type="primary" @click="login">Primary</a-button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            account:"dxx",
			password:"1234"
        }
    },
    components: {
       
    },
    //页面的构造方法
    created() {

        this.loadDate();
        
    },
    //页面的自定义方法
    methods: {
        loadDate() {

        },
        login(){
            this.$http({
                    method: "post",
                    url: this.apiHost + "auth-server/login/"+this.account+"/"+this.password,
                    data: this.params,
                })
                .then(res => {
            
                    alert(res.data.msg);
            
                })
        }

    }
}
</script>
<style lang="less" scoped>
</style>