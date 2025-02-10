<script>
import CarItem from "@/components/carslist/CarItem.vue";
import {mapGetters} from "vuex";

export default {
  name: "CarsList",
  components: {
    CarItem
  },
  computed: {
    ...mapGetters(["cars" ,"filteredCarsList"]),
  }
}
</script>

<template>
  <car-item
  v-for="auto in filteredCarsList"
  :key="auto.id"
  :cars-list="auto"
  />
</template>

<style scoped>

</style>