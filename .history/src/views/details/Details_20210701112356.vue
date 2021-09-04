<template>
  <!-- 详情页 -->
  <div>
    <commodity v-if="id" :id="id"></commodity>
  </div>
</template>

<script>
import Commodity from "../../components/commodity/Commodity.vue";
export default {
  name: "",
  props: {},
  data() {
    return {
      id: 0,
    };
  },
  components: { Commodity },
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    // console.log(this.id);
  },

  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
</style>