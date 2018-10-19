<template>
    <div class="detail-wrap">
      <div class="detail-left">
        <div class="product-board">
          <img :src="getUrl" alt="img" style="width:100%"/>
          <ul>
            <router-link tag="li" v-for="(nav, i) in detailsNav" :key="i" :to="{path: `/details/${nav.tag}`}" active-class="active">
              {{nav.title}}
            </router-link>
          </ul>
        </div>
      </div>
      <div class="detail-right">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
export default {
  name: 'details',
  data () {
    return {
      detailsNav: [
        {
          title: '健康测评',
          tag: 'health1'
        },
        {
          title: '营养百科',
          tag: 'health2'
        },
        {
          title: '明星营养师',
          tag: 'health3'
        },
        {
          title: '会员中心',
          tag: 'health4'
        }
      ],
      imgUrl: {
        '/details/health1': require('../assets/images/health-1.png'),
        '/details/health2': require('../assets/images/health-2.png'),
        '/details/health3': require('../assets/images/health-3.png'),
        '/details/health4': require('../assets/images/health-4.jpg')
      }
    }
  },
  computed: {
    getUrl () {
      return this.imgUrl[this.$route.path]
    }
  }
}
</script>
<style scoped>
  .detail-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
  .detail-left {
    float: left;
    width: 200px;
    text-align: center;
  }
  .detail-right {
    float: right;
    width: 940px;
    min-height: 408px;
    margin-left: 20px;
    background: #fff;
    padding: 20px;
  }
  .product-board {
    background: #fff;
  }
  .product-board ul {
    margin-top: 20px;
  }
  .product-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
  }
  .product-board li.active,
  .product-board li:hover {
    background: #4fc08d;
    color: #fff;
  }
  .product-board li a {
    display: block;
  }
  .sales-board {
    background: #fff;
  }
  .sales-board-intro {}
  .sales-board-form {}
  .sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
  }
  .sales-board-intro p {}
  .sales-board-line {}
  .sales-board-line-left {
    display: inline-block;
    width: 100px;
  }
  .sales-board-line-right {
    display: inline-block;
    width: 75%;
  }
  .sales-board-table {
    width: 100%;
    margin-top: 20px;
  }
  .sales-board-table th {
    background: #4fc08d;
    color: #fff;
  }
  .sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
  }
</style>
