<template>
  <div>
    <button type="button" @click="changeData">자식 컴포넌트 데이터 변경</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      msg: "자식 컴포넌트로 부터 보내는 메세지",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeData() {
      this.msg = "자식 컴포넌트에서 데이터 변경이 일어났습니다.";
    },
  },
};
</script>
<style scoped></style>
