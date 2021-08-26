<template>
<!-- 视频播放主要界面 -->
  <div class="home">
    <ms-video msg="@/components/Video.vue"></ms-video>
  </div>
</template>

<script>
// @ is an alias to /src
import Video from '@/components/Video.vue'

export default {
  name: 'Home',
  components: {
    msVideo: Video,
  }
}
</script>

<style scoped>

</style>
