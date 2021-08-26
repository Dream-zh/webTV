<template>
  <div class="header">
    <!-- 标签 -->
    <div class="header-logoLink">
      <router-link class="header-logoLink-a" to="/">
        <!-- 标签文字显示 -->
        <ruby>
          <span class="header-logoLink-a-name">在线</span>
          <span class="header-logoLink-a-and">の</span>
          <span class="header-logoLink-a-blog">电视</span>
          <rt class="header-logoLink-a-chinese">network television</rt>
        </ruby>
      </router-link>
    </div>
    <!-- 菜单 -->
    <div class="header-nav">
      <router-link class="header-nav-a" to="/">主页</router-link>
      <router-link class="header-nav-a" to="/login">登陆</router-link>
    </div>
  </div>
</template>

<style lang="less">
.header {
  position: fixed;
  width: 100%;
  height: 75px;
  background-color: #fff;
  box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 50%);
  opacity: 0.2;
  transition: all 0.6s ease 0s;
  z-index: 1;
  &:hover{
    opacity: 1;
  }
  // 标签logo
  .header-logoLink {
    position: absolute;
    width: 140px;
    height: 75px;
    left: 2%;
    // flex布局
    display: flex;
    justify-content: space-around;
    align-items: center;
    .header-logoLink-a {
      width: 100%;
      font-size: 26px;
      font-family: "Times New Roman", Times, serif;
      color: #2c3e50;
      text-decoration: none;
      ruby-position: under;
      display: inline-block;
      // 文字样式
      ruby {
        position: absolute;
        width: 100%;
        top: 32%;
        // 前缀样式
        .header-logoLink-a-name {
          position: relative;
          float: left;
          transition: all 0.8s ease 0s;
        }
        // 的样式
        .header-logoLink-a-and {
          position: relative;
          display: inline-block; //为什么  块，行内
          left: 5px;
          top: -3px;
          font-size: 12px;
          transition: all 0.8s ease 0s;
        }
        // 后缀样式
        .header-logoLink-a-blog {
          position: relative;
          left: 10px;
          float: right;
          transition: all 0.8s ease 0s;
        }
        // 拼音
        .header-logoLink-a-chinese {
          position: relative;
          font-size: 14px;
          color: rgba(0, 0, 0, 0);
          transition: all 0.8s ease 0s;
        }
      }
      // 标签页hover效果
      &:hover {
        ruby {
          color: rgba(254, 215, 26, 1);
        }
        .header-logoLink-a-name {
          color: #fff;
          background-color: rgba(254, 215, 26, 1);
          border-radius: 8px;
        }
        // 的的旋转动画
        .header-logoLink-a-and {
          animation: span 4s linear infinite;
        }
        @keyframes span {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .header-logoLink-a-chinese {
          color: rgba(254, 215, 26, 1);
        }
      }
    }
  }
  // 导航栏
  .header-nav {
    position: absolute;
    width: 25%;
    height: 75px;
    left: 75%;
    // flex
    display: flex;
    justify-content: space-around;
    align-items: center;
    .header-nav-a {
      font-size: 19px;
      font-weight: 600;
      line-height: 50px;
      color: #666;
      text-transform: uppercase;
      text-decoration: none;
      &.router-link-exact-active {
        color: rgba(254, 215, 26, 1);
      }
    }
  }
}
</style>