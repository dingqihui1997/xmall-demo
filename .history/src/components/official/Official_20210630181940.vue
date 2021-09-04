<template>
  <!-- 官方精选 -->
  <div>
    <div class="box marginauto">
      <div class="top flex-a">官方精选</div>
      <div class="foot">
        <div
          v-for="(item, index) in arr"
          :key="index"
          :class="{ flex2: index === 0 }"
          class="quarter"
        >
          <img :src="item.picUrl" />
          <!-- <div v-if="index !== 0" class="quarter">{{ item.productName }}</div> -->
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
  height: 920px;
  background-color: aqua;
  margin-top: 30px;
}
.top {
  height: 60px;
  background: linear-gradient(#fbfbfb, #ececec);
  box-shadow: 0 1px 7px rgb(0 0 0 / 6%);
  padding-left: 25px;
}
.foot {
  height: 860px;
  display: flex;
  flex-wrap: wrap;
}
// .one {
//   width: ;
// }
.quarter {
  height: 430px;
  width: 304.5px;
  img {
    height: 206px;
    width: 206px;
  }
}
.flex2 {
  width: 608px;
  height: 430px;
  img {
    width: 608px;
    height: 430px;
  }
}
// .flex2 img {
//   height: 100%;
//   width: 100%;
// }
// .quarter {
//   height: 50%;
//   width: 25%;
// }
// .quarter img {
//   width: 206px;
//   height: 206px;
// }
</style>