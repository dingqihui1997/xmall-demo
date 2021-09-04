<template>
  <!-- 热门商品 -->
  <div>
    <div class="box marginauto">
      <div class="Category flex-a">{{ list.name }}</div>
      <div class="bottom flex-ja">
        <div
          class="flex1 flex-d but hei100 item"
          v-for="(item, index) in arr"
          :key="index"
          @click="see(item)"
        >
          <div class="flex-ja"><img :src="item.picUrl" alt="" /></div>
          <div class="flex-ja title">{{ item.productName }}</div>
          <div class="flex-ja pay">{{ item.subTitle }}</div>
          <div>
            <div class="flex-ja money">
              {{ `￥` + item.salePrice.toFixed(2) }}
            </div>
            <!-- 按钮，hover时出现 -->
            <div class="flex-ja text">
              <button class="one" @click.stop="see(item)">查看详情</button>
              <button class="two">加入购物车</button>
            </div>
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
      required: true, //必传项
    },
  },
  data() {
    return {
      arr: null,
    };
  },
  components: {},
  methods: {
    see(item) {
      console.log(item.productId);
      this.$router.push({
        name: "Details",
        query: {
          id: item.productId,
        },
      });
    },
  },
  mounted() {
    // console.log(this.list);
    this.arr = this.list.panelContents;
    // console.log(this.arr);
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 1220px;
  height: 490px;
  border-radius: 8px;
  overflow: hidden;
}
.bottom {
  height: 430px;
  background: #fff;
  overflow: hidden;
}
.but {
  padding-top: 50px;
}
.but:hover {
  .money {
    display: none;
  }
  .text {
    display: block;
  }
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
  height: 30px;
}
button {
  width: 98px;
  height: 30px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.one {
  border: 1px solid #e1e1e1;
  color: #646464;
  background-color: #f9f9f9;
  margin-right: 10px;
}
.two {
  border: 1px solid #5c81e3;
  color: #fff;
  background-color: #678ee7;
}
.text {
  display: none;
  width: 100%;
  text-align: center;
  height: 30px;
}
</style>