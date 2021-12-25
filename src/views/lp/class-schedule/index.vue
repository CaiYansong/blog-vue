<template>
  <div class="lp-class-schedule">
    <h3 class="datetime">{{ currentDatetime }}</h3>
    <h3 class="current-week">
      <template v-if="currentWeek > 0">目前是第 {{ currentWeek }} 周</template>
      <template v-else>未开学</template>
    </h3>
    <h4 class="title">{{ title }}</h4>
    <div class="today">
      <div class="card-title">当天课表</div>
      <el-table class="timetable" border :data="todayTable">
        <el-table-column prop="label" width="100" />
        <el-table-column prop="time" width="100" />
        <el-table-column prop="course" :label="todayWeekday">
          <template #default="{ row }">
            <div v-html="row.course" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="tomorrow">
      <div class="card-title">明天课表</div>
      <el-table class="timetable" border :data="tomorrowTable">
        <el-table-column prop="label" width="100" />
        <el-table-column prop="time" width="100" />
        <el-table-column prop="course" :label="tomorrowWeekday">
          <template #default="{ row }">
            <div v-html="row.course" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button @click="onViewAll">
      <template v-if="showAll">点击关闭完整课表</template>
      <template v-else>点击查看完整课表</template>
    </el-button>
    <div class="all" v-if="showAll">
      <div class="card-title">完整课表</div>
      <el-table class="timetable" border :data="allTable">
        <el-table-column prop="label" width="100" />
        <el-table-column prop="time" width="100" />
        <el-table-column prop="Monday" label="星期一">
          <template #default="{ row }">
            <div v-html="row.Monday" />
          </template>
        </el-table-column>
        <el-table-column prop="Tuesday" label="星期二">
          <template #default="{ row }">
            <div v-html="row.Tuesday" />
          </template>
        </el-table-column>
        <el-table-column prop="Wednesday" label="星期三">
          <template #default="{ row }">
            <div v-html="row.Wednesday" />
          </template>
        </el-table-column>
        <el-table-column prop="Thursday" label="星期四">
          <template #default="{ row }">
            <div v-html="row.Thursday" />
          </template>
        </el-table-column>
        <el-table-column prop="Friday" label="星期五">
          <template #default="{ row }">
            <div v-html="row.Friday" />
          </template>
        </el-table-column>
        <el-table-column prop="Saturday" label="星期六">
          <template #default="{ row }">
            <div v-html="row.Saturday" />
          </template>
        </el-table-column>
        <el-table-column prop="Sunday" label="星期日">
          <template #default="{ row }">
            <div v-html="row.Sunday" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount, Ref } from "vue";
import dayjs from "dayjs";
import getWeeks from "@/utils/getWeeks";
import {
  getDayTimetable,
  getAllTimetable,
  TDayTimetable,
  TAllTimetable,
} from "./util";

export default defineComponent({
  data() {
    return {
      title: "集美大学2021-2022学年第一学期 侯丽平 个人课表",
      today: [],
      tomorrow: [],
      all: [],
    };
  },
  setup() {
    const startDate = new Date("2021/9/6");
    const currentWeek = getWeeks(startDate);
    const showAll = ref(false);
    const currentDatetime = ref(dayjs().format("YYYY-MM-DD dddd HH:mm:ss"));
    const todayWeekday = ref();
    const todayTable: Ref<TDayTimetable> = ref([]);
    const tomorrowWeekday = ref();
    const tomorrowTable: Ref<TDayTimetable> = ref([]);
    const allTable: Ref<TAllTimetable> = ref([]);

    todayWeekday.value = dayjs().format("dddd");
    tomorrowWeekday.value = dayjs().add(1, "day").format("dddd");

    function onViewAll() {
      showAll.value = !showAll.value;
    }
    let timer = setInterval(() => {
      currentDatetime.value = dayjs().format("YYYY-MM-DD dddd HH:mm:ss");
    }, 1000);

    const day = dayjs().day();
    todayTable.value = getDayTimetable(day);
    tomorrowTable.value = getDayTimetable(day + 1);
    allTable.value = getAllTimetable();

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
      clearInterval(timer);
      timer = 0;
    });
    return {
      showAll,
      currentDatetime,
      currentWeek,
      todayTable,
      todayWeekday,
      tomorrowWeekday,
      tomorrowTable,
      allTable,
      onViewAll,
    };
  },
});
</script>

<style lang="less">
.lp-class-schedule {
  .title {
    margin-bottom: 12px;
  }
  .today,
  .tomorrow,
  .all {
    margin-bottom: 12px;
  }
  .timetable {
    .cell {
      white-space: break-spaces;
    }
  }
}
</style>
