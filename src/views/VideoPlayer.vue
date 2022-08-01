<template>
  <div>
    <video id="my-video" class="video-js" controls preload="auto" width="640" height="264" poster="../img/Test.png" data-setup="{}" ref="videoPlayer">
      <source src="../components/놀면뭐하니.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./VideoOptions.vue";

export default {
  name: "VideoPlayer",
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
      player: null,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log("onPlayerReady", this);
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
