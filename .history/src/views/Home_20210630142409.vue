<template>
  <div>
    <carousel :list="list[0]"></carousel>
  </div>
</template>

<script>
import axios from "axios";
import Carousel from "../components/carousel/Carousel .vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      list: [],
    };
  },
  components: { Carousel },
  methods: {
    getData() {
      axios
        .get("api/goods/home")
        .then((res) => {
          // console.log(res);
          this.list = res.data.data;
          console.log(this.list);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>