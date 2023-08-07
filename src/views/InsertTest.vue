<template>
  <div class="title">insertTest</div>
  <input type="button" value="insert" @click="onInsertEvent" />
</template>
<script>
import axios from 'axios';

export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: '',
    };
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    onInsertEvent() {
      axios.post('');
    },
  },
};
</script>
<style scoped></style>
