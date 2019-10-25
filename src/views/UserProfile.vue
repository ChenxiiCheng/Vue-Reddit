<template>
  <div class="user">
    <ProfilePanel :user="this.$store.getters.getUser" />
    <RecentTopic :user="this.$store.getters.getUser" />
    <RecentReply :user="this.$store.getters.getUser" />
  </div>
</template>

<script>
import ProfilePanel from "@/components/ProfilePanel.vue";
import RecentTopic from "@/components/RecentTopic.vue";
import RecentReply from "@/components/RecentReply.vue";
import { getUserProfile } from "@/utils/api";
export default {
  user: "User",
  components: {
    ProfilePanel,
    RecentTopic,
    RecentReply
  },
  // data() {
  //   return {
  //     user: this.$store.getters.getUser
  //   };
  // },

  methods: {
    /**
     * 二次封装请求
     * 获取用户数据存储到data中的user中
     */
    // getUserData(loginname) {
    //   getUserProfile(loginname).then(res => {
    //     this.user = res.data;
    //   });
    // }

    /**
     * Vuex存储
     */
    getUserData(loginname) {
      getUserProfile(loginname).then(res => {
        this.$store.dispatch("actionUser", res.data);
      });
    }
  },

  /**
   * create钩子中取出loginname,
   * 这个params.loginname是在router.js文件中
   * 写这个/user/:loginname命名的
   */
  created() {
    this.loginname = this.$route.params.loginname;
    if (!this.loginname) {
      return;
    }
    this.getUserData(this.loginname);
  },

  /**
   * wacth钩子监听props和data中的loginname是否变化
   * 若变化需要重新请求该新用户的数据
   */
  watch: {
    loginname(loginname) {
      if (!loginname) {
        return;
      }
      this.getUserData(loginname);
    }
  },

  /**
   * 在当前路由改变，但是该组件被复用时调用
    对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。可以访问组件实例 `this`
   */
  beforeRouteUpdate(to, from, next) {
    this.loginname = to.params.loginname;
    next();
  }
};
</script>

<style lang="scss">
.user {
  margin: auto;
  width: 70%;
}
</style>