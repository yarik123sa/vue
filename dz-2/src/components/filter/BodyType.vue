<script>
import {mapGetters,mapActions} from "vuex";

export default {
  name: "BodyType",
  computed:{
    ...mapGetters(["bodyType","bodyTypeSelected"]),
    bodySelected:{
      get(){
        return this.bodyTypeSelected;
      },
      set(val){
         this.selectedAutoBody(val)
      }
    }
  },
  methods:{
    ...mapActions(["selectedAutoBody"]),
  }

}
</script>

<template>
  <select v-model="bodySelected">
    <option
    v-for="item in bodyType"
    :key="item.id"

    >
      {{item.label}}
    </option>
  </select>
</template>

<style scoped>

</style>