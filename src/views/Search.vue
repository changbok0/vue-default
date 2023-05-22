<template>
  <div>
    <div>
      <select v-model="selectedCity">
        <option :value="city.code" :key="i" v-for="(city, i) in cityList">{{ city.name }}</option>
      </select>
      <input type="text" v-model="userName" @keyup.enter="searchUserList" />
      <button type="button" @click="searchUserList()">조회</button>
      <br />
      <input type="text" @keyup.enter="searchBoardList()" />
      <button type="button" @click="searchBoardList()">Board조회</button>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </div>
    <div>
      <table>
        <thead>
          <tr :key="i" v-for="(brList, i) in boardList">
            <th>{{ brList.boardNum }}</th>
            <th>{{ brList.title }}</th>
            <th>{{ brList.contents }}</th>
            <th>{{ brList.regDate }}</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(person, i) in userList">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: '',
  components: {},
  data() {
    return {
      cityList: [
        { name: '서울', code: '02' },
        { name: '부산', code: '21' },
        { name: '제주', code: '064' },
      ],
      selectedCity: '',
      userName: '',
      userList: '',
      boardList: [
        {
          boardNum: '',
          title: '',
          contents: '',
          regDate: '',
        },
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    searchUserList() {
      // const selectedCity = this.selectedCity;
      // const userName = this.userName;
      const params = {
        selectedCity: this.selectedCity,
        userName: this.userName,
      };

      this.userList = this.getUserList(params);
    },
    getUserList(params) {
      console.log(params);

      let list = [
        { name: '유재석', age: 50, job: '연예인' },
        { name: '하하', age: 40, job: '연예인' },
        { name: '양세찬', age: 37, job: '연예인' },
        { name: '김종국', age: 46, job: '연예인' },
      ];

      return list;
    },
    searchBoardList() {
      axios
        .get('http://localhost:8082/board/selectAll')
        .then((response) => {
          console.log('response.data', response.data);
          let res = response.data;
          // this.boardParam = []; // 빈 배열로 초기화
          for (let i = 0; i < res.length; i++) {
            const boardParam = {
              boardNum: res[i].boardSeq || 'default',
              title: res[i].title || 'default',
              contents: res[i].contents || 'default',
              regDate: res[i].regDate || 'default',
            };
            if (!this.boardList.some((item) => item.boardNum === boardParam.boardNum)) {
              this.boardList.push(boardParam);
            }
            // this.boardList.push(boardParam);
          }
        })
        .catch((error) => {
          alert('데이터가 존재하지 않습니다.');
          console.error(error);
        });
    },
  },
};
</script>
<style scoped></style>
