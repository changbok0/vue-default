<template>
  <div class="AxiosTest">
    <div v-for="(user, idx) in users" :key="idx">
      <h2>{{ user.first_name }}</h2>
      <img :src="`${user.avatar}`" alt />
    </div>
    <br />
  </div>
  <Paging :totalPage="totalPage" @movePage="movePage" />
  <div class="boardApi">
    <div v-for="(items, idx) in items" :key="idx">
      <h2>{{ items.title }}</h2>
    </div>
  </div>
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
      items: [
        {
          boardNum: '',
          title: '',
          contents: '',
          regDate: '',
        },
      ],
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

    ResultData() {
      axios
        .get('http://localhost:8082/board/selectAll')
        .then((response) => {
          console.log('response.data', response.data);
          let res = response.data;
          this.items = []; // 빈 배열로 초기화
          for (let i = 0; i < res.length; i++) {
            const newItem = {
              boardNum: res[i].boardSeq || 'default',
              title: res[i].title || 'default',
              contents: res[i].contents || 'default',
              regDate: res[i].regDate || 'default',
            };
            this.items.push(newItem);
          }
        })
        .catch((error) => {
          // alert('데이터가 존재하지 않습니다.');
          console.error(error);
        })
        .finally(() => {
          // for (let i = 0; i < this.items.length; i++) {
          //   console.log('this.items[i].boardNum', this.items[i].boardNum);
          //   console.log('this.items[i].contents', this.items[i].contents);
          //   console.log('this.items[i].regDate', this.items[i].regDate);
          //   console.log('this.items[i].title', this.items[i].title);
          // }
          // then 단계에서 console.log를 찍었을 경우 맨 마지막값을 가져오지 못하는 문제를 발견. finally로 옮기니 정상적으로 모든데이터 가져옴
        });
    },
    movePage(page) {
      this.fetchData(page);
    },
  },
  created() {
    this.fetchData(this.pageNum);
    this.ResultData();
  },
  mounted() {},
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
