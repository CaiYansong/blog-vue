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
    <ul class="note-list">
      <li class="note-item" v-for="item in noteList" :key="item.id">
        <div class="container">
          {{ item.val }}
        </div>
        <div class="item-footer">
          <div class="datetime">
            {{ item.datetime }}
          </div>
          <div class="operation">
            <el-button @click="onEdit(item.id, item.val)">编辑</el-button>
            <el-button @click="onRemove(item.id)">删除</el-button>
          </div>
        </div>
      </li>
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
    .note-item {
      .container {
        white-space: break-spaces;
      }
    }
  }
}
</style>
