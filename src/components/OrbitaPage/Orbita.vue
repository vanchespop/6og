<template>
  <main>
      <video loop autoplay controls muted playsinline ref="instruction">
        <source src="../../../public/orbita/instruction.mp4"/>
      </video>
  </main>
</template>

<script>
export default {
  name: "Orbita",
  mounted: function() {
    let vid = this.$refs.instruction;
    vid.muted = !vid.muted
  },
}
</script>

<style scoped>
main {
  height: 100vh;
  width: 100%;
  background-color: #000000;
}

video {
  height: 100%;
  width: 100%
}


</style>