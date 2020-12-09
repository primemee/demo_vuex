<template>
  <div class="shopCart">
      <div class="myStore">
          <h2>我的商铺</h2>
          <div class="book">
              <div v-for="(item,index) in shopData" :key="index" class="bookItem">
                  {{item.bookName}} - ${{item.price}} - {{item.num}}
                   <button :disabled='item.num === 0' @click="addCart(item)">加入购物车</button>
              </div>
          </div>
      </div>

      <div class="myCart">
          <h2>我的购物车</h2>
          <div class="myBook">
              <div v-for="(item,index) in cart.cart" :key="index" class="bookItem">
                  {{item.bookName}} - ${{item.price}} x {{item.num}}
              </div>
          </div>
          <div class="totalPrice">
              <h4>总价格:${{cartTotal}}</h4>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    data() {
        return {
            bookData:[
                {
                    id:1,
                    bookName:'Vue.js实战',
                    price:800,
                    num:9
                },
                {
                    id:2,
                    bookName:'Vue.js权威指南',
                    price:1200,
                    num:13
                },
                {
                    id:3,
                    bookName:'Vue全家桶',
                    price:1500,
                    num:0
                },
            ],
        }
    },
    computed:{
        ...mapState(['cart']),
        ...mapGetters(['cartTotal','shopData']),
    },
    methods: {
        ...mapActions(['addCart','getShopData']),
    },
    created() {
        this.$store.dispatch('getShopData')
    },
}
</script>

<style scoped>
.myStore{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}
.myCart{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #000;
}
.bookItem{
    margin-top: 10px;
}
</style>