<template>
  <div class="AxiosTest">
    <div v-for="(user, idx) in users" :key="idx">
      <h2>{{ user.first_name }}</h2>
      <img :src="`${user.avatar}`" alt />
    </div>
    <br />
  </div>
  <Paging :totalPage="totalPage" @movePage="movePage" />
</template>

<script>
import axios from 'axios';
import Paging from './AxiosTestPaging';

export default {
  data() {
    return {
      users: null,
      totalPage: null,
      pageNum: 1,
    };
  },
  methods: {
    fetchData(pageNum) {
      axios
        .get('https://reqres.in/api/users?page=' + pageNum)
        .then((res) => {
          this.users = res.data.data;
          this.totalPage = res.data.total_pages;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    movePage(page) {
      this.fetchData(page);
    },
  },
  created() {
    this.fetchData(this.pageNum);
  },
  components: {
    Paging,
  },
};
</script>
<style scoped>
.AxiosTest {
  display: flex;
  justify-content: space-evenly;
}
</style>
