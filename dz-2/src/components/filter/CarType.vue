<script>
import {mapGetters ,mapActions} from "vuex";

export default {
  name: "CarType",
  computed:{
    ...mapGetters(["categoryAuto" , "carTypeSelected"]),
    carSelected:{
      get(){
        return this.carTypeSelected;
      },
      set(val){
        this.selectedAuto(val)
      }
    }
  },
  methods:{
    ...mapActions(["selectedAuto"]),
  }
}

</script>

<template>
  <select v-model="carSelected">
    <option
      v-for="auto in categoryAuto"

      :key="auto.id"
    >
      {{auto.label}}


    </option>


  </select>
  {{carSelected}}
</template>

<style scoped>

</style>