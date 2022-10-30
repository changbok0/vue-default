<template>
  <div class="videoBoxTest1">
    <button id="btn-play" @click="playergo">videoPage로 이동</button>
    <!-- <button id="btn-play">videoPage로 이동</button> -->
    <!-- <div class="videoBox" @click="click">
    <video id="videoID" class="video-js videoOption vjs-big-play-centered vjs-fluid" data-setup="{}" ref="videoPlayer">
      <source :src="sources.src" :type="sources.type" />
    </video>
    <button id="btn-play" @click="playergo">재생하기</button>
  </div> -->
    <!-- for="(a, i) in sources" :key="a" -->
  </div>
  <button @click="back" id="backBtn">뒤로 이동</button>
  <div>
    <h1>data1 : {{ data1 }}</h1>
    <h1>data2 : {{ data2 }}</h1>
    <h1>data3 : {{ data3 }}</h1>
    <h1>data4 : {{ data4 }}</h1>
    <h1>data5 : {{ data5 }}</h1>
    <h1>data6 : {{ data6 }}</h1>
    <h1>data7 : {{ data7 }}</h1>
    <h1>data8 : {{ data8 }}</h1>
    <h1>data9 : {{ data9 }}</h1>
    <h1>data10 : {{ data10 }}</h1>
    <h1>data11 : {{ data11 }}</h1>
  </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../js/Youtube.min.js';
import { onMounted, onActivated, onDeactivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onUpdated, onUnmounted, onScopeDispose, onRenderTracked, onRenderTriggered, reactive, toRefs } from 'vue';
import router from '@/router/index.js';
export default {
  name: 'VideoPlayer',

  setup() {
    const state = reactive({
      data1: '',
      data2: '',
      data3: '',
      data4: '',
      data5: '',
      data6: '',
      data7: '',
      data8: '',
      data9: '',
      data10: '',
      data11: '',
    });
    // let options = {
    //   type: Object,
    //   default: () => {},
    //   required: true,
    //   controls: 'true',
    //   preload: 'auto',
    //   Muted: 'true',
    //   playbackRates: [0.5, 0.75, 1, 1.25, 1.5],
    //   controlBar: {
    //     playToggle: true,
    //     pictureInPictureToggle: true,
    //     remainingTimeDisplay: true,
    //     progressControl: true,
    //     qualitySelector: true,
    //   },
    // };

    // let sources = {
    //   src: 'https://www.youtube.com/watch?v=oqsLGAqMDUQ',
    //   type: 'video/youtube',
    // };
    // let player = null;

    const playergo = () => {
      router.push({
        name: 'test2',
        query: {
          src: 'https://www.youtube.com/watch?v=oqsLGAqMDUQ',
          type: 'video/youtube',
        },
      });
    };

    const back = () => {
      router.back();
      console.log('backbtn');
    };

    onMounted(() => {
      // player = videojs('videoID', options, () => {
      //   player.log('onPlayerReady', player);
      // });
      state.data1 = '1';
      console.log('onMonuted');
      console.log('1');
    });
    onUnmounted(() => {
      state.data1 = '2';
      state.data2 = '2';
      console.log('onUnmounted');
      console.log('2');
    });
    onBeforeMount(() => {
      state.data3 = '3';
      console.log('onBeforeMount');
      console.log('3');
    });
    onBeforeUnmount(() => {
      state.data4 = '4';
      console.log('onBeforeUnmount');
      console.log('4');
    });
    onActivated(() => {
      state.data5 = '5';
      console.log('onActivated');
      console.log('5');
    });
    onDeactivated(() => {
      state.data6 = '6';
      console.log('onDeactivated');
      console.log('6');
    });
    onUpdated(() => {
      state.data7 = '7';
      console.log('onUpdated');
      console.log('7');
    });
    onBeforeUpdate(() => {
      state.data8 = '8';
      console.log('onBeforeUpdate');
      console.log('8');
    });
    onScopeDispose(() => {
      state.data9 = '9';
      console.log('onScopeDispose');
      console.log('9');
    });
    // onRenderTracked(() => {
    //   state.data10 = '10';
    //   console.log('onRenderTracked');
    //   console.log('10');
    // });
    onRenderTriggered(() => {
      state.data11 = '11';
      console.log('onRenderTriggered');
      console.log('11');
    });

    return {
      ...toRefs(state),
      back,
      playergo,
    };
  },
};
</script>
<style scoped>
.videoBoxTest1 {
  width: 50%;
  height: 50%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.videoOption {
}
</style>
