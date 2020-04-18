<template>
  <div class="Details">
    <detailNavbar/>
    <detailswiper :topimages="topImages"/>
    <detailbaseinof :goods="goods"/>
    <detailshopinfo :shop="shop"/>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <buttonbar @click="shopcarClick"/>
  </div>
</template>

<script>
import detailNavbar from './childComps/DetailNavBar'
import detailswiper from './childComps/DetailSwiper'
import detailbaseinof from './childComps/DetailBaseInfo'
import detailshopinfo from './childComps/DetailShopInfo'
import buttonbar from './childComps/ButtonBar'

import {getDetails, Goods, Shop} from '@/network/details'
export default {
  name: 'Details',
  components: {
    detailNavbar,
    detailswiper,
    detailbaseinof,
    detailshopinfo,
    buttonbar
  },
  data() {
    return {
      iid:null,
      topImages: [],
      goods: {},
      shop:{}
    }
  },
  created(){
    //保存被点击的元素的详情数据
    this.iid = this.$route.params.iid

    //根据iid请求详情数据
    getDetails(this.iid).then(res =>{
      console.log(res);
      const data = res.data.result
      //轮播图数据
      this.topImages = data.itemInfo.topImages
      //获取商品信息的对象
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)
    })
  },
  methods: {
    shopcarClick() {
      const product = {}
      product.img = this.topImages[0]
      // product.
    }
  }
}
</script>

<style>  
  .Details {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>