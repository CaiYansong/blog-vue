import dayjs from "dayjs";

export interface IInfoItem {
  id?: string | number;
  val: string;
  time?: number;
  datetime?: string;
}

export type TInfoList = Array<IInfoItem>;

class LocalStorage {
  key: string;
  constructor({ key }: { key: string }) {
    this.key = key;
  }
  addItem(item: IInfoItem): void {
    const list = this.getList();
    const date = new Date();
    list.push({
      id: item.id || date.getTime(),
      time: date.getTime(),
      datetime: dayjs(date).format("YYYY-MM-DD HH:mm:ss"),
      ...item,
    });
    localStorage.setItem(this.key, JSON.stringify(list));
  }
  updateItem(item: IInfoItem): void {
    const list = this.getList();
    for (let i = 0; i < list.length; i++) {
      const it = list[i];
      if (it.id == item.id) {
        const date = new Date();
        list[i] = {
          id: item.id || date.getTime(),
          val: item.val,
          time: date.getTime(),
          datetime: dayjs(date).format("YYYY-MM-DD HH:mm:ss"),
        };
        break;
      }
    }
    localStorage.setItem(this.key, JSON.stringify(list));
  }
  removeItem(id: string | number): void {
    const list = this.getList();
    let index = -1;
    for (let i = 0; i < list.length; i++) {
      const it = list[i];
      if (it.id == id) {
        index = i;
        break;
      }
    }
    list.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(list));
  }
  getList(): TInfoList {
    const list = JSON.parse(localStorage.getItem(this.key) || "[]") || [];
    return list;
  }
  getItem(id: string | number): IInfoItem | undefined {
    const list = this.getList();
    for (let i = 0; i < list.length; i++) {
      const it = list[i];
      if (it.id == id) {
        return it;
      }
    }
  }
}

export default LocalStorage;
