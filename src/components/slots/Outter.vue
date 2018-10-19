<template>
    <div>
        outter<br/>
        store状态管理：{{getCount}}
        <button class="btn" @click="add">叠加</button>
    </div>
</template>
<script>
export default {
  name: 'outter',
  data () {
    return {

    }
  },
  computed: {
    getCount () {
      return this.$store.getters.getState
    }
  },
  methods: {
    add () {
      this.$store.dispatch('increment')
    }
  }
}
</script>
<style scoped>

</style>
