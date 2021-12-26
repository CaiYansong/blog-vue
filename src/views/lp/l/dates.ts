export const ACQUAINTANCE_DATE = "2012-9-03 08:00:00";

export const AGREE_DATE = "2020-09-14 01:00:00";

export interface IDatingItem {
  address: string;
  startTime: string;
  endTime: string;
}

export type TDatingList = Array<IDatingItem>;

export const datingList: TDatingList = [
  {
    address: "杭州",
    startTime: "2021-11-22 21:00:00",
    endTime: "2021-11-27 08:40:00",
  },
  {
    address: "杭州",
    startTime: "2021-11-5 22:00:00",
    endTime: "2021-11-11 07:50:00",
  },
  {
    address: "杭州",
    startTime: "2021-10-14 22:00:00",
    endTime: "2021-10-17 13:39:00",
  },
  {
    address: "杭州",
    startTime: "2021-07-19 21:30:00",
    endTime: "2021-08-08 14:13:00",
  },
  {
    address: "厦门",
    startTime: "2021-06-19 15:10:00",
    endTime: "2021-06-23 15:20:00",
  },
  // {
  //   address: "厦门",
  //   startTime: "2021-06-21 18:30:00",
  //   endTime: '2021-06-23 15:20:00',
  // },
  // {
  //   address: "厦门",
  //   startTime: "2021-06-19 15:10:00",
  //   endTime: '2021-06-20 21:00:00',
  // },
  {
    address: "杭州",
    startTime: "2021-06-11 19:10:00",
    endTime: "2021-06-15 8:00:00",
  },
  {
    address: "杭州",
    startTime: "2021-05-29 19:10:00",
    endTime: "2021-05-31 12:00:00",
  },
  {
    address: "泉州 - 厦门",
    startTime: "2021-05-02 14:40:00",
    endTime: "2021-05-05 15:50:00",
  },
  {
    address: "厦门",
    startTime: "2021-04-24 20:00:00",
    endTime: "2021-04-25 15:27:00",
  },
  {
    address: "杭州",
    startTime: "2021-04-15 22:35:00",
    endTime: "2021-04-18 14:00:00",
  },
  {
    address: "厦门",
    startTime: "2021-04-03 16:00:00",
    endTime: "2021-04-04 09:27:00",
  },
  {
    address: "厦门",
    startTime: "2021-03-13 14:00:00",
    endTime: "2021-03-15 16:10:00",
  },
  {
    address: "杭州",
    startTime: "2021-01-16 21:12:00",
    endTime: "2021-01-25 08:50:00",
  },
  {
    address: "厦门",
    startTime: "2020-12-31 14:00:00",
    endTime: "2021-01-03 16:10:00",
  },
  {
    address: "杭州",
    startTime: "2020-12-06 07:10:00",
    endTime: "2020-12-09 08:55:00",
  },
  {
    address: "厦门",
    startTime: "2020-11-06 14:00:00",
    endTime: "2020-11-10 16:14:00",
  },
  {
    address: "厦门",
    startTime: "2020-10-03 08:20:00",
    endTime: "2020-10-05 12:30:00",
  },
];
