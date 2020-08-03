<template>
    <div>
	<a-button type="primary" @click="test">/test</a-button></p>
	<a-button type="primary" @click="uUser">/u/test</a-button></p>
	<a-button type="primary" @click="uUserId">/u/user/id</a-button></p>

    </div>
</template>
<script>

export default {
    data() {
        return {
            
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
		uUserId(){
			this.$http({
			        method: "post",
			        url: this.apiHost + "producer/u/user/id",
			        data: this.params,
			    })
			    .then(res => {
			
			        alert(res.data.body);
			
			    })
		},
		uUser(){
			this.$http({
			        method: "post",
			        url: this.apiHost + "producer/u/test",
			        data: this.params,
			    })
			    .then(res => {
			
			        alert(res.data.body);
			
			    })
		},
		test(){
			
			this.$http({
			        method: "post",
			        url: this.apiHost + "producer/test",
			        data: this.params,
			    })
			    .then(res => {
					
					alert(res.data.body);
			
			    })
		}

    }
}
</script>
<style lang="less" scoped>
</style>