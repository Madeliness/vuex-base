<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>会员中心</h2>
      <p>营养家，是汤臣倍健旗下的会员服务平台，目前已拥有千万优质会员，秉承“定制健康生活”的理念，致力于为消费者提供专业、贴心、便利的健康服务。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <keep-alive>
            <Counter @counter="getGoodInfo('counter', $event)" :max="Counter.max" :min="Counter.min" />
          </keep-alive>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <keep-alive>
            <down-menu @downmenu="getGoodInfo('downmenu', $event)" :down-data="DownData"></down-menu>
          </keep-alive>
        </div>
      </div>
      <div class="sales-board-line" style="line-height: 50px">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <keep-alive>
            <Radios @radios="getGoodInfo('radios', $event)" :Radios="Radios" />
          </keep-alive>
        </div>
      </div>
      <div class="sales-board-line" style="line-height: 50px">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          <span class="sales-board-line-right-inner">{{getTotalPrice}}</span>
          <b>元</b>
        </div>
      </div>
      <div class="sales-board-line" style="line-height: 1">
        <div class="sales-board-line-left">
        </div>
        <div class="sales-board-line-right">
          <a href="#" class="button">立即加入</a>
          <a href="#" class="button">加入购物车</a>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>会员权益</h2>
      <p>会员尊享福利，您的专属特权！成为营养家会员，不仅可以用积分兑换丰富礼品，还可参加每月精彩会员活动，享受超值优惠；更有专业资深营养专家顾问团贴心服务，用心关怀您的健康！</p>
      <h2>会员活动</h2>
      <p>会员尊享福利，您的专属特权！成为营养家会员，不仅可以享受积分兑换丰富礼品，还可参加每月精彩会员活动，享受超值优惠；更有专业资深营养专家顾问团，贴心服务，用心关怀您的健康！</p>
      <h3>积分与兑换</h3>
      <ul>
        <li>凡在正规渠道购买汤臣倍健产品的消费者，均可获得营养家积分，按汤臣倍健官网建议零售价1元积1分。会员可通过多种方式获得积分，累计积分可兑换丰富礼品及会员服务。</li>
        <li>凡在正规渠道购买汤臣倍健产品的消费者，均可获得营养家积分，按汤臣倍健官网建议零售价1元积1分。会员可通过多种方式获得积分，累计积分可兑换丰富礼品及会员服务。</li>
        <li>凡在正规渠道购买汤臣倍健产品的消费者，均可获得营养家积分，按汤臣倍健官网建议零售价1元积1分。会员可通过多种方式获得积分，累计积分可兑换丰富礼品及会员服务。</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Counter from './components/Counter'
import DownMenu from './components/DownMenu'
import Radios from './components/Radios'
export default {
  name: 'health4',
  components: {
    Counter,
    DownMenu,
    Radios
  },
  data () {
    return {
      counter: 1,
      downmenu: 1,
      radios: 1,
      totalPrice: 0,
      Counter: {
        max: 10,
        min: 1
      },
      DownData: [
        {
          name: '初级版',
          value: 1
        },
        {
          name: '中级版',
          value: 2
        },
        {
          name: '高级版',
          value: 3
        }
      ],
      Radios: [
        {
          title: '1个月',
          value: 1
        },
        {
          title: '3个月',
          value: 3
        },
        {
          title: '半年',
          value: 6
        },
        {
          title: '年费',
          value: 12
        }
      ]
    }
  },
  computed: {
    getTotalPrice () {
      this.$store.dispatch(
        'updatePrice',
        this.counter * 50 + this.downmenu * 200 + this.radios * 120
      )
      return this.$store.getters.getTotalPrice
    }
  },
  methods: {
    getGoodInfo (key, event) {
      this[key] = event
      var readyData = {
        counter: this.counter, // 50元
        downmenu: this.downmenu, // 200元
        radios: this.radios // 月120元
      }
      console.log(readyData)
    }
  }
}
</script>
<style scoped>
.buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
}
.sales-board {
    background: #fff;
}
.sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
}
.sales-board-des p {
    line-height: 1.6;
}
.sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
}
.sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
}
.sales-board-des li {
    padding: 5px 0;
    line-height: 28px;
}
.sales-board-intro {
    background: #f9f8f7;
    box-shadow: -1px -1px 10px #e1e1e1;
}
.sales-board-form {
    padding: 20px;
}
.sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
}
.sales-board-intro p {
    line-height: 35px;
    text-indent: 2em;
}
.sales-board-line {
    line-height: 40px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-line-right-inner {
    font-size: 150%;
    color: #ff0000;
    font-weight: bold;
}
.buy-dialog-btn {
    margin-top: 20px;
}
.buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
}
.buy-dialog-table th {
    background: #4fc08f;
    color: #fff;
    border: 1px solid #4fc08d;
}
.button {
    background: mediumseagreen;
    color: white;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}
.sales-board-line-right a:hover,
.sales-board-line-right a:active {
    text-decoration: none;
    background: #40a96f;
}
</style>
