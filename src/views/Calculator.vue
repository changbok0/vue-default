<template>
  <div>{{ now }}</div>
  <div>{{ month }}월</div>
  <div>{{ hours }}</div>
  <div>{{ seconds }}</div>
</template>
<script>
import date from 'date-fns';

export default {
  name: '',
  components: {},
  data() {
    let now = new Date();
    const month = now.getMonth() + 1;
    const hours = now.getHours();
    const seconds = now.getSeconds();
    return {
      sampleData: '',
      now,
      month,
      hours,
      seconds,
    };
  },
  methods: {
    seconse11,
  },
  watch: {
    seconds: 'seconse11',
  },
};
</script>
<style scoped></style>
