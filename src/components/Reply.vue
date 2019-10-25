<template>
  <div class="reply-section">
    <div class="line">
      <p>{{this.$store.getters.getDetail.reply_count}} 回复</p>
    </div>
    <div
      class="reply-info line"
      v-for="(item, index) in this.$store.getters.getDetail.replies"
      :key="item.id"
    >
      <router-link :to="{ path: '/user/'+item.author.loginname }">
        <div class="img" v-if="!showAvatar">
          <el-avatar shape="square" :size="40" :src="item.author.avatar_url" />
        </div>
      </router-link>
      <div class="detail">
        <span>{{index + 1}}楼</span>
        <span>{{item.author.loginname}}</span>
        <span>{{$moment(item.creare_at, 'YYYY-MM-DD').startOf('day').fromNow()}}</span>
        <span class="thumb">Stars: {{item.ups.length}}</span>
        <p v-html="item.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reply"
};
</script>

<style lang="scss">
.reply-section {
  margin-top: 18px;
  width: 100%;
  .line {
    display: flex;
    padding: 10px;
    border: 1px solid #ebedf0;
  }
  .detail {
    padding-left: 15px;
    line-height: 25px;
    font-size: 14px;
    color: #555;
    span {
      margin-right: 18px;
    }
    img {
      width: 100%;
    }
  }
  &:hover {
    -webkit-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-box-shadow: 0 0 2px #999;
    box-shadow: 0 0 2px #999;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }
}
</style>