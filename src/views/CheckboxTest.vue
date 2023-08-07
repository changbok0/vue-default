<template>
  <div>
    <label v-for="(item, index) in checkboxOptions" :key="index">
      <input type="checkbox" :value="item" v-model="checkedOptions" @click="handleCheckboxClick($event)" />
      {{ item }}
    </label>
    <button @click="resetCheckbox">초기화</button>
  </div>
</template>

<script>
import { ref, watch, reactive } from 'vue';

export default {
  setup() {
    const checkboxOptions = ['Option 1', 'Option 2', 'Option 3']; // 체크박스 옵션들
    const checkedOptions = ref([]); // 체크된 옵션들의 배열

    // checkedOptions 배열의 길이를 1로 제한하는 watch
    watch(checkedOptions, (newValue) => {
      if (newValue.length > 1) {
        checkedOptions.value = [newValue[newValue.length - 1]]; // 마지막에 추가된 값만 남기고 나머지는 제거
      }
    });

    // checkedOptions 배열의 길이를 1로 제한하는 함수
    const checkArrayLength = () => {
      if (checkedOptions.value.length > 1) {
        checkedOptions.value = [checkedOptions.value[checkedOptions.value.length - 1]];
      }
    };

    // 체크박스 클릭 이벤트 처리
    const handleCheckboxClick = (event) => {
      const checkedValue = event.target.value;
      if (checkedOptions.value.includes(checkedValue)) {
        checkedOptions.value = checkedOptions.value.filter((item) => item !== checkedValue);
      } else {
        checkedOptions.value.push(checkedValue);
      }
      checkArrayLength();
    };

    // 초기화 버튼 클릭 이벤트 처리
    const resetCheckbox = () => {
      checkedOptions.value = [];
    };

    return { checkboxOptions, checkedOptions, handleCheckboxClick, resetCheckbox };
  },
};
</script>
