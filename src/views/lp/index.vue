<template>
  <div class="lp-menu-page">
    <ShowL />
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
    <div class="class-schedule-box">
      <ClassSchedule />
    </div>
  </div>
</template>

<script lang="ts">
import ShowL from "./l/l-time.vue";
import ClassSchedule from "./class-schedule/index.vue";
interface IFMenuType {
  label: string;
  path?: string;
  href?: string;
}
interface IFDataType {
  menus: Array<IFMenuType>;
}

export default {
  components: {
    ShowL,
    ClassSchedule,
  },
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
          href: "https://codepen.io/caiyansong/full/wvgbbed",
          label: "本地记事本（老）",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.lp-menu-page {
  .class-schedule-box {
    padding: 8px;
    border: 1px solid #eee;
  }
}
</style>
