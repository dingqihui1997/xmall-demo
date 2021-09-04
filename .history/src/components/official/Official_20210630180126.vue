<template>
  <!-- 官方精选 -->
  <div>
    <div class="box marginauto">
      <div class="top flex-a">官方精选</div>
      <div class="foot">
        <div v-for="(item, index) in arr" :key="index">
          <div :class="{ flex2: index === 0 }">
            <img :src="item.picUrl" alt="" class="img100" />
          </div>
          <div v-if="index !== 0" :class="{ quarter: index !== 0 }">
            <div v-if="index !== 0">
              <img :src="item.picUrl" alt="" class="img100" />
            </div>
            <div v-if="index !== 0">{{ item.productName }}</div>
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
.one {
  width: ;
}
.flex2 {
  height: 50%;
  width: 50%;
}
.quarter {
  height: 50%;
  width: 25%;
}
</style>