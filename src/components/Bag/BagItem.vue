<script>
export default {
  name: "bagITem",
  props: {
    bagData:{
      type: Object,
      default: ()=> ({})
    },
    isBagActive:{
      type: Boolean,
      default: false,
    }
  }
}
</script>

<template>
<div :class="{bagActive:isBagActive}" class="bag-item" @click="$emit('activeBag', bagData.id)">
  <div class="bag-item__title">{{bagData.title}}</div>
  <div v-if="bagData.oldPrice" class="bag-item__oldPrice">{{bagData.oldPrice}}</div>
  <div class="bag-item__price">{{bagData.price}}</div>
</div>
</template>

<style scoped>
.bag-item{
  margin-top: 30px;
}
.bag-item__oldPrice{
  text-decoration: line-through;
  color: gray;
}
.bagActive{
  border: 3px solid green;
}

</style>