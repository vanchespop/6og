<template>
  <main>
      <router-link to="/shop">
      <div class="hidden-link"></div>
      </router-link>
  </main>
</template>

<script>
export default {
  name: "Landing"
}
</script>

<style scoped>

main {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: auto;
  background: url("../../../public/landing/landingPC.gif") no-repeat fixed center center;
  background-size: cover;
}

.hidden-link {
  position: absolute;
  width: 300px;
  height: 200px;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
  cursor: pointer;
}

@media (max-width: 590px) {
  main {
    background: url("../../../public/landing/landingMD.gif") no-repeat fixed center center;
    background-size: cover;
  }

}
</style>