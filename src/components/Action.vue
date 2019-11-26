// 自定义组件
<template>
  <div id="edit">
    <Table border :columns="dataColumns" :data="dataList"></Table>
    <Modal v-model="editFlag" title="编辑" @on-ok="editDataOK">
      <div class="edit-data">
        <div>
          <span class="name">姓名：</span>
          <Input
            v-model="editData.name"
            placeholder="请输入姓名"
            style="width: 200px"
          />
        </div>
        <div class="edit-phone">
          <span class="phone" style="width: 100px">手机号：</span>
          <Input
            v-model="editData.phone"
            placeholder="请输入手机号"
            style="width: 200px"
          />
        </div>
      </div>
    </Modal>
    <Modal v-model="deleteFlag" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>删除确认</span>
      </p>
      <div style="text-align:center">
        <p>是否确认删除?</p>
      </div>
      <div slot="footer">
        <Button size="small" @click="deleteCancel">取消</Button>
        <Button type="error" size="small" @click="deleteOK">确认</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      dataColumns: [
        {
          title: '名称',
          key: 'name',
        },
        {
          title: '手机号',
          key: 'phone',
        },
        {
          title: '操  作',
          key: 'action',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'text',
                    size: 'small',
                  },
                  nativeOn: {
                    click: () => {
                      this.editFlag = true
                      this.editData = params.row
                    },
                  },
                },
                '编辑'
              ),
              h(
                'Button',
                {
                  props: {
                    type: 'text',
                    size: 'small',
                  },
                  nativeOn: {
                    click: () => {
                      this.deleteFlag = true
                      this.deleteData = params.row
                    },
                  },
                },
                '删除'
              ),
            ])
          },
        },
      ],
      // 列表数据
      dataList: [],
      // 编辑标志
      editFlag: false,
      // 删除标志
      deleteFlag: false,
      // 编辑行的数据
      editData: {},
      // 删除行的数据
      deleteData: {},
    }
  },
  created() {
    // 页面初始化时，获取列表所有元素
    this.getDataList()
  },
  methods: {
    // 获取列表数据
    getDataList() {
      axios
        .get('/api/search')
        .then(res => {
          this.dataList = res.data
        })
        .catch(err => {
          alert('初始化查询失败！' + err)
        })
    },
    // 编辑请求
    editDataOK() {
      axios
        .post('/api/edit', this.editData)
        .then(res => {
          // this.getDataList()
          this.editFlag = false
          alert('编辑成功！')
        })
        .catch(err => {
          alert('编辑失败！' + err)
        })
        .finally(() => {
          this.editFlag = false
        })
    },
    // 删除请求
    deleteOK() {
      axios
        .post('/api/delete', this.deleteData)
        .then(res => {
          this.deleteFlag = false
          this.getDataList()
          alert('删除成功！')
        })
        .catch(err => {
          alert('删除失败！' + err)
        })
        .finally(() => {
          this.deleteFlag = false
        })
    },
    // 取消删除
    deleteCancel() {
      this.deleteFlag = false
    },
  },
}
</script>

<style>
.edit-data {
  text-align: center;
}
.name {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.edit-phone {
  margin-top: 10px;
}
.phone {
  display: inline-block;
  width: 100px;
  text-align: right;
}
</style>
