<template>
  <div>
    <div class="title">остані переглянуті товари</div>
    <div class="lastVied">
      <div v-for="item in lastProducts" :key="item.id" class="lastVied__item">
        <img :src="item.img" alt="image">
        <div class="lastVied__descr">{{ item.description }}</div>
        <div  v-if="item.isAvailable" class="lastVied__available">Є в найявності</div>
        <div  v-else class="lastVied__not-available">нема в найвності</div>
        <div v-if="item.discount" class="lastVied__discount">{{item.discount}}</div>
        
        <div class="lastVied__price">{{item.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastVied",
  props: {
    lastProducts: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.lastVied {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 40px;
}

.lastVied img {
  width: 100px;
}

.lastVied__descr {
  text-align: center;
  margin-top: 15px;
  max-width: 250px;
  margin-bottom: 10px;
}
.lastVied__available{
  color: green;
  margin-bottom: 10px;
}
.lastVied__not-available{
  color: gray;
}
.lastVied__discount{
  text-decoration: line-through;
  color: gray;
}
</style>