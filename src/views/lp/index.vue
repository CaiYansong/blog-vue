<template>
  <div class="lp-menu-page">
    <ul>
      <li v-for="menu in menus" :key="menu.path">
        <h3>
          <router-link v-if="menu.path" :to="`/lp${menu.path}`">
            {{ menu.label }}
          </router-link>
          <a v-if="menu.href" target="_blank" :href="menu.href">
            {{ menu.label }}
          </a>
        </h3>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
interface IFMenuType {
  label: string;
  path?: string;
  href?: string;
}
interface IFDataType {
  menus: Array<IFMenuType>;
}

export default {
  data(): IFDataType {
    return {
      menus: [
        {
          path: "/l",
          label: "相识",
        },
        {
          path: "/class-schedule",
          label: "课表",
        },
        {
          path: "/local-note",
          label: "本地记事本",
        },
        {
          href: "https://codepen.io/caiyansong/full/wvgbbed",
          label: "本地记事本（老）",
        },
        {
          path: "/memory-tool",
          label: "记忆辅助工具",
        },
      ],
    };
  },
};
</script>

<style lang="less"></style>
