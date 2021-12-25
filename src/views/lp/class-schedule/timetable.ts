const timetable = [
  // 周一
  [
    [
      {
        info: "中国古代文学3\n新师0312 黄海蓉\n1~16周 1、2节",
        start: 1,
        end: 16,
      },
    ],
    [
      {
        info: "文学概论\n新师0312 谢慧英\n1~16周 3、4节",
        start: 1,
        end: 16,
      },
    ],
    undefined,
    undefined,
    undefined,
  ],
  // 周二
  [
    undefined,
    [
      {
        info: "外国文学1\n新师0312 曾丽华\n1~16周 3、4节",
        start: 1,
        end: 16,
      },
    ],
    undefined,
    undefined,
    [
      {
        info: "闽南传统音乐文化\n1~15周(单周) (9-10节)\n印斗08C0206 杨丽霞",
        start: 1,
        end: 15,
        isOdd: true,
      },
      {
        info: "闽南传统音乐文化\n2~16周(双周) (9-10节)\n线上自主学习（中国大学MOOC平台）杨丽霞",
        start: 2,
        end: 16,
        isEven: true,
      },
    ],
  ],
  // 周三
  [
    undefined,
    [
      {
        info: "《诗经》导读\n建发0302 刘利侠\n1~16周 3、4节",
        start: 1,
        end: 16,
      },
    ],
    undefined,
    undefined,
    undefined,
  ],
  // 周四
  [
    [
      {
        info: "语言学概论\n新师0312 吴光辉\n1~16周 1、2节",
        start: 1,
        end: 16,
      },
    ],
    [
      {
        info: "中国古典小说戏曲导读\n新师0312 范德怡\n1~16周 3、4节",
        start: 1,
        end: 16,
      },
    ],
    [
      {
        info: "中国古代文学3\n新师0312 黄海蓉\n1~16周 5、6节",
        start: 1,
        end: 16,
      },
    ],
    undefined,
    undefined,
  ],
  // 周五
  [
    [
      {
        info: "外国文学1\n新师0312 曾丽华\n1~8周 1、2节",
        start: 1,
        end: 8,
      },
    ],
    [
      {
        info: "西方文化概论\n新师0312 曾丽华\n1~16周 3、4节",
        start: 1,
        end: 16,
      },
    ],
    undefined,
    undefined,
    undefined,
  ],
  // 周六
  [undefined, undefined, undefined, undefined, undefined],
  // 周日
  [undefined, undefined, undefined, undefined, undefined],
];

export default timetable;
