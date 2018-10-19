<template>
    <div class="choose-component">
        <ul class="choose-list">
            <li @click="choose(i)" v-for="(v, i) in Radios" :key="i" :class="{'active': i === nowIndex}">
              {{v.title}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'radios',
  data () {
    return {
      number: 1,
      nowIndex: 0
    }
  },
  props: {
    Radios: {
      type: Array,
      default: function () {
        return [
          {
            title: '测试',
            value: 'test'
          }
        ]
      }
    }
  },
  methods: {
    choose (index) {
      this.nowIndex = index
      this.$emit('radios', this.Radios[index].value)
      this.$store.dispatch('updateOrder', ['radios', this.Radios[index].value])
    }
  }
}
</script>
<style scoped>
.choose-component {
    position: relative;
    display: inline-block;
}
.choose-list li {
    display: inline-block;
    border: 1px solid #e3e3e3;
    border-right: 0;
    height: 30px;
    line-height: 30px;
    padding: 0 25px;
    text-align: center;
    cursor: pointer;
}
.choose-list li:last-child {
  border-right: 1px solid #e3e3e3;
}
.choose-list li.active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: white;
}
</style>
