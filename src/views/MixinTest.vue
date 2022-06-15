<template>
  <div>
    <button type="button" @click="getProductList">조회</button>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>배송명</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.delivery_price }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import ApiMixin from "../api.js";
import MonitoringMixin from "../monitoring.js";

export default {
  name: "",
  mixins: [MonitoringMixin],
  components: {},
  data() {
    return {
      productList: [],
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log("컴포넌트 mounted()");
  },
  unmounted() {},
  methods: {
    async getProductList() {
      this.productList = await this.$api("https://274ca34c-4834-4feb-8f8c-97b1efc5089b.mock.pstmn.io/productList", "get", {});
      console.log(this.productList);
    },
  },
};
</script>
<style scoped></style>
