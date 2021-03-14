<template>
  <div>
    <div class="topAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Kimi-UI</h1>
        <h2>一套高质量的UI组件库</h2>
        <p class="actions">
          <a href="https://www.baidu.com" target="_blank">设计语言</a>
          <router-link to="/doc">开始使用</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
$green: #02bcb0;
.topAndBanner {
  color: #0d615d;
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
  .banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .actions {
      padding: 8px 0;
      a {
        margin: 0 8px;
        display: inline-block;
        color: #fff;
        $h: 28px;
        border-radius: $h;
        padding: 8px 20px;
        letter-spacing: 1px;

        &:nth-child(1) {
          background: transparent;
          color: $green;
          border: 1px solid $green;
          &:hover,
          &:focus {
            color: #58c3b9;
            transition: color 250ms;
          }
        }
        &:nth-child(2) {
          background: $green;
          &:hover,
          &:focus {
            background-color: lighten($green, 2%);
            transition: background-color 250ms;
          }
        }
      }
    }
  }
}
.features {
  margin: 64px auto;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>