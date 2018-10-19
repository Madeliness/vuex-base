#项目初始化
    1.安装vue-cli
        npm install -g vue-cli
    2.初始化项目
        vue init webpack my-project
    3.进入项目
        cd my-project
    4.安装依赖
        npm install
    5.启动项目
        npm run dev
#项目目录结构
    index.html:  项目根试图
    .postcssrc.js:  postcssrc配置文件
    static： 静态文件
    config:  针对开发时服务器的配置
    src: 代码源文件
    src/main.js: 入口文件
    src/App.vue: 最顶层的组件
    src/components: 其他子组件
    src/assets: css,image等
#VUE基础
    Vue组件：
        包含三个部分：
            Template：视图部分
            script: 逻辑部分
            style: 样式部分
    Mustache: 模板
        表现形式： {{语法}}
        {{ hello }}
        <h2>{{1 + 1}}</h2>
        <h1>{{'xsdsffr'}}</h1>
        <!-- <a>{{0<10 ? '对的' : '错的'}}</a> -->
        {{'注意：只能存在单行语句'}}
    VUE 基本指令：
        v-html: 
        v-text: 
        v-bind: 绑定
        v-if: 条件指令
        v-else:
        v-show: display:block/none
            v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

            v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

            相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

            一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
        列表渲染：
            v-for: 数组(for...in...)遍历
            每个列表都需要添加key
        事件监听:
            v-on:
            methods:
            事件参数
            修饰符
            简写方法：@click 代替 v-on:
        数组更新检测：
            变异方法（改变了原数组）：引起视图更新
            替换数组（创建新数组）：不会引起视图更新
        显示
        计算属性: computed
            computed和method的区别
            计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数
        表单输入绑定
            v-model双向数据绑定
            修饰符：lazy,trim,number
    组件之间通信
        父 -> 子：props
            数据传递类型：5种类型
        子 -> 父：emit
    插槽
        单个插槽
        具名插槽
        作用域插槽：数据是子传父
    动态组件：keep-alive
        主要用于保留组件状态或避免重新渲染
        不会在函数式组件中正常工作，因为它们没有缓存实例
        include 和 exclude 属性允许组件有条件地缓存
    过渡和动画(css)
        在css过渡和动画中自动应用class
            过渡类名：
                v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

                v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

                v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

                v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

                v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

                v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
        可以配合使用第三方 CSS 动画库，如 Animate.css
    自定义指令
        // 注册一个全局自定义指令 `v-focus`
        // Vue.directive('focus', {
        //   // 当被绑定的元素插入到 DOM 中时……
        //   inserted: function (el) {
        //     // 聚焦元素
        //     el.focus()
        //   }
        // })
        // 局部指令
        directives: {
            focus: {
            // 指令的定义
            inserted: function (el) {
                el.focus()
            }
            },
            mycss: {
            inserted: function (el) {
                el.style.color = 'blue'
            }
            }
        }
    过滤器
        过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：
        <!-- 在双花括号中 -->
        {{ message | capitalize }}

        <!-- 在 `v-bind` 中 -->
        <div v-bind:id="rawId | formatId"></div>
            在一个组件的选项中定义本地的过滤器：
                filters: {
                    capitalize: function (value) {
                        if (!value) return ''
                        value = value.toString()
                        return value.charAt(0).toUpperCase() + value.slice(1)
                    }
                }
    Axios: 
        post：
            参数格式必须为form-data格式
                ① formData：?name='aa'&pwd='123'
        全局的 axios 默认值:
            axios.defaults.baseURL = 'https://api.example.com'; // 请求接口基础路径
            axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; // 作者认证
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';  // post 请求时转码
        拦截器：
            在请求或响应被 then 或 catch 处理前拦截它们
        跨域处理：
            config/index.js":
                // 跨域解决方案
                proxyTable: {
                    '/api': {
                        target: 'http://localhost:3000', // 开发
                        changeOrigin: true,
                        pathRewrite: {
                        '^/api': ''
                        }
                    }
                }
            main.js:HOST
                Vue.prototype.HOST = 'api'
    mock: 数据模拟
        方案：
            1.前端静态JSON文件，get请求形式访问数据（只能get请求）
            2.项目中集成服务器，模拟各种接口（多为前后端分离同步开发时采用）
            3.直接使用线上数据（多为重构时采用）
            4.mock.js 
#Vuex
    1.是什么
        Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    2.什么情况下我应该使用 Vuex？
        如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store 模式就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。
    3.Vuex状态管理
        mutations:
            只能同步执行
        action:
            1.Action 提交的是 mutation，而不是直接变更状态
            2.Action 可以包含任意异步操作
#vue-resource
    1.1.0以后已弃用，具体参考Axios