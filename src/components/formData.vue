<template>
    <div>
        <form>
            <input type="text" v-model.number="price"/>
            <label v-mycss>自动获取焦点：</label>
            <input type="text" v-focus/>
            <p>{{price | moneyChange}}</p>
            <p>
              {{text | textChange}}
            </p>
        </form>
        <p>{{msg}}</p>
        <div>
          <h3>axios:post请求接口</h3>

        </div>
    </div>
</template>
<script>
export default {
  name: 'form-data',
  data () {
    return {
      msg: 'ddsffds',
      price: 20,
      text: '金额看肯德基放开了的市民开放'
    }
  },
  // 局部指令
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    },
    mycss: {
      inserted: function (el) {
        el.style.color = 'blue'
      }
    }
  },
  filters: {
    moneyChange (value) {
      if (typeof value === 'number') {
        return '￥' + value
      } else {
        return value
      }
    },
    textChange (value) {
      return `${value} ${new Date()}`
    }
  },
  created () {
    this.$axios.post(`/login.php`, {
      user_id: 'iwen@qq.com',
      password: 'iwen123',
      verification_code: 'crfvw'
    }).then(res => {
      console.log('post', res)
    }).catch(error => {
      console.log(error)
    })
  }
  // watch: {
  //   msg: function (data) {
  //     if (data === 'hello') {
  //       console.log('输入了你好')
  //     }
  //   }
  // }
}
</script>
<style>

</style>
