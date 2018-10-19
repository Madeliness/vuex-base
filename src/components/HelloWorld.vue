<template>
  <div class="hello">
    {{ hello }}
    <h2>{{1 + 1}}</h2>
    <h1>{{'xsdsffr'}}</h1>
    <!-- <a>{{0<10 ? '对的' : '错的'}}</a> -->
    {{'注意：只能存在单行语句'}}
    <!-- {{if(o<10) {return '对的'}}} -->
    <!-- {{let a = 10}} -->
    <p>{{flag}}</p>
    <p v-html="hello"></p>
    <p v-text="hello"></p>
    <span v-bind:class="ha">hha</span>
    <span v-bind:title="ts" style="display:inline-block;border: 1px solid red;width:10px;height:10px;"></span>
    <div>
      <p v-if="show">显示{{show}}</p>
      <p v-else>false时看到{{show}}</p>
      <p v-show="show">显示{{show}}</p>
    </div>
    <ul class="list">
      <li v-for="(name, i) in names" :key="i">
        {{name}} - {{i}}
      </li>
    </ul>
    <ul class="list">
      <li v-for="(item, i) in user" :key="i">
        {{item.id}},{{item.name}},{{item.age}}
      </li>
    </ul>
    <div>
      <button v-on:click="num += 1">点击加1</button>
      <p>结果：{{num}}</p>
    </div>
    <button v-on:click="handleClick">按钮</button>
    <div>
      <h3>axios:get请求接口：</h3>
      <ul>
        <li v-for="(news, i) in newData" :key="i">
          <img :src="news.img"/>
          <p>{{news.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // data 的属性直接挂在在组件上
  data () {
    return {
      hello: '<span>hello,vue</span>',
      flag: 'flag 1',
      ha: 'ha',
      ts: '提示',
      show: false,
      names: [
        'amy', 'mary', 'Lily'
      ],
      user: [
        {id: 1, name: 'iwen', age: 24},
        {id: 2, name: 'mary', age: 23},
        {id: 3, name: 'susan', age: 25}
      ],
      num: 1,
      newData: []
    }
  },
  created () {
    this.$axios('/sxtstu/blueberrypai/getindexBanner.php', {
      params: {
        type: 'junshi',
        count: 30
      }
    }).then(res => {
      console.log(res.data)
      this.newData = res.data.banner
    }).catch(err => {
      console.dir(err)
    })
  },
  methods: {
    handleClick () {
      // this指向当前组件
      // this来索引当前data中的数据
      console.log(this)
      this.show = !this.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ha {
  color: red;
}
</style>
