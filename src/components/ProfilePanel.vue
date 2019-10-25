<template>
  <div class="user-panel">
    <div class="user-info">
      <router-link :to="{path: '/user/'+user.loginname}">
        <el-avatar shape="square" :size="50" :src="user.avatar_url" />
      </router-link>
      <span class="name">{{ user.loginname }}</span>
    </div>
    <p>积分：{{ user.score }}</p>
    <p>
      GitHub：
      <a
        :href="'https://github.com/' + user.githubUsername"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >{{ user.githubUsername }}</a>
    </p>
    <p>注册时间：{{ $moment(user.create_at).format('YYYY 年 MM 月 DD 号') }}</p>
  </div>
</template>

<script>
export default {
  name: "ProfilePanel",
  props: ["user"]
};
</script>

<style lang="scss">
.user-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  }
  .name {
    position: absolute;
    top: 35px;
    left: 90px;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    a {
      text-decoration: none;
    }
  }
}
</style>