<template>
  <div>
    <div class="recent-topic">
      <p>最近回复的话题</p>
      <Divider class="divider" />
      <template v-for="item in user.recent_replies">
        <div :key="item.id">
          <div class="item-section" :key="item.id">
            <router-link :to="{ path:'/user/'+item.author.loginname }" target="_self">
              <div class="img" v-if="!showAvatar">
                <el-avatar shape="square" :size="40" :src="item.author.avatar_url" />
              </div>
            </router-link>
            <!-- <span class="title">{{ item.title }}</span> -->
            <router-link
              :to="{ path:'/detail/'+item.id, query:{name:item.author.loginname}}"
              class="title"
            >
              <span>{{ item.title }}</span>
            </router-link>
            <span class="time">{{ $moment(item.last_reply_at).format('YYYY-MM-DD') }}</span>
          </div>
          <Divider class="divider" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Divider from "@/components/Divider.vue";
export default {
  name: "RecentReply",
  components: {
    Divider
  },
  props: ["user", "showAvatar"]
};
</script>

<style lang="scss" scoped>
.recent-topic {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 20px;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  }
  .divider {
    margin: 14px 0;
  }
  .item-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img {
      padding-left: 4px;
    }
    .title {
      width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;
      white-space: nowrap;
      font-size: 15px;
      color: #d527b7;
      cursor: pointer;
      &:hover {
        color: greenyellow;
      }
    }
    .time {
      width: 100px;
      text-align: right;
      text-overflow: ellipsis;
      color: #777;
    }
  }
}
</style>