<template>
  <main>
      <video loop controls >
        <source src="../../../public/orbita/instruction.mp4"/>
      </video>
  </main>
</template>

<script>
export default {
  name: "Orbita"
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
}


</style>