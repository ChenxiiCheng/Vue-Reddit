<template>
  <div>
    <div class="recent-topic">
      <p>最近创建的话题</p>
      <Divider class="divider" />
      <template v-for="item in user.recent_topics">
        <div :key="item.id">
          <div v-if="item.title">
            <div class="item-section">
              <router-link :to="{ path: '/user/'+item.author.loginname }">
                <div class="img" v-if="!showAvatar">
                  <el-avatar shape="square" :size="40" :src="item.author.avatar_url" />
                </div>
              </router-link>
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
          <div v-else>No Data</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Divider from "@/components/Divider.vue";
export default {
  name: "RecentTopic",
  components: {
    Divider
  },
  props: ["user", "showAvatar"]
};
</script>

<style lang="scss">
.recent-topic {
  display: flex;
  flex-direction: column;
  margin: 30px auto;
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