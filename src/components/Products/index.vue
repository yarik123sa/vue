<script>

import ProductItem from "@/components/Products/ProductItem.vue";
import {mapGetters,mapActions} from "vuex";

export default {
  name: "ProductMain",
  components: {ProductItem},
  computed: {
    ...mapGetters(["productData" ,"activeClass"]),
  },
  methods:  {
    ...mapActions(["setActiveClass"]),

  },
}
</script>

<template>

  <product-item
    v-for="item in productData"
    :key="item.id"
    :prod-data="item"
    :is-active="item.id === activeClass"
    @activeClass="setActiveClass"
  />
</template>

<style scoped>

</style>