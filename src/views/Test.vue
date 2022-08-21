<template>
  <div>
    <video target="_blank" v-for="(a, i) in sources" :key="a" :id="videoID[i]" class="video-js" controls preload="auto" width="640" height="264" poster="../img/Test.png" data-setup="{}" ref="videoPlayer">
      <source :src="sources[i].src" :type="sources[i].type" />
    </video>
  </div>
  <!-- for="(a, i) in sources" :key="a" -->
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

  setup() {},
  data() {
    return {
      videoID: 'my_video',
      sources: [
        // {
        //   src: require('../복면가왕.E352.mp4'),
        //   type: 'video/mp4',
        // },
        {
          src: 'https://youtu.be/bw9HrnBQV38',
          type: 'video/youtube',
        },
        {
          src: 'https://www.youtube.com/watch?v=BuceV8O-Nho',
          type: 'video/youtube',
        },
      ],
      player: null,
      foo: null,
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
