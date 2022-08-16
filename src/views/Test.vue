<template>
  <div>
    <video v-for="preson in sources" :key="preson" id="my-video" class="video-js" controls preload="auto" width="640" height="264" poster="../img/Test.png" data-setup="{}" ref="videoPlayer">
      <source :src="preson.src" :type="preson.type" />
    </video>
    <!-- <video id="my-video" class="video-js" controls preload="auto" width="640" height="264" poster="../img/Test.png" data-setup="{}" ref="videoPlayer">
      <source src="https://www.youtube.com/watch?v=CIuz0hr7huk" type="video/youtube" />
    </video> -->
  </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './VideoOptions.vue';
import '../js/Youtube.min.js';

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      sources: [
        {
          src: 'https://www.youtube.com/watch?v=CIuz0hr7huk',
          type: 'video/youtube',
        },
        {
          src: 'https://www.youtube.com/watch?v=BuceV8O-Nho',
          type: 'video/youtube',
        },
      ],
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
<style scoped></style>
