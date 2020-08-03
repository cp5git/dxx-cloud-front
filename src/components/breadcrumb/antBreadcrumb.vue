<template>
  <a-breadcrumb class="sbreadcrumb">
    <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.name">
      <router-link
        v-if="item.name != name && index != 1"
        :to="{ path: item.path === '' ? '/' : item.path }">
        
        <span v-if="item.path!='/'">{{ item.meta.title }}</span>
        
        <a-icon type="home" v-if="item.path=='/'" />


      </router-link>
      <span v-else>{{ item.meta.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      breadList: []
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      this.breadList = []
      this.breadList.push({name: 'index', path: '/', meta: {title: '首页'}})
      this.name = this.$route.name
      this.$route.matched.forEach(item => {
        //item.name !== 'home' && this.breadList.push(item)
        if(item.name !== 'home')this.breadList.push(item)
      })
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>

<style scoped>
.sbreadcrumb{margin: 16px 0}
</style>
