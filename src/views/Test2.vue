<template>
  <div class="videoBox" @click="click">
    <video id="videoID" class="video-js videoOption vjs-big-play-centered vjs-fluid" data-setup="{}" ref="videoPlayer">
      <source :src="$route.query.src" :type="$route.query.type" />
    </video>
  </div>
  <button @click="back" id="backBtn">뒤로 이동</button>
  {{ $route.query }}
  <!-- for="(a, i) in sources" :key="a" -->
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../js/Youtube.min.js';
import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue';
import router from '@/router/index.js';

export default {
  name: 'VideoPlayer',

  setup() {
    const state = reactive({});

    let options = {
      type: Object,
      default: () => {},
      required: true,
      controls: 'true',
      preload: 'auto',
      Muted: 'true',
      playbackRates: [0.5, 0.75, 1, 1.25, 1.5],
      controlBar: {
        playToggle: true,
        pictureInPictureToggle: true,
        remainingTimeDisplay: true,
        progressControl: true,
        qualitySelector: true,
      },
    };

    // let sources = {
    //   src: 'https://www.youtube.com/watch?v=oqsLGAqMDUQ',
    //   type: 'video/youtube',
    // };

    // let sources = {
    //   src: $route.query.src,
    //   type: $route.query.type,
    // };

    let VideoJSplayer = null;

    const back = () => {
      router.back();
      console.log('backbtn');
    };

    onMounted(() => {
      console.log('>>>>>>>>>> onMounted <<<<<<<<<<');

      console.log('VideoJSplayer===' + VideoJSplayer);

      VideoJSplayer = videojs('videoID', options, () => {
        VideoJSplayer.log('onPlayerReady', VideoJSplayer);
      });
    });
    onUnmounted(() => {
      console.log('>>>>>>>>>> onUnmounted <<<<<<<<<<');
      VideoJSplayer.dispose();
    });

    return {
      ...toRefs(state),
      back,
    };
  },
};
</script>
<style scoped>
/* .videoBox {
  width: 50%;
  height: 50%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
} */

.videoOption {
}
</style>
