<script>
export default {
  name: "CarItem",
  props: {
    carsList: {
      type: Object,
      default: ()=> ({})
    },
  },
}

</script>

<template>
  <div class="car-item">
    <div class="car__type">
      {{carsList.type}}

    </div>
    <div class="car__body_type">
      {{carsList.body_type}}

    </div>
    <div class="car__body_type">
      {{carsList.body_type}}

    </div>
    <div class="car__brand">
      {{carsList.brand}}

    </div>

    <div class="car__model">
      {{carsList.model}}

    </div>
    <div class="car__year">
      {{carsList.year}}

    </div>
  </div>
</template>

<style scoped>
.car-item{
  display: flex;
  gap: 20px;
}
.car-item{
  border: 1px solid #ddd;
  margin-top: 10px;
  padding: 10px;
}
</style>