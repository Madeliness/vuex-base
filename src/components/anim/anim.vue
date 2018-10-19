<template>
    <div class="anim">
        <transition name="fade">
            <h2 v-show="show">{{title}}</h2>
        </transition>
        <button class="btn btn-success" @click="showHide">切换</button>
        <!-- <p></p> -->
    </div>
</template>
<script>
export default {
  name: 'anim',
  data () {
    return {
      title: '动画',
      show: true
    }
  },
  methods: {
    showHide () {
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* opacity: 0; */
  transform: translate(100px, 0)
}
.fade-enter-to, .fade-leave {
    transform: translate(0px, 0)
}
</style>
