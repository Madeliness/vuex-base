<template>
    <div class="event">
        <ul>
            <li v-on:click.once="getItemInfo(name, i, $event)" v-for="(name, i) in names" :key="i">
                <button>{{name}}</button>
            </li>
        </ul>
        <button @click="handleData">改变数组</button>
        <button @click="getOdd">获取奇数</button>
        <input type="text" v-on:keyup.enter="getkeyInfo"/>
        <p>
            {{msgRe}}
        </p>
    </div>
</template>
<script>
// export 导出可被外部访问
export default {
  data () {
    return {
      names: ['Amy', 'Tom'],
      nums: [1, 2, 3, 4, 5, 6, 7],
      message: 'hello'
    }
  },
  computed: {
    msgRe () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    getItemInfo (data, index, event) {
      console.log(index, this.names[index])
      console.log(data)
      console.log(3, event)
    //   this.names.push('susan')
    },
    getkeyInfo (event) {
      console.log('keyup', event)
    },
    handleData () {
    //   this.names.push('susan')
    //   this.names.reverse()
    //   this.names.pop('Tom')
      this.names.concat(['dss'])
    },
    getOdd () {
      this.nums.filter((num) => {
        if (num % 2 !== 0) {
          console.log(num)
          return num
        }
      })
    }
  }
}
</script>
<style>
</style>
