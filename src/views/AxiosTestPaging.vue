<template>
  <ul class="paging">
    <li v-for="(page, idx) in totalPage" :key="idx" @click="movePage(page)" class="liDeco">{{ page }}</li>
  </ul>
</template>

<script>
export default {
  props: ['totalPage'],
  data() {
    return {};
  },
  methods: {
    movePage(page) {
      this.$emit('movePage', page);
    },
  },
};
</script>
<style scoped>
.paging {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px auto;
  padding: 0;
}
.liDeco {
  margin: 0 5px;
  width: 15px;
  text-decoration: none;
  list-style: none;
  border: 1px solid #333;
}
</style>
