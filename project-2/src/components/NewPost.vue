<template>
  <div>
    <label>
      <input type="text"  placeholder="type a new massage" v-model="enteredText">
      <button @click="newPost">send</button>
    </label>
  </div>
</template>

<script>
export default {
  name: 'NewPost',
  data() {
    return {
      enteredText: null,
    }
  },
  methods: {
    newPost(){
      const newPost = {
          title: this.enteredText,
          id: new Date().getTime(),
      }
      this.enteredText = null;
      this.$emit('send', newPost)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>