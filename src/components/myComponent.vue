<template>
    <div>
        <img class="img" src="../assets/images/2222.jpg"/>
        <div>父组件props传给儿子数据：</div>
        父组件输入<input type="text" v-model="num"/>
        <Son :title="msg" :lifemsg="lifemsg" :num="getNum" :obj="myobj" @sendmsg="getMsg"/>
        <button @click="changeMsg" type="button" class="btn btn-primary">点击该改变</button>
        <div>接受子组件传递的数据：
            <span>{{info}}</span>
        </div>
    </div>
</template>
<script>
import Son from './son'
export default {
  name: 'mc',
  data () {
    return {
      msg: 0,
      lifemsg: 'fdsgerg',
      num: 10,
      myobj: {
        name: 'amy',
        age: 20
      },
      info: 0
    }
  },
  computed: {
    getNum () {
      return this.num - 0
    }
  },
  components: {
    Son
  },
  methods: {
    changeMsg (event) {
      this.msg += 1
    },
    getMsg (data) {
      this.info = data
    }
  }
}
</script>
<style scoped>
img {
    width:  150px;
}
</style>
