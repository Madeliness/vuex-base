<template>
    <div>
        明星营养师
        {{getOrder}}
    </div>
</template>
<script>
export default {
  name: 'health3',
  data () {
    return {}
  },
  computed: {
    getOrder () {
      return this.$store.getters.getOrder
    }
  }
}
</script>
<style scoped>
</style>
