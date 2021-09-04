<template>
  <!-- 官方精选 -->
  <div>
    <div class="box marginauto">
      <div class="top flex-a">官方精选</div>
      <div class="foot">
        <!-- 先设置所有的盒子宽高都一样 -->
        <!-- 第一张下标0时，就增加类名，宽高变大 -->
        <div
          v-for="(item, index) in arr"
          :key="index"
          :class="{ flex2: index === 0 }"
          class="quarter flex-dji"
        >
          <img :src="item.picUrl" />
          <!-- 其余的就添加div添加数据 -->
          <div v-if="index !== 0" class="title mat20">
            {{ item.productName }}
          </div>
          <div v-if="index !== 0" class="subTitle mat10">
            {{ item.subTitle }}
          </div>
          <div v-if="index !== 0" class="Price mat20">
            {{ `￥` + item.salePrice.toFixed(2) }}
          </div>
          <div><key></key></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Key from "../key/Key.vue";
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
  components: { Key },
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
  background-color: #fff;
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
  flex-wrap: wrap; //子元素换行排列
}
.quarter {
  height: 50%;
  width: 25%;
  img {
    height: 206px;
    width: 206px;
  }
}
.flex2 {
  width: 50%;
  height: 50%;
  img {
    width: 609px;
    height: 430px;
  }
}
.Price {
  color: #d44d44;
  font-weight: 700;
  height: 30px;
}
.subTitle {
  color: #d0d0d0;
}
</style>