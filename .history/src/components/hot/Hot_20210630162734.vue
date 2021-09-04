<template>
  <div>
    <div class="box marginauto">
      <div class="top flex-a">{{ list.name }}</div>
      <div class="bottom flex-ja">
        <div class="flex1 flex-d" v-for="(item, index) in arr" :key="index">
          <div><img :src="item.picUrl" alt="" /></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
    console.log(this.arr);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 1220px;
  height: 490px;
  background: aqua;
  border-radius: 8px 8px 0 0;
}
.top {
  height: 60px;
  background: linear-gradient(#fbfbfb, #ececec);
  box-shadow: 0 1px 7px rgb(0 0 0 / 6%);
  padding-left: 25px;
}
.bottom {
  height: 430px;
}
</style>