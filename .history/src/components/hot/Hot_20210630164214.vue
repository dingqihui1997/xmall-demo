<template>
  <div>
    <div class="box marginauto">
      <div class="top flex-a">{{ list.name }}</div>
      <div class="bottom flex-ja">
        <div class="flex1 flex-d" v-for="(item, index) in arr" :key="index">
          <div class="flex-ja"><img :src="item.picUrl" alt="" /></div>
          <div class="flex-ja title">{{ item.productName }}</div>
          <div class="flex-ja pay">{{ item.subTitle }}</div>
          <div class="flex-ja money">
            {{ `￥` + item.salePrice.toFixed(2) }}
          </div>
          <div class="flex-ja">
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
          </div>
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
img {
  width: 206px;
  height: 206px;
}
.title {
  margin: 10px;
}
.pay {
  color: #d0d0d0;
  margin-bottom: 20px;
}
.money {
  color: #d44d44;
  font-weight: 700;
}
.el-button {
  width: 110px;
  height: 30px;
  text-align: center;
  &span {
    position: relative;
    top: -3px;
  }
}
</style>