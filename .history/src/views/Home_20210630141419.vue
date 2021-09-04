<template>
  <div>
    <carousel></carousel>
  </div>
</template>

<script>
import axios from "axios";
import Carousel from "../components/carousel/Carousel .vue";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: { Carousel },
  methods: {
    getData() {
      axios
        .get("/z/goods/home")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>