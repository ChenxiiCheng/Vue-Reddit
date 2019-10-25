<template>
  <div class="header">
    <div class="info">
      <a href="/">
        <img src="../assets/image/logo1.png" alt="website logo" />
      </a>
      <span @click="dialogVisible = true"><strong>ABOUT</strong></span>
    </div>
    <el-dialog title="About Me" :visible.sync="dialogVisible" width="30%">
      <div class="inside-info">
        <p>
          Author：
          <a href="https://www.linkedin.com/in/chenxi-cheng-42a564159/">Chenxi Cheng</a>
        </p>
        <p>
          GitHub：
          <a href="https://github.com/ChenxiiCheng">ChenxiiCheng</a>
        </p>
        <div>
          <p>
            Technology Stack：
            <ul>
              <li>Vue：2.6.10</li>
              <li>Vuex：3.1.1</li>
              <li>Axios：0.19.0</li>
              <li>Vue-router：3.0.3</li>
              <li>Element UI：2.4.5</li>
            </ul>
          </p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">OK</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    }
  };
</script>

<style lang="scss">
  .header {
    height: 50px;
    width: 100%;
    box-shadow: 0 1px 1px rgba(1,1,1,.1);
    // box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    // background: #444;
    .info {
      margin: 0 auto;
      width: 1000px;
      overflow: hidden;
      a {
        display: block;
        float: left;
        height: 50px;
        width: 120px;
        img {
          // margin-top: 8px;
          width: 60px;
          height: 50px;
        }
      }
      span {
        float: right;
        height: 50px;
        line-height: 50px;
        color: black;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }
    }
    .el-dialog__body {
      padding: 5px 20px 0px 20px;
      p {
        margin: 6px;
        a {
          text-decoration:none;
        }
        ul {
          padding-left: 20px;
          padding-top: 5px;
          li {
            margin-top: 5px;
          }
        }
      }
    }
    .el-dialog__footer {
      padding: 0 20px 15px 20px;
    }
  }
</style>