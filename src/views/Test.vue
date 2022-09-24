<template>
  <div class="videoBox">
    <video target="_blank" id="videoID" class="video-js videoOption vjs-big-play-centered vjs-fluid" controls preload="auto" Muted="true" data-setup="{}" ref="videoPlayer">
      <source :src="sources.src" :type="sources.type" />
    </video>
  </div>
  <!-- for="(a, i) in sources" :key="a" -->
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../js/Youtube.min.js';
import { refs } from 'vue';
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
      sources:
        // {
        //   src: require('../복면가왕.E352.mp4'),
        //   type: 'video/mp4',
        // },
        // {
        //   src: 'https://youtu.be/bw9HrnBQV38',
        //   type: 'video/youtube',
        // },
        {
          src: 'https://www.youtube.com/watch?v=oqsLGAqMDUQ',
          type: 'video/youtube',
        },
      // {
      //   src: 'https://www.youtube.com/watch?v=Bzjj7DySNkk&t=533s',
      //   type: 'video/youtube',
      // },
      // {
      //   src: 'https://www.youtube.com/watch?v=qhL6BYHeh3I&t=452s',
      //   type: 'video/youtube',
      // },
      // {
      //   src: 'https://www.youtube.com/watch?v=qhL6BYHeh3I&t=452s',
      //   type: 'video/youtube',
      // },
      // {
      //   src: 'https://www.youtube.com/watch?v=TiYbgso2pOc',
      //   type: 'video/youtube',
      // },
      // {
      //   src: 'https://www.youtube.com/watch?v=N_DQkrMYMcE',
      //   type: 'video/youtube',
      // },
      // {
      //   src: 'https://www.youtube.com/watch?v=XqE8re3CsGU',
      //   type: 'video/youtube',
      // },
      // {
      //   src: 'https://www.youtube.com/watch?v=a-HIE0U9YQs',
      //   type: 'video/youtube',
      // },
      // {
      //   src: 'https://www.youtube.com/watch?v=YfSJzQJBqkc',
      //   type: 'video/youtube',
      // },

      player: null,
      foo: null,
    };
  },
  mounted() {
    this.player = videojs('videoID', this.options, () => {
      this.player.log('onPlayerReady', this);
    });
  },
};
</script>
<style scoped>
.videoBox {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.videoOption {
}
</style>
