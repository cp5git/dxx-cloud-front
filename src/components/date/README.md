来源：https://github.com/zhangdaiscott/jeecg-boot/blob/master/ant-design-vue-jeecg/src/components/jeecg/JDate.vue

antDate 日期组件 使用文档
说明: antd-vue日期组件需要用moment中转一下，用起来不是很方便，特二次封装，使用时只需要传字符串即可
参数配置
参数	类型	必填	说明
placeholder	string		placeholder
readOnly	boolean		true/false 默认false
value	string		绑定v-model或是v-decorator后不需要设置
showTime	boolean		是否展示时间true/false 默认false
dateFormat	string		日期格式 默认'YYYY-MM-DD' 若showTime设置为true则需要将其设置成对应的时间格式(如:YYYY-MM-DD HH:mm:ss)
triggerChange	string		触发组件值改变的事件是否是change,当使用v-decorator时且没有设置decorator的option.trigger为input需要设置该值为true
使用示例			
1.组件带有v-model的使用方法

<ant-date v-model="dateStr"></ant-date>

2.组件带有v-decorator的使用方法

a).设置trigger-change属性为true

  <ant-date :trigger-change="true" v-decorator="['dateStr',{}]"></ant-date>
b).设置decorator的option.trigger为input

 <ant-date v-decorator="['dateStr',{trigger:'input'}]"></ant-date>
3.其他使用 添加style

<ant-date v-model="dateStr" style="width:100%"></ant-date>
添加placeholder

<ant-date v-model="dateStr" placeholder="请输入dateStr"></ant-date>
添加readOnly

<ant-date v-model="dateStr" :read-only="true"></ant-date>
备注: script内需引入antDate

<script>
  import antDate from '@/components/date/antDate'
  export default {
    name: "demo",
    components: {
      antDate
    }
    //...
  }
</script>