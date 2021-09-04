<template>
  <!-- 活动板块一 -->
  <div>
    <div class="box marginauto flex">
      <div class="flex1 one" v-for="(item, index) in arr" :key="index">
        <img :src="item.picUrl" class="img100" />
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
    // console.log(this.list);
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
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 25px;
}
.box div {
  border: 1px #dbdbdb solid;
}
.one:hover {
  box-shadow: inset 13px 8px 1px 16px #555;
}
</style>