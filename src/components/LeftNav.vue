<template>
  <div id="nav_box">
    <Sou />
    <NavCon />
  </div>
</template>

<script>
//搜索盒子
import Sou from "../components/LeftSou.vue";
//添加任务盒子
import NavCon from "../components/NavCon.vue";

export default {
  components: {
    Sou,
    NavCon,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#nav_box {
  width: 90%;
  height: 93%;
  margin: auto;
  margin-top: 30px;
}
</style>
