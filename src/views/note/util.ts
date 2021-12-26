/* ---------- 辅助函数 ---------- */

/**
 * 转义 html 字符串
 * @param {string} s
 */
export function escapeHTML(s: string): string {
  if (typeof s !== "string") {
    return "";
  }
  // eslint-disable-next-line no-control-regex
  const REG_HTML_ENCODE = /"|&|'|<|>|[\x00-\x20]|[\x7F-\xFF]|[\u0100-\u2700]/g;
  return s.replace(REG_HTML_ENCODE, function ($0: string) {
    let c = $0.charCodeAt(0);
    const r: Array<string | number> = ["&#"];
    c = c === 0x20 ? 0xa0 : c;
    r.push(c);
    r.push(";");
    return r.join("");
  });
}

/**
 * 转义 html 字符串
 * @param {string} s
 */
export function descapeHTML(s: string): string {
  if (typeof s !== "string") {
    return "";
  }

  let ele = document.getElementById("temp-descape-html");
  if (!ele) {
    ele = document.createElement("div");
    ele.id = "temp-descape-html";
  }
  ele.innerHTML = s;
  return ele.innerText;
}

/* ---------- 数据库 ---------- */
const indexedDBObj = indexedDB || webkitIndexedDB || mozIndexedDB || null;
// if (indexedDBObj) {
//   alert('支持');
// } else {
//   alert('不支持');
// }

const databaseName = "notesDB";
const indexName = "notesIndex";

const request = indexedDBObj.open(databaseName, 1);
let db;

request.onsuccess = function () {
  db = request.result;
  logInfo("数据库打开成功");
  onDBLoad();
};

request.onerror = function (err) {
  logInfo("数据库打开报错: " + err);
};

// 创建 表
request.onupgradeneeded = function (event) {
  db = event.target.result;
  let objectStore;
  if (!db.objectStoreNames.contains(indexName)) {
    objectStore = db.createObjectStore(indexName, { keyPath: "id" });
    objectStore.createIndex("val", "val", { unique: false });
    objectStore.createIndex("time", "time", { unique: false });
    objectStore.createIndex("datetime", "datetime", { unique: false });
  }
  // { id: 1, val: 1, time: Date.now(), datetime: 'datetime' }
};

/**
 * 数据库增加项
 * @param item
 * @param cb
 */
function add(item, cb) {
  const request = db
    .transaction([indexName], "readwrite")
    .objectStore(indexName)
    // .add({ id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' })
    .add(item);

  request.onsuccess = function () {
    cb && cb();
  };

  request.onerror = function () {
    logInfo("数据写入失败");
  };
}

/**
 * 删除数据
 */
function remove(id, cb) {
  const request = db
    .transaction([indexName], "readwrite")
    .objectStore(indexName)
    .delete(id);

  request.onsuccess = function () {
    cb && cb();
  };
}

/**
 * 更新数据
 * @param item
 * @param cb
 */
function update(item, cb) {
  const request = db
    .transaction([indexName], "readwrite")
    .objectStore(indexName)
    .put(item);

  request.onsuccess = function () {
    cb && cb();
  };

  request.onerror = function () {
    logInfo("数据更新失败");
  };
}

/**
 * 数据库 读取单个数据
 * @param id
 * @param cb
 */
function read(id, cb) {
  const objectStore = db.transaction(indexName).objectStore(indexName);
  const request = objectStore.get(id);

  request.onerror = function () {
    logInfo("事务失败");
  };

  request.onsuccess = function () {
    if (request.result) {
      cb && cb(request.result);
    } else {
      logInfo("未获得数据记录");
    }
  };
}

/**
 * 读取所有数据
 * @param cb
 */
function readAll(cb) {
  const objectStore = db.transaction(indexName).objectStore(indexName);

  const arr = [];
  objectStore.openCursor().onsuccess = function (event) {
    const cursor = event.target.result;

    if (cursor) {
      arr.push(cursor.value);
      cursor.continue();
    } else {
      cb && cb(arr);
      // logInfo('没有更多数据了！');
    }
  };
}

/**
 * 查找某个值
 * @param key
 * @param val
 * @param cb
 */
function findOne(key, val, cb) {
  const transaction = db.transaction([indexName], "readonly");
  const store = transaction.objectStore(indexName);
  const index = store.index(key);
  const request = index.get(val);

  request.onsuccess = function (e) {
    const result = e.target.result;
    if (result) {
      cb && cb(result);
    }
  };
}
