<template>
  <div class="menu">
    <el-dialog title="添加" :visible.sync="addDialog" width="40%">
      <el-form ref="form" :model="addItem" label-width="80px">
        <el-form-item v-for="item in structure" :label="item.name" :key="item.id" v-if="item.component">
          <keep-alive>
            <component :is="item.component" v-model="addItem[item.prop]" :disabled="item.onlyRead"></component>
          </keep-alive>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-button type="primary" size="medium" @click="addDialog = true">添加</el-button>
    <el-table :data="rows" border style="width: 100%">
      <el-table-column :prop="item.prop" :label="item.name" v-for="item in structure" :key="item.id"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" plain size="mini">编辑</el-button>
          <el-button type="danger" plain size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import {getApi, postApi, putApi, delApi} from '../api/api'
  import structure from '../../../model/menu/form'
  export default {
    name: 'menuPage',
    data () {
      return {
        rows: [],
        structure,
        addDialog: false,
        addItem: {}
      }
    },
    methods: {
      addFun() {
        this.addDialog = true
      }
    },
    created() {
      getApi('admin/menu').then(e => {
        this.rows = e;
      })
    }
  }
</script>
<style scoped>
</style>
