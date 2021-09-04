<template>
  <!-- 详情页第一板块 -->
  <div class="box flex-a">
    <div class="left flex-d">
      <div
        v-for="(item, index) in list.productImageSmall"
        :key="index"
        class="imgsmall flex-ja"
      >
        <img :src="item" class="flex-ja" />
      </div>
    </div>
    <div class="center1">
      <img :src="list.productImageBig" class="img100" />
    </div>
    <!-- 右边板块 -->
    <div class="right">
      <div class="Name">{{ list.productName }}</div>
      <div class="flex-sb">
        <div class="subTitle">{{ list.subTitle }}</div>
        <div class="num">{{ `￥` + Number(list.salePrice).toFixed(2) }}</div>
      </div>
      <div class="quantity flex">
        <div>数量</div>
        <div class="Symbol jian">-</div>
        <div>1</div>
        <div class="Symbol">+</div>
      </div>
      <div class="but">
        <button>加入购物车</button>
        <button>现在购买</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      list: {},
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get(`/api/goods/detail?productId=${this.id}`)
        .then((res) => {
          //   console.log(res);
          this.list = res.data.data.result;
          console.log(this.list);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
  mounted() {
    // console.log(this.id);
    this.getData();
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.box {
  width: 1220px;
  height: 560px;
  background: palegreen;
  margin: 20px auto;
  padding: 60px;
}
.left {
  width: 80px;
  height: 440px;
}
.center1 {
  width: 440px;
  height: 440px;
}
.right {
  width: 450px;
  height: 440px;
  padding-left: 10px;
  .Name {
    font-size: 24px;
    margin-bottom: 15px;
  }
  .subTitle {
    color: #bdbdbd;
    font-size: 14px;
  }
  .num {
    color: #d44d44;
    font-size: 24px;
    font-weight: 700;
  }
  .quantity {
    margin-top: 10px;
    padding: 29px 0 8px 10px;
    border-top: 1px solid #ebebeb;
  }
  .but {
    border-top: 1px solid #ebebeb;
    padding: 30px 0 0 10px;
  }
}
button {
  width: 145px;
  height: 50px;
  line-height: 48px;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  outline: none;
}
.imgsmall {
  width: 80px;
  height: 80px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  img {
    width: 54px;
    height: 54px;
  }
}
.Symbol {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  font-size: 28px;
  text-align: center;
  line-height: 30px;
  box-shadow: 0 0 5px #999;
  margin-left: 20px;
  margin-right: 20px;
}
</style>