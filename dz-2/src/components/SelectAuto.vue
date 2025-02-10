<script>
import CarType from "@/components/filter/CarType.vue";
import CarsList from "@/components/carslist/index.vue";
import BodyType from "@/components/filter/BodyType.vue";
export default {
  name: "SelectAuto",
  components: {
    CarType,
    CarsList,
    BodyType
  }

}
</script>

<template>
  <car-type/>
  <body-type/>
  <cars-list/>
</template>

<style scoped>

</style>