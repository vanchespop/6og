<template>
    <div @click="isOpen = !isOpen">
      <div class="dropdown arrow">
        {{ this.$store.state.Items.selectedDrop.title }}
      </div>
      <div v-if="isOpen" class="sub-menu" v-click-outside="closeDropdown">
        <div class="dropdown menu-item" v-for="(drop, i) in this.$store.state.Items.drops" :key="i" @click="selectDrop(drop)">{{ drop.title }}</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Dropdown",
  data () {
    return {
      isOpen: false,
    }
  },
  mounted: function() {
      this.selectDrop(this.$store.state.Items.drops[1]);
  },
  methods: {
    selectDrop(drop) {
        this.$store.commit("Items/selectDrop", drop)
    },
    closeDropdown() {
      this.isOpen = false;
    }
  }
}
</script>

<style>
  .dropdown {
    width: 110px;
    padding: 3px 25px 3px 15px;
    background: transparent;
    border : 2px solid #101010;
    color: #101010;
    font-weight: 500;
    cursor: pointer;
    user-select: none;
  }
  .arrow {
    background: url('../../public/mainpage/arrow.png') no-repeat right 10% bottom 45%;
    background-size: 12px;
  }
  .dropdown:hover {
    opacity: 0.6;
  }
  .sub-menu {
    position: absolute;
    background-color: #ffffff;
    z-index: 9999;
  }
  .menu-item  {
    margin-top: -2px;
    padding: 3px 20px;
  }
</style>