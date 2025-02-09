<script>
export default {
  name: "ProductItem",
  props: {
    prodData: {
      type: Object,
      default:( ) => ({})
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
    <div :class="{ active: isActive }" class="item"    @click="$emit('activeClass', prodData.id)">
      <div class="title">{{prodData.title}}</div>
      <div class="descr">{{prodData.description}}</div>
      <hr>
    </div>
</template>

<style scoped>
.active{
  border: 3px solid red;
}

</style>