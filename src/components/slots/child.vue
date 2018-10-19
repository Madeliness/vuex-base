<template>
    <div class="child">子组件
        <slot name="s1"></slot>
        <hr/>
        <slot name="s2" text="传递的数据"></slot>
        <slot>no things！</slot>
        <div><button @click="min" class="btn btn-warning">递减</button>仓库中store： {{getCount}}</div>
    </div>
</template>
<script>
export default {
  name: 'child',
  computed: {
    getCount () {
      return this.$store.getters.getState
    }
  },
  methods: {
    min () {
      this.$store.dispatch('decrease')
    }
  }
}
</script>
<style scoped>
p {
    font-size: 16px;
}
</style>
