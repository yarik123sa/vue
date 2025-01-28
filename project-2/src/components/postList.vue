<template>
  <div>

    <div>
      <button @click="IncreaseLikes">likes</button>
      <div>{{userList.title}}</div>
      <button @click="DecreaseDislikes">  dislikes</button>
      <div class="userLikes" >{{likes}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    userList: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      likes: 4
    }
  },
  methods: {


    IncreaseLikes() {

      this.likes ++
    },

    DecreaseDislikes(){

      this.likes --

    },

  }
}
</script>

<style lang="scss" scoped>

</style>