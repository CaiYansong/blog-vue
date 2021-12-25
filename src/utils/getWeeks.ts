/**
 * 获取过了几周
 * @param {Date} start
 * @param {Date} end
 */
function getWeeks(start?: Date, end?: Date): number {
  const current = end || new Date();
  // 设置本年的第一天
  const firstDay = start || new Date(`${current.getFullYear()}/1/1`);

  // 过去了多少 毫秒。 +1 为了解决 00:00:00 周数少一的情况
  const times = current.getTime() + 1 - firstDay.getTime();

  // 今年过去了多少天
  const days = Math.ceil(times / (24 * 60 * 60 * 1000));

  return Math.ceil(days / 7);
}

export default getWeeks;
