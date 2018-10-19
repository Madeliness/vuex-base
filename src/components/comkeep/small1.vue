<template>
    <div class="small">
        small1
        {{msg}}
        <button @click="changeinfo">changeinfo</button>
    </div>
</template>
<script>
export default {
  name: 'small1',
  data () {
    return {
      msg: 'samll_1'
    }
  },
  methods: {
    changeinfo () {
      this.msg = 'samll_1_1111'
    }
  }
}
</script>
<style>
</style>
