<template>
  <div>
    <h1>营养百科
      <span class="remmend">推荐阅读</span>
    </h1>
    <div class="remmend-container">
      <ul>
        <li v-for="(item, i) in message" :key="i">
          <div class="context">
            <a :href="item.url" target="_blank">
            <div class="context-img">
              <img :src="item.img" />
            </div>
            <div class="context-txt">
              <h3>
                {{item.title}}
              </h3>
              <p>
                {{item.desc}}
              </p>
            </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'health2',
  data () {
    return {
      message: []
    }
  },
  computed: {
    getTotalPrice () {
      return this.$store.getters.getTotalPrice
    }
  },
  created () {
    // this.$axios.get('http://www.wwtliu.com/sxtstu/blueberrypai/getChengpinInfo.php').then(res => {
    //   // return res.data
    //   if (res.status === 200) {
    //     console.log(res)
    //     this.message = res.data.chengpinInfo
    //   }
    //   // console.log(res)
    // }).catch(err => {
    //   console.dir(err)
    // })
    setTimeout(() => {
      this.message = [
        {
          title: '涨姿势！告诉你如何诊断低血糖！',
          desc:
              '相对于高血糖，人们往往更容易忽略低血糖。其实低血糖一样危险，那么低血糖又是怎么一回事呢？',
          img:
              'http://micros.4000916916.com/issue/upload_files/image/Rq2bSspI/20170124/20170124120438_753.jpg',
          url: 'http://www.by-health.com/nutrition-info-1439'
        },
        {
          title: '肾结石到底能不能补钙？',
          desc:
              '刚刚做完肾结石手术，还能不能补钙？需不需要限制钙的摄入呢？',
          img:
              'http://micros.4000916916.com/issue/upload_files/image/jCPvEJB1/20170124/20170124141937_467.jpg',
          url: 'http://www.by-health.com/nutrition-info-1441'
        },
        {
          title: '让人又爱又恨的零食到底吃不吃？',
          desc:
              '吃零食应该在两顿饭之间吃，即在午餐和晚餐之前至少1小时，晚餐后不要再给零食。',
          img:
              'http://micros.4000916916.com/issue/upload_files/image/mLy3N7S1/20170124/20170124134134_239.jpg',
          url: 'http://www.by-health.com/nutrition-info-1392'
        },
        {
          title: '八个习惯，营养素吃再多也没用！ ',
          desc:
              '随着经济的发展，民众的保健意识也越来越强，可能每个人家里都会有几瓶钙片，鱼油、蛋白粉等等。有的是自己在买药的时候店员推荐的，有的是儿女孝顺老人送的。',
          img:
              'http://micros.4000916916.com/issue/upload_files/image/HMNyEhFS/20170123/20170123150735_895.jpg',
          url: 'http://www.by-health.com/nutrition-info-1346'
        },
        {
          title: '痛“疯”了！痛风患者到底要不要减少蛋白质摄入？',
          desc:
              '痛风患者常常被建议，在日常饮食中，要避免摄入海鲜、猪牛羊肉、干豆类等高蛋白食物；很多患者就会有这样的疑问：痛风是由高蛋白食物导致的吗？自己是不是需要减少蛋白质的摄入？ ',
          img:
              'http://micros.4000916916.com/issue/upload_files/image/xDElqtAz/20170124/20170124123029_363.jpg',
          url: 'http://www.by-health.com/nutrition-info-1442'
        },
        {
          title: '减肥的最佳拍档，你拥有了吗？',
          desc:
              '研究显示，睡眠少于六小时，肥胖发病率会显著上升。其原因是睡眠不足影响瘦素等激素分泌，学业压力和其他心理问题会影响食欲，有些孩子往往会以贪吃、暴饮暴食排解压力，最终导致肥胖和营养问题。此外，遗传和家庭饮食习惯和生活方式也是影响体重的因素。',
          img:
              'http://micros.4000916916.com/issue/upload_files/image/pvO7oBc1/20170124/20170124134411_186.jpg',
          url: 'http://www.by-health.com/nutrition-info-1348'
        },
        {
          title: '缺铁性贫血那些你不知道的事',
          desc:
              '缺铁性贫血是仅次于结核病，全球患病率最高、耗资最大的公共卫生问题，是中国政府重点防治的儿童“四大疾病”[缺铁性贫血、维生素A缺乏、维生素D缺乏、蛋白质-能量缺乏]之首。听到这里你怕了吗？我国儿童缺血性贫血的发病率仍然比较高，需要高度重视，积极干预。',
          img:
              'http://micros.4000916916.com/issue/upload_files/image/Ze9QqnHI/20170124/20170124134148_281.png',
          url: 'http://www.by-health.com/nutrition-info-1438'
        }
      ]
    }, 500)
  }
}
</script>
<style scoped>
h1 {
    font-size: 30px;
    margin: 20px;
}
h3 {
  font-size: 18px;
  margin-bottom: 10px;
}
p {
  line-height: 24px;
}
.remmend {
    margin-left: 30px;
    font-size: 18px;
}
.remmend-container ul li {
  width: 100%;
}
.context {
  display: inline-block;
  position: relative;
  width: calc(100% - 20px);
  margin-top: 30px;
  padding: 10px;
  background: #fafafa;
  border-radius: 6px;
  box-shadow: 2px 5px 10px #f1f1f1;
}
.context:hover {
  background: #eee;
}
.context a {
  display: block;
  width: 100%;
}
.context-img, .context-txt {
  display: inline-block;
}
.context-img {
  width: 100px;
  border: 1px solid #ddd;
}
.context-img img {
  width: 100%;
}
.context-txt {
  width: calc(100% - 130px);
  padding: 0 10px;
  vertical-align: top;
}
</style>
