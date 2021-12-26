<template>
  <div class="l-time-info-card">
    <h2>❤️</h2>
    <div class="time">{{ time }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, ref } from "vue";
import getTimeOfX from "@/utils/getTimeOfX";
import { AGREE_DATE } from "./dates";
export default defineComponent({
  setup() {
    const time = ref(getTime());
    function getTime(): string {
      return getTimeOfX(new Date(AGREE_DATE).getTime(), Date.now());
    }

    const timer = setInterval(() => {
      time.value = getTime();
    }, 1000);

    onBeforeUnmount(() => {
      clearInterval(timer);
    });
    return {
      time,
    };
  },
});
</script>

<style lang="less">
.l-time-info-card {
  margin-bottom: 12px;
}
</style>
