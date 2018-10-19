<template>
    <div class="parent">父组件
        <Child>
            <p slot="s1">wqreere</p>
            <p slot="s2" slot-scope="scope">werewr<br/>{{scope.text}}</p>
            <p>somethings</p>
        </Child>
    </div>
</template>
<script>
import Child from './child'
export default {
  name: 'parent',
  components: {
    Child
  }
}
</script>
<style scoped>
p {
    color: aqua;
}
</style>
