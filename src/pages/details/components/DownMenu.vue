<template>
    <div class="selection-component">
      <div class="selection-show" @click="showHide">
        <span>{{this.DownData[nowIndex].name}}</span>
        <div class="arrow"></div>
      </div>
      <div class="selection-list" v-show="show">
        <ul>
          <li v-for="(v, i) in DownData" :key="i" @click="selectList(i)">
            {{v.name}}
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  name: 'downmenu',
  data () {
    return {
      nowIndex: 0,
      show: false
    }
  },
  props: {
    DownData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    showHide () {
      this.show = !this.show
    },
    selectList (index) {
      this.nowIndex = index
      this.show = false
      this.$emit('downmenu', this.DownData[index].value)
      this.$store.dispatch('updateOrder', ['downmenu', this.DownData[index].value])
    }
  }
}
</script>
<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background: white;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e1e1e1;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 32px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  height: 25px;
  line-height: 25px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>
