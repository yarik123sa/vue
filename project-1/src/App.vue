<template>
  <compair-list :products="compareProducts"></compair-list>
  <last-vied :last-products="products"></last-vied>
</template>

<script>

import CompairList from './components/CompairList.vue'
import LastVied from "@/components/LastVied.vue";

export default {
  name: 'App',
  components: {CompairList, LastVied},
  data() {
    return {
      compareProducts: [
        {
          id: 1,
          type: 'Mobile phones',
          title: 'iPhone 16 Pro & iPhone 16 Pro Max',
          img: require('@/assets/img/img.png')


        },
        {
          id: 2,
          type: 'Mobile phones',
          title: 'iPhone 16 & iPhone 16 Plus',
          img: require('@/assets/img/img.png')


        },
        {
          id: 3,
          type: 'Mobile phones',
          title: 'iPhone 15 & iPhone 15 Plus',
          img: require('@/assets/img/img.png')

        }
      ],
      products:
          [
            {
              id: 1,
              title: 'iPad Pro',
              img: require('@/assets/img/ipad.png'),
              description: 'The ultimate iPad experience with the most advanced technology.',
              price: 1900,
              isAvailable: true,
              discount: null,
            },
            {
              id: 2,
              title: 'iPad Air',
              img: require('@/assets/img/ipad.png'),

              description: 'Serious performance in a thin and light design.',
              price: 1500,
              discount: 600,
              isAvailable: true,
            },
            {
              id: 3,
              title: 'iPad',
              img: require('@/assets/img/ipad.png'),
              description: 'The colourful, all-screen iPad for the things you do every day.',
              price: 1200,
              discount: null,
              isAvailable: false,
            }
          ]
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
