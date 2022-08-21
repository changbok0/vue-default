<template>
  <!-- <div>
    <VideoPlayer v-for="i in videoOptions" :key="i" :options="videoOptions" />
  </div>
  <p>{{ sources[0] }}</p> -->

  <div>
    <video ref="videoPlayer" class="video-js" :options="videoOptions" data-setup="{}">
      <source :src="sources.src" :type="sources.type" />
    </video>
  </div>
</template>

<script>
import VideoPlayer from '../components/VideoPlayer.vue';
import '../js/Youtube.min.js';

export default {
  name: 'VideoExample',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    VideoPlayer,
  },
  setup() {
    console.log(sources);
  },
  data() {
    return {
      sources: [
        {
          src: 'https://youtu.be/bw9HrnBQV38',
          type: 'video/youtube',
        },
        // {
        //   src: 'https://youtu.be/hcL3FRD7q4k',
        //   type: 'video/youtube',
        // },
        // {
        //   src: 'https://youtu.be/m3Mc-Z67Umo',
        //   type: 'video/youtube',
        // },
      ],
      videoOptions: {
        autoplay: false,
        controls: true,
        // width: 600,
        // height: 400,
      },
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log('onPlayerReady', this);
    });
  },
  // beforeDestroy() {
  //   if (this.player) {
  //     this.player.dispose();
  //   }
  // },
};
</script>
