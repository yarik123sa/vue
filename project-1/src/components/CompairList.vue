<template>
  <div>
    <div class="title">Списки порівнянь</div>
    <div class="subtitle">мобільні телефони</div>
    <div class="count_product">кількість товарів   {{ products.length }}</div>
    <img  v-for="item in products " :key="item.id"  class="product-items" :src="item.img" alt="">
  </div>
  <hr>
</template>

<script>
export default {
  name: 'CompairList',

  props: {
    products: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
  .title{
    font-size: 20px;
  }
  .product-items{
    margin-top: 10px;
    width: 100px;
  }
</style>