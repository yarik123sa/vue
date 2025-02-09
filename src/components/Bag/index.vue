<script>

import BagItem from "@/components/Bag/BagItem.vue";
import {mapGetters,mapActions} from "vuex";

export default {
  name: "Bag",
  components: {BagItem},
  computed: {
    ...mapGetters(["bagData" ,"activeBagClass"]),

  },
  methods:{
    ...mapActions(["setActiveBagClass"]),
  }
}
</script>

<template>
  <div class="container">
  <bag-item
    v-for="bagItem in bagData"
    :key="bagItem.id"
    :bag-data="bagItem"
    :is-bag-active="bagItem.id ===activeBagClass"
    @activeBag="setActiveBagClass"
  />
  </div>
</template>

<style scoped>
.container{
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

</style>