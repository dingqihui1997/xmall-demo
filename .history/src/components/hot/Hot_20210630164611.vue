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
            <button>默认按钮</button>
            <button class="two">主要按钮</button>
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
button {
  width: 110px;
  height: 30px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
}
.two {
  border: 1px solid #5c81e3;
  color: #fff;
  background-color: #678ee7;
}
</style>