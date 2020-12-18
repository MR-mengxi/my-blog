<template>
  <div class="article">
    <h2 class="tit">文章列表(0)</h2>

    <!-- 标题头 -->
    <el-table :data="data">
    <el-table-column
      label="Title"
     >
      <template slot-scope="scope">
        <p >{{ scope.row.date }}</p>
      </template>
    </el-table-column>

    <el-table-column
      label="Date"
      >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <!-- <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p> -->
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <!-- 自定义编辑按钮 -->
    <el-table-column label="Options">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    handleEdit() {},
    handleDelete() {},
  },
};
</script>

<style lang="scss">
.article {
  height: 100%;
  h2.tit {
    color: #0084ff;
    font-size: 18px;
    font-weight: 400;
    border-left: 2px solid #0084ff;
    margin: 20px 0 30px;
    padding-left: 16px;
  }
}
</style>