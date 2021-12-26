<template>
  <div class="lp-l">
    <div class="info-card">
      <h2>相识</h2>
      <div class="time">{{ acquaintanceTime }}</div>
    </div>
    <l-time />
    <div class="info-card">
      <h2>相约</h2>
      <ul class="history">
        <li class="dating-item" v-for="item in datingArr" :key="item.startTime">
          <div class="dating-address">{{ item.address }}</div>
          <div class="dating-time">{{ item.datingTime }}</div>
          <div class="interval-time">距离上次：{{ item.intervalTime }}</div>
          <div class="left-time">{{ item.leftTime }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount, Ref } from "vue";
import getTimeOfX from "@/utils/getTimeOfX";
import LTime from "./l-time.vue";
import {
  ACQUAINTANCE_DATE,
  datingList,
  IDatingItem,
  TDatingList,
} from "./dates";

export default defineComponent({
  components: {
    LTime,
  },
  setup() {
    interface IDatingInfo {
      address: string;
      datingTime: string;
      intervalTime: string;
      leftTime: string;
    }
    type TDatingInfos = Array<IDatingInfo>;
    const acquaintanceTime = ref(getAcquaintanceTime());
    const datingArr: Ref<TDatingInfos> = ref([]);

    function getAcquaintanceTime(): string {
      return getTimeOfX(new Date(ACQUAINTANCE_DATE).getTime(), Date.now());
    }

    function renderDatingList() {
      const list = [...datingList].reverse();
      let preItem: IDatingItem;
      datingArr.value = [];
      list.forEach((item) => {
        let intervalTime = "";
        if (preItem) {
          intervalTime = getTimeOfX(preItem.endTime, item.startTime, true);
        }
        const leftTime = getTimeOfX(item);
        datingArr.value.unshift({
          address: item.address,
          datingTime: `${item.startTime} ~ ${item.endTime}`,
          intervalTime,
          leftTime,
        });
        preItem = item;
      });
    }

    renderDatingList();

    const timer = setInterval(() => {
      acquaintanceTime.value = getAcquaintanceTime();
      renderDatingList();
    }, 1000);

    onBeforeUnmount(() => {
      clearInterval(timer);
    });
    return {
      acquaintanceTime,
      datingArr,
    };
  },
});
</script>

<style lang="less">
.lp-l {
  .info-card {
    margin-bottom: 12px;
  }
}
</style>
