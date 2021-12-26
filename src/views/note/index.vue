<template>
  <div class="note-page">
    <h2>Note</h2>
    <div class="input-wrap">
      <el-input
        class="textarea"
        v-model="noteStr"
        autosize
        type="textarea"
        placeholder="Please input"
      />
      <el-button @click="onSave">
        <template v-if="editId === 0 || editId">编辑</template>
        <template v-else>保存</template>
      </el-button>
    </div>
    <h3>列表</h3>
    <ul class="note-list">
      <template v-if="noteList.length > 0">
        <li class="note-item" v-for="item in noteList" :key="item.id">
          <div class="container">
            {{ item.val }}
          </div>
          <div class="item-footer">
            <div class="datetime">
              {{ item.datetime }}
            </div>
            <div class="operation">
              <el-button @click="onEdit(item.id||'', item.val)" size="mini">
                编辑
              </el-button>
              <el-button @click="onRemove(item.id||'')" size="mini">
                删除
              </el-button>
            </div>
          </div>
        </li>
      </template>
      <div v-else class="empty-tip">
        <h4>数据为空</h4>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { ElMessage } from "element-plus";
import LocalStorage, { TInfoList } from "./LocalStorage";

export default defineComponent({
  setup() {
    const noteStr = ref("");
    const noteList: Ref<TInfoList> = ref([]);
    const editId: Ref<string | number> = ref("");

    const ls = new LocalStorage({ key: "local-note" });

    function getList() {
      noteList.value = ls.getList();
    }

    getList();

    function onSave() {
      console.log("onSave");
      if (!noteStr.value) {
        ElMessage.error("内容不能为空");
        return;
      }
      if (editId.value) {
        ls.updateItem({
          id: editId.value,
          val: noteStr.value,
        });
        ElMessage.success("编辑成功");
      } else {
        ls.addItem({
          val: noteStr.value,
        });
        ElMessage.success("保存成功");
      }
      getList();
      editId.value = "";
      noteStr.value = "";
    }

    function onEdit(id: string | number, val: string) {
      editId.value = id;
      noteStr.value = val;
    }

    function onRemove(id: string | number) {
      ls.removeItem(id);
      getList();
    }
    return {
      noteStr,
      noteList,
      editId,
      onSave,
      onEdit,
      onRemove,
    };
  },
});
</script>

<style lang="less">
.note-page {
  .input-wrap {
    margin-bottom: 12px;
    .el-textarea {
      margin-bottom: 12px;
      textarea {
        min-height: 200px !important;
      }
    }
  }
  .note-list {
    margin: 0;
    padding: 0;
    border: 1px solid #eee;
    border-radius: 4px;
    .note-item {
      margin-bottom: 12px;
      padding: 12px;
      list-style: none;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      box-sizing: border-box;
      .container {
        white-space: break-spaces;
      }
      .item-footer {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .empty-tip {
    text-align: center;
    color: #999;
  }
}
</style>
