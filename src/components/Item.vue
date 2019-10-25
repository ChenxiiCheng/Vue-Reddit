<template>
  <div>
    <div class="section" v-for="item in data" :key="item.id">
      <router-link :to="{ path: '/user/' + item.author.loginname }">
        <el-avatar shape="square" :size="50" :src="item.author.avatar_url" />
      </router-link>
      <span class="count">
        <em>{{ item.reply_count }}</em> /
        <em>{{ item.visit_count }}</em>
      </span>
      <el-tag
        :type="$tab[item.tab] && $tab[item.tab].type || ''"
        size="medium"
      >{{ $tab[item.tab] && $tab[item.tab].name || 'all' }}</el-tag>
      <router-link
        :to="{ path:'/detail/'+item.id, query:{name:item.author.loginname}}"
        class="title"
      >{{ item.title }}</router-link>
      <span class="time">{{ $moment(item.last_reply_at).format("MM/DD/YYYY") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["data"]
};
</script>

<style lang="scss">
.section {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  &:hover {
    // width: 810px;
    // height: 60px;
    -webkit-transform: translateY(-2px);
    -ms-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-box-shadow: 0 0 2px #999;
    box-shadow: 0 0 2px #999;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }
  span.count {
    width: 90px;
    text-align: center;
    em:first-child {
      font-size: 1.1em;
      color: #ff6768;
    }
    em:last-child {
      font-size: 0.9em;
      color: grey;
    }
  }
  .title {
    width: 55%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    white-space: nowrap;
    font-size: 15px;
    color: #d527b7;
    &:hover {
      color: greenyellow;
    }
  }
  span.time {
    width: 100px;
    text-align: right;
    text-overflow: ellipsis;
    color: #777;
  }
}
</style>