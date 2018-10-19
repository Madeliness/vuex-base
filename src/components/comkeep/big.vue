<template>
    <div class="big">
        big
        <!-- {{currentView}} -->
        <!-- <component :is="currentView"></component> -->
        <keep-alive>
            <component :is="currentView"></component>
        </keep-alive>
        <button type="text" @click="changeView" class="btn btn-primary">组件切换</button>
    </div>
</template>
<script>
import Small1 from './small1'
import Small2 from './small2'
export default {
  name: 'big',
  data () {
    return {
      currentView: 'Small1',
      flag: true
    }
  },
  components: {
    Small1,
    Small2
  },
  methods: {
    changeView () {
      if (this.flag) {
        this.flag = false
        this.currentView = 'Small2'
      } else {
        this.flag = true
        this.currentView = 'Small1'
      }
    }
  }
}
</script>
<style>

</style>
