<template>
    <div>
        儿子：
        <div>
            第一个：{{lifemsg}}
        </div>
        <div>第二个：{{title}}</div>
        <div>
            第三个：{{num * 2}}
        </div>
        <div>
            第四个：{{obj}}
        </div>
        <div>
            <button type="button" class="btn btn-primary" @click="sendMsg">传递数据</button>
        </div>
    </div>
</template>
<script>
export default {
  name: 'son',
  data () {
    return {
      msg: 'ewfoeifejkeffs'
    }
  },
  //   props: ['title', 'lifemsg']
  props: {
    title: Number,
    lifemsg: {
      type: String,
      required: true
    },
    num: {
      type: Number,
      default: 1
    },
    obj: {
      type: Object,
      default: () => {
        return {
          name: 'lily',
          age: 21
        }
      }
    }
  },
  computed: {
    addNum () {
      return this.num * 5
    }
  },
  methods: {
    sendMsg (event) {
      // 两个参数：1：key, 2:数据
      this.$emit('sendmsg', this.addNum)
    }
  }
}
</script>
<style>

</style>
