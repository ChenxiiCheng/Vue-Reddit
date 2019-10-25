<template>
  <div class="home">
    <el-tabs v-model="tab" @tab-click="handleClick">
      <el-tab-pane label="All" name="all">
        <Item :data="this.$store.getters.getList" />
      </el-tab-pane>
      <el-tab-pane label="Ask" name="ask">
        <Item :data="this.$store.getters.getList" />
      </el-tab-pane>
      <el-tab-pane label="Good" name="good">
        <Item :data="this.$store.getters.getList" />
      </el-tab-pane>
      <el-tab-pane label="Share" name="share">
        <Item :data="this.$store.getters.getList" />
      </el-tab-pane>
      <el-tab-pane label="Job" name="job">
        <Item :data="this.$store.getters.getList" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import { getItems } from "@/utils/api";

export default {
  name: "home",
  components: {
    Item
  },
  // data() {
  //   return {
  //     tab: "all",
  //     page: 1,
  //     limit: 20,
  //     list: [],
  //     store: {}
  //   };
  // },

  data() {
    return {
      tab: "all"
    };
  },
  // watch: {
  //   "$store.state.tab": function(val, oldVal) {
  //     if (val != oldVal) {
  //       this.tab = this.$store.getters.getTab;
  //     }
  //   }
  // },

  // watch: {
  //   "this.$store.state.tab"() {
  //     this.tab = this.$store.getters.getTab;
  //   },
  //   "this.$store.state.limit"() {
  //     this.limit = this.$store.getters.getLimit;
  //   },
  //   "this.$store.state.page"() {
  //     this.page = this.$store.getters.getPage;
  //   },
  //   "this.$store.state.list"() {
  //     this.list = this.$store.getters.getList;
  //   }
  // },
  methods: {
    /**
     * 封装请求数据,存储到data中
     */
    // getData() {
    //   getItems({
    //     page: this.page,
    //     limit: this.limit,
    //     tab: this.tab
    //   }).then(res => {
    //     this.list = res.data;
    //     this.limit = this.limit + 10;
    //     const store = this.store;
    //     store[this.tab] = {
    //       limit: this.limit,
    //       data: res.data
    //     };
    //   });
    // },

    /**
     * 使用Vuex store存放数据
     */
    getData() {
      getItems({
        page: this.$store.getters.getPage,
        limit: this.$store.getters.getLimit,
        tab: this.tab
      }).then(res => {
        // this.list = res.data;
        this.$store.dispatch("actionList", res.data);
        // this.limit = this.limit + 10;
        this.$store.dispatch("actionLimit");
        // this.$store.getters.store[this.tab] = {
        //   limit: this.limit,
        //   data: res.data
        // };
      });
    },

    /**
     * 当前tag变化时判断store里是否已经存了数据
     * 是：取出放data里
     * 否：重新请求数据
     */
    // handleClick() {
    //   const store = this.store;
    //   if (!store[this.tag]) {
    //     this.limit = 20;
    //     this.list = [];
    //     this.getData();
    //     return;
    //   }
    //   this.list = store[this.tag].data;
    //   this.limit = store[this.tag].limit;
    // },

    handleClick() {
      this.getData();
    },

    /**
     * 滚动函数，判断滚动条是否到达底部
     * 是：再发请求数据
     */
    scrollDown() {
      const sumH =
        document.body.scrollHeight || document.documentElement.scrollHeight;
      const viewH = document.documentElement.clientHeight;
      const scrollH =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (viewH + scrollH >= sumH - 150) {
        this.getData();
      }
    }
  },
  /**
   * create生命周期开始时刻发送请求
   */
  created() {
    this.getData();
    window.addEventListener("scroll", this.scrollDown);
  },
  /**
   * destroyed钩子：移除绑定的滚动事件
   */
  destroyed() {
    window.removeEventListener("scroll", this.scrollDown);
  }
};
</script>

<style lang="scss">
.home {
  margin: auto;
  width: 80%;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 13px 0 rgba(0, 0, 0, 0.1);
  .el-tabs__active-bar {
    background-color: #409eff;
  }
  .el-tabs__item.is-active {
    color: #409eff;
  }
}
</style>