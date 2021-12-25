import getWeeks from "@/utils/getWeeks";
import timetable from "./timetable";

export const startDate = new Date("2021/9/6");

const times = [
  { label: "一、二节", value: "0", time: "8:00-8:45\n8:50-9:35" },
  { label: "三、四节", value: "1", time: "10:05-10:50\n10:55-11:40" },
  { label: "五、六节", value: "2", time: "14:00-14:45\n14:50-15:35" },
  { label: "七、八节", value: "3", time: "15:55-16:40\n16:45-17:30" },
  {
    label: "九、十、\n十一节",
    value: "4",
    time: "19:00-19:45\n19:50-20:35\n20:40-21:25",
  },
];

/**
 * 渲染当前课程
 * @param course
 * @param date
 * @returns
 */
export function getCourse(
  course?: Array<{
    info: string;
    start: number;
    end: number;
    isOdd?: boolean;
    isEven?: boolean;
  }>,
  date?: Date
): string {
  const week = getWeeks(startDate, date);
  if (!course) {
    return "";
  }
  let html = "";
  course.forEach(
    ({
      info,
      start,
      end,
      isOdd,
      isEven,
    }: {
      info: string;
      start: number;
      end: number;
      isOdd?: boolean;
      isEven?: boolean;
    }) => {
      // 还未开始
      if (week < start) {
        html += `<div class="not-start">${info}</div>`;
        return;
      }
      // 已结束
      if (week > end) {
        html += `<del>${info}</del>`;
        return;
      }
      // 单周 && 当前处于双周 隐藏该项
      if (isOdd && week % 2 === 0) {
        html += `<div class="not-start">${info}</div>`;
        return;
      }
      // 双周 && 当前处于单周 隐藏该项
      if (isEven && week % 2 === 1) {
        html += `<div class="not-start">${info}</div>`;
        return;
      }

      html += info;
    }
  );
  return html;
}

export interface IDayTimetableItem {
  label: string;
  time: string;
  course: string;
  value: string;
}

export type TDayTimetable = Array<IDayTimetableItem>;

export function getDayTimetable(day: number, date?: Date): TDayTimetable {
  const table: TDayTimetable = [];
  let weekDay = day - 1;
  if (weekDay < 0) {
    weekDay = 6;
  }
  const currentData = timetable[weekDay];

  currentData &&
    currentData.forEach((it, idx) => {
      const timeInfo = times[idx];
      table.push({
        ...timeInfo,
        course: getCourse(it, date),
      });
    });
  return table;
}

export interface IAllTimetableItem {
  label: string;
  time: string;
  Monday?: string;
  Tuesday?: string;
  Wednesday?: string;
  Thursday?: string;
  Friday?: string;
  Saturday?: string;
  Sunday?: string;
}

export type TAllTimetable = Array<IAllTimetableItem>;

export function getAllTimetable(): TAllTimetable {
  const table: TAllTimetable = [];
  const keyMap: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  // 第几节课
  times.forEach((timeInfo, idx) => {
    const row: IAllTimetableItem = {
      label: "",
      time: "",
    };
    row.label = timeInfo.label;
    row.time = timeInfo.time;
    // 周几 对应的课程
    for (let i = 0; i < 7; i++) {
      const currentData = timetable[i][idx];
      let str = "";
      currentData &&
        currentData.forEach((it) => {
          str += str ? "\n" : "";
          str += it.info;
        });
      row[keyMap[i]] = str;
    }
    table.push(row);
  });
  return table;
}
