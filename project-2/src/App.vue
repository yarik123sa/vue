<template>
  <NewPost @send="OnSend"></NewPost>
  <post-list v-for="item in posts" :key="item.id" :userList="item"></post-list>/

</template>

<script>
import NewPost from "@/components/NewPost.vue";
import PostList from "@/components/postList.vue";
export default {
  name: 'App',


  data() {
    return {
      posts: []
    }
  },
  components: {
    NewPost,
    PostList
  },
  methods: {
    OnSend(NewPost) {
      this.posts.push(NewPost);
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
