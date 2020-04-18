<template>
  <div id="home">
    <navbar class="home-nav"><h3 slot="centerbtn">购物街</h3></navbar>
    <tabcontrol :titles="['流行','新款','精选']" @itemClick="itemClick" ref="tabcont1" v-show="isfixed" :class="{isfixeds: isfixed}"/>
    <!--滚动插件-->
    <scroll class="homescroll" ref="scroll" 
      :probe-type="3" 
      @scroll="scrollback"
      :pullupload="true"   
      @pullingUp="pullmore">
      <homeswiper :banner="banner" @imageLoadTop="imageLoadTop"/>
      <recomview :recommend="recommend"/>
      <featureview/>
      <tabcontrol :titles="['流行','新款','精选']" @itemClick="itemClick" ref="tabcont2"/>
      <goodslist :goods="goods[condition].list"/>
    </scroll>
    <backtop @click.native="backClick" v-show="isfixed"/>
  </div>
</template>

<script>
//子组件
import homeswiper from './childComps/HomeSwiper'
import recomview from './childComps/RecomView'
import featureview from './childComps/FeatureView'
//公共组件
import navbar from '@/components/common/navbar/Navbar'
import tabcontrol from '@/components/content/tabcontrol/TabControl'
import goodslist from '@/components/content/goods/GoodsList'
import scroll from '@/components/common/scroll/Scroll'
import backtop from '@/components/content/backtop/BackTop'
//网络请求
import {getHomeMultidata, getHomeGoods} from "@/network/home"

export default {
  components: {
    homeswiper,
    recomview,
    featureview,
    navbar,
    tabcontrol,
    goodslist,
    scroll,
    backtop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop:{page:0, list:[]},
        new:{page:0, list:[]},
        sell:{page:0, list:[]},
      },
      condition: 'pop',
      backtopshow: false,
      tabcontroltop: 0,
      isfixed: false
    }
  },
  // 生命周期函数（刚刚创建时执行）
  created() {
    //请求轮播图数据
    this.getHomeMultidata(),
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // 接收图片加载完事件
    this.$bus.$on('itemImageLoad', () => {
      this.$refs.scroll.scroll.refresh()
    })
  },
  methods: {
//------------------事件监听相关的方法
    //判断点击的是流行，新款还是精选
    itemClick(index) {
      switch(index) {
        case 0:
          this.condition = 'pop'
          break;
        case 1:
          this.condition = 'new'
          break;
        case 2:
          this.condition = 'sell'
          break;
      }
      // 报错未定义
      this.$refs.tabcont1.condition = index;
      this.$refs.tabcont2.condition = index;
    },
    //点击按钮到达顶部
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500)
    },
    //按钮超过1000时显示 不然隐藏
    scrollback(position) {
      //卷进去的区域
      // console.log(position.y);
      this.backtopshow = (-position.y) > 1000;
      this.isfixed = (-position.y) > this.tabcontroltop
    },
    //对应的流行或者新款上拉加载更多
    pullmore() {
      this.getHomeGoods(this.condition)
    },
    //获取流行 新款 距离顶部的距离
    imageLoadTop() {
      this.tabcontroltop = this.$refs.tabcont2.$el.offsetTop;
    },
  // ------------------------网络请求相关的方法
    //请求轮播图数据
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      //console.log(res);  数据
      this.banner = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
      })
    },
    //请求商品数据
    getHomeGoods(type) {
      //一点进去就请求第一页数据展示
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
      //下拉时把该商品里的数据添加到之前的后面
        this.goods[type].list.push(...res.data.data.list)
        //下拉加载数据后页数要加1
        this.goods[type].page += 1
        //可多次上拉请求数据
        this.$refs.scroll.scroll.finishPullUp()
      })
    }
  },
}
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    font-size: 14px;
    letter-spacing:8px;
    color: #fff;
  }
  .homescroll {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .isfixeds {
    position: relative;
    z-index: 5;
  }
</style>