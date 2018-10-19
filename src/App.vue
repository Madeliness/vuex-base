<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view/>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import topNav from './components/topNav'
import bottomNav from './components/bottomNav'
export default {
  name: 'App',
  components: {
    topNav,
    bottomNav
  }
}
</script>

<style>
*{margin: 0;padding: 0;list-style: none;}
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote,
dl, dt, dd, ul, ol, li,
pre,
form, fieldset, legend, button, input, textarea,
th, td {
  margin: 0;
  padding: 0;
}
body,
button, input, select, textarea {
  font: 14px 'Microsoft yahei',tahoma, arial, \5b8b\4f53, sans-serif;
}
body {
  background: #f8f8f8;
  color: #444;
  line-height: 1;
}
h1, h2, h3, h4, h5, h6 { font-size: 100%; }
address, cite, dfn, em, var { font-style: normal; }
code, kbd, pre, samp { font-family: courier new, courier, monospace; }
small { font-size: 12px; }
ul, ol { list-style: none; }
a { text-decoration: none; color: #666; }
a:hover { text-decoration: underline; }
legend { color: #000; }
fieldset, img { border: 0; }
button, input, select, textarea { font-size: 100%; }
table { border-collapse: collapse; border-spacing: 0; }
.ks-clear:after, .clear:after {
  content: '\20';
  display: block;
  height: 0;
  clear: both;
}
.ks-clear, .clear {
  *zoom: 1;
}

.main {
  padding: 30px 100px;
width: 960px;
margin: 0 auto;
}
.main h1{font-size:36px; color:#333; text-align:left;margin-bottom:30px; border-bottom: 1px solid #eee;}

.helps{margin-top:40px;}
.helps pre{
  padding:20px;
  margin:10px 0;
  border:solid 1px #e7e1cd;
  background-color: #fffdef;
  overflow: auto;
}

.icon_lists{
  width: 100% !important;

}

.icon_lists li{
  float:left;
  width: 100px;
  height:180px;
  text-align: center;
  list-style: none !important;
}
.icon_lists .icon{
  font-size: 42px;
  line-height: 100px;
  margin: 10px 0;
  color:#333;
  -webkit-transition: font-size 0.25s ease-out 0s;
  -moz-transition: font-size 0.25s ease-out 0s;
  transition: font-size 0.25s ease-out 0s;

}
.icon_lists .icon:hover{
  font-size: 100px;
}
pre{
  background: #fff;
}
</style>
