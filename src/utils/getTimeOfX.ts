import dayjs from "dayjs";

export interface IParam {
  startTime: string;
  endTime: string;
}

/**
 * 获取展示的时间
 */
function getTimeOfX(
  param: string | number | IParam,
  target?: string | number,
  noPre?: boolean
): string {
  let leftTime = 0;
  let pre = "距离现在：";
  let now = target || Date.now();
  if (typeof now === "string") {
    now = dayjs(now).valueOf();
  }
  if (typeof param === "number") {
    leftTime = now - param;
  }
  if (typeof param === "string") {
    leftTime = now - dayjs(param).valueOf();
  }
  if (leftTime < 0) {
    leftTime = Math.abs(leftTime);
    pre = "距离开始：";
  }
  if (typeof param === "object") {
    const start = dayjs(param.startTime).valueOf();
    const end = dayjs(param.endTime).valueOf();
    if (now < start) {
      leftTime = Math.abs(now - start);
      pre = "距离开始：";
    } else if (now > end) {
      leftTime = now - end;
    } else {
      leftTime = Math.abs(now - end);
      pre = "距离结束：";
    }
  }
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  // day
  const dayTime: number = 24 * 60 * 60 * 1000;
  if (leftTime > dayTime) {
    days = Math.floor(leftTime / dayTime);
    leftTime = leftTime % dayTime;
  }
  // hour
  const hourTime = 60 * 60 * 1000;
  if (leftTime > hourTime) {
    hours = Math.floor(leftTime / hourTime);
    leftTime = leftTime % hourTime;
  }
  // minute
  const minuteTime = 60 * 1000;
  if (leftTime > minuteTime) {
    minutes = Math.floor(leftTime / minuteTime);
    leftTime = leftTime % minuteTime;
  }
  // second
  const secondTime = 1000;
  if (leftTime > secondTime) {
    seconds = Math.floor(leftTime / secondTime);
    leftTime = leftTime % secondTime;
  }

  return (
    (noPre ? "" : pre) +
    days +
    "天" +
    hours +
    "时" +
    minutes +
    "分" +
    seconds +
    "秒"
  );
}

export default getTimeOfX;
