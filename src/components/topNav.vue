<template>
    <div class="app-head">
        <div class="app-head-inner">
            <router-link to="/">
                <img src="../assets/images/logo1.png" alt="logo"/>
            </router-link>
            <span><b>23</b>国营养，只为<b>1</b>个更好的你</span>
            <div class="head-nav">
                <ul class="nav-list">
                    <li>登录</li>
                    <li class="nav-pile">|</li>
                    <li>注册</li>
                    <li class="nav-pile">|</li>
                    <li>关于</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'header'
}
</script>
<style scoped>
    .app-head {
        background: hsl(0, 0%, 21%);
        color: #e8e8e8;
        height: 90px;
        line-height: 90px;
        width: 100%;
    }
    .app-head-inner {
        width: 1200px;
        margin: 0 auto;
    }
    .head-logo {
        float: left;
    }
    .app-head-inner span {
        position: relative;
        top: -15px;
    }
    .app-head-inner img {
        height: 40px;
        margin-top: 20px;
        margin-right: 20px;
    }
    .head-nav {
        float: right;
    }
    .head-nav ul {
        overflow: hidden;
    }
    .head-nav li {
        cursor: pointer;
        float: left;
    }
    .nav-pile {
        padding: 0 10px;
    }
    .container {
        width: 1200px;
        margin:  0 auto;
    }
    .hr {
        height: 1px;
        width: 100%;
        background: #ddd;
    }
    .button {
        background: #4fc08d;
        color: #fff;
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
    }
    .button:hover {
        background: #4fc08d;
    }
    .g-form {

    }
    .g-form-line {
        padding:  15px 0;
    }
    .g-form-label {
        width: 100px;
        font-size: 16px;
        display: inline-block;
    }
    .g-form-input {
        display: inline-block;
    }
    .g-form-input input {
        height: 30px;
        width: 200px;
        line-height: 30px;
        vertical-align: middle;
        padding: 0 10px;
        border: 1px solid #ccc;
    }
    .g-form-btn {
        padding-left: 100px;
    }
    .g-form-error {
        color: red;
        padding-left: 15px;
    }
</style>
