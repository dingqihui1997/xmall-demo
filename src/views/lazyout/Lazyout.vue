<template>
  <div>
    <heads></heads>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Heads from "../../components/heads/Heads.vue";
import Navigation from "../../components/navigation/Navigation.vue";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: { Heads, Navigation },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>