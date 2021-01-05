<template>
  <div class="article">
    <h2 class="tit">文章列表(0)</h2>

    <!-- 标题头 -->
    <el-table
    :data="tableData"
    style="width: 100%">
    <!-- 日期 -->
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <!-- title -->
    <el-table-column
      label="Title"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <!-- content -->
     <el-table-column
      label="Content"
      width="270">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.content }}</span>
      </template>
    </el-table-column>

    <!-- 编辑 -->
    <el-table-column label="操作">
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
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          title:"My SQl 的安装",
          content:"下载MySQL的yum源码，安装MySQL"
        }, {
          date: '2016-05-04',
          title:"nginx的安装",
          content:"下载MySQL的yum源码，安装MySQL"
        }, {
          date: '2016-05-01',
          title:"用vue-cli搭建脚手架",
          content:"下载MySQL的yum源码，安装MySQL"
        }, {
          date: '2016-05-03',
          title:"webpack对css分包",
          content:"下载MySQL的yum源码，安装MySQL"
        }
      ],
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