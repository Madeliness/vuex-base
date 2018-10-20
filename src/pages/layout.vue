<template>
    <div class="index-wrap">
      <div class="index-left">
        <div class="index-left-block">
          <h2>关于汤臣倍健</h2>
          <div v-for="(product, i) in productList" :key="i">
            <h3>
              {{product.category}}
            </h3>
            <ul>
              <li v-for="(v, index) in product.list" :key="index">
                <a target="_blank" :href="v.url">
                  {{v.name}}
                </a>
                <span v-if="v.hot" class="hot-tag">HOT</span>
              </li>
            </ul>
            <div v-if="i%2 === 0" class="hr"></div>
          </div>
        </div>
        <div class="index-left-block last-news">
          <h2>最新消息</h2>
          <ul>
            <li v-for="(item, i) in news" v-if="i < 10" :key="i">
              <a target="_blank" :href="item.url">
                {{item.author_name}}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-right">
        <div class="swiper-size">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide>
              <a target="_blank" href="http://www.by-health.com/about-material">
                <img class="swiper-img" src="../assets/images/111111.jpg" alt="图片1"/>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a target="_blank" href="http://www.by-health.com/about-healthcar">
                <img class="swiper-img" src="../assets/images/111112.jpg" alt="图片2"/>
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="http://www.by-health.com/about-factory" target="_blank">
                <img class="swiper-img" src="../assets/images/111113.png" alt="图片3"/>
              </a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="index-board-list">
          <div class="index-board-item" v-for="(board, i) in boardList" :key="i" :class="[`index-board-${board.tag}`, {'line-last': i % 2 !== 0}]">
            <div class="index-board-item-inner">
              <h2>
                {{board.title}}
              </h2>
              <p>
                {{board.desc}}
              </p>
              <div class="index-board-button">
                <router-link class="button" :to="{path: './details/' + board.tag}">查看详情</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'layout',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      productList: [
        {
          category: '公司简介',
          list: [
            {
              name: '公司简介',
              url: 'http://www.by-health.com/about-about',
              hot: true
            },
            {
              name: '企业文化',
              url: 'http://www.by-health.com/about-values',
              hot: false
            },
            {
              name: '企业动态',
              url: 'http://www.by-health.com/about-dynamic',
              hot: false
            }
          ]
        },
        {
          category: '科技中心',
          list: [
            {
              name: '科技中心介绍',
              url: 'http://www.by-health.com/about-research',
              hot: false
            },
            {
              name: '知识产权',
              url: 'http://www.by-health.com/about-intellectual',
              hot: false
            },
            {
              name: '科技项目',
              url: 'http://www.by-health.com/about-project',
              hot: true
            },
            {
              name: '学术专家委员会',
              url: 'http://www.by-health.com/about-wyh',
              hot: false
            }
          ]
        }
      ],
      news: [],
      boardList: [
        {
          title: '健康测评',
          desc: '专业全面的健康检测，倾听身体的秘密从这里开始',
          tag: 'health1'
        },
        {
          title: '营养百科',
          desc: '丰富的营养资讯，全面的营养素科普知识让你成为营养达人',
          tag: 'health2'
        },
        {
          title: '明星营养师',
          desc: '优中选优的营养师团队，为您及家人的健康保驾护航',
          tag: 'health3'
        },
        {
          title: '会员中心',
          desc: '成为营养家会员，不仅可以用积分兑换丰富礼品，还可参加每月精彩会员活动，享受超值优惠',
          tag: 'health4'
        }
      ]
    }
  },
  created () {
    this.$axios.get('http://www.wwtliu.com/sxtstu/news/juhenews.php', {
      params: {
        count: 10,
        type: 'top'
      }
    }).then(res => {
      // console.log(res.data)
      this.news = res.data.result.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: right;
    width: 900px;
  }
  .swiper-size {
    margin-top: 15px;
    height: 350px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    height: 350px;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
    margin-top: 15px;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 180px;
  }
  .index-board-health1 .index-board-item-inner {
    background: url(../assets/images/health-1.png) no-repeat;
    background-size: contain;
  }
  .index-board-health2 .index-board-item-inner {
    background: url(../assets/images/health-2.png) no-repeat;
    background-size: contain;
  }
  .index-board-health3 .index-board-item-inner {
    background: url(../assets/images/health-3.png) no-repeat;
    background-size: contain;
  }
  .index-board-health4 .index-board-item-inner {
    background: url(../assets/images/health-4.jpg) no-repeat;
    background-size: contain;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 350px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .swiper-img {
    width: 100%;
  }
  .button {
    background: mediumseagreen;
    color: white;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    text-decoration: none;
    background: #40a96f;
  }
</style>
