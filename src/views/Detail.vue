<template>
  <div class="main">
    <div class="left-section">
      <h2 class="title" v-html="this.$store.getters.getDetail.title" />
      <div class="detail-info">
        <span>发布于：{{ $moment(this.$store.getters.getDetail.create_at).format('YYYY-MM-DD') }}&nbsp;•&nbsp;</span>
        <span>作者：{{ this.$store.getters.getDetail.author.loginname }}&nbsp;•&nbsp;</span>
        <span>{{ this.$store.getters.getDetail.visit_count }} 次浏览&nbsp;•&nbsp;</span>
        <span>来自：{{ this.$store.getters.getDetail.tab }}</span>
      </div>
      <Divider class="divider" />
      <div class="content" v-html="this.$store.getters.getDetail.content" />
      <Reply />
    </div>
    <div class="right-section">
      <ProfilePanel :user="this.$store.getters.getDetailUser" :showAvatar="showAvatar" />
      <RecentTopic :user="this.$store.getters.getDetailUser" :showAvatar="showAvatar" />
      <RecentReply :user="this.$store.getters.getDetailUser" :showAvatar="showAvatar" />
    </div>
  </div>
</template>

<script>
import ProfilePanel from "@/components/ProfilePanel.vue";
import RecentTopic from "@/components/RecentTopic.vue";
import RecentReply from "@/components/RecentReply.vue";
import Divider from "@/components/Divider.vue";
import Reply from "@/components/Reply.vue";
import { getDetailById, getUserProfile } from "@/utils/api";

export default {
  components: {
    ProfilePanel,
    RecentTopic,
    RecentReply,
    Divider,
    Reply
  },
  props: ["user"],
  data() {
    return {
      showAvatar: true
    };
  },
  methods: {
    /**
     * 二次封装请求detail页面数据
     */
    getDetailData(id) {
      getDetailById(id)
        .then(res => {
          this.$store.dispatch("actionDetail", res.data);
        })
        .catch(err => {
          throw err;
        });
    },
    getUserData(loginname) {
      getUserProfile(loginname)
        .then(res => {
          this.$store.dispatch("actionDetailUser", res.data);
        })
        .catch(err => {
          throw err;
        });
    }
  },
  /**
   * created生命周期请求数据
   */
  created() {
    this.detail_id = this.$route.params.id;
    this.detail_loginname = this.$route.query.name;
    this.getDetailData(this.detail_id);
    this.getUserData(this.detail_loginname);
  },
  /**
   * 在当前路由改变，但是该组件被复用时调用
    对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。可以访问组件实例 `this`
   */
  beforeRouteUpdate(to, from, next) {
    this.detail_loginname = to.query.name;
    this.detail_id = to.params.id;
    next();
  }
};
</script>

<style lang="scss">
.main {
  .left-section {
    float: left;
    box-sizing: border-box;
    padding: 20px;
    width: 70%;
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.1);
    &:hover {
      box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);
    }
    .detail-info {
      margin-top: 4px;
      font-size: 14px;
      color: #838383;
    }
    .divider {
      margin: 7px 0;
    }
    .content {
      padding-left: 3px;
      word-break: break-all;
      word-wrap: break-word;
      line-height: 1.6;
      img {
        width: 100%;
      }
      ul {
        padding-left: 20px;
      }
    }
  }
  .right-section {
    float: right;
    width: 28%;
  }
}
</style>