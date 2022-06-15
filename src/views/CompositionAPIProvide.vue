<template>
  <CompositionAPIInject />
</template>
<script>
import { provide } from "vue";
import CompositionAPIInject from "./CompositionAPIInject";
export default {
  components: { CompositionAPIInject },
  setup() {
    provide("title", "Vue.js프로젝트");
  },
};
</script>
