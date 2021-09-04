<template>
  <div>
    <div class="box marginauto flex">
      <div class="flex1" v-for="(item, index) in arr" :key="index">
        <img :src="item.picUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      arr: null,
    };
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.list);
    this.arr = this.list.panelContents;
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 1220px;
  height: 200px;
  background-color: aqua;
}
</style>