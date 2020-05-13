<template>
  <div>
    <h1>规则管理</h1>
    <Table border :columns="cols" :data="rules">
      <template slot-scope="{ row, index }" slot="commentPattern">
        <Input type="text" v-model="editCommentPattern" v-if="editIndex === index" />
        <span v-else>{{ row.commentPattern }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="sqlPattern">
        <Input type="text" v-model="editSqlPattern" v-if="editIndex === index" />
        <span v-else>{{ row.sqlPattern }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="userPattern">
        <Input type="text" v-model="editUserPattern" v-if="editIndex === index" />
        <span v-else>{{ row.userPattern }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="sourcePattern">
        <Input type="text" v-model="editSourcePattern" v-if="editIndex === index" />
        <span v-else>{{ row.sourcePattern }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="sandboxTag">
        <Input type="text" v-model="editSandboxTag" v-if="editIndex === index" />
        <span v-else>{{ row.sandboxTag }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="action">
        <div v-if="editIndex === index">
          <Button @click="handleSave(index)">保存</Button>
          <Button @click="handleCancel(index)">取消</Button>
        </div>
        <div v-else>
          <Button @click="handleEdit(row, index)">编辑</Button>
          <Button @click="handleDelete(row, index)">删除</Button>
        </div>
      </template>
      <template slot-scope="{ row, index }" slot="ord">
        <div v-if="editIndex === index">
        </div>
        <div v-else>
          <Button @click="handleMove(row, index, 'move-up')">上移</Button>
          <Button @click="handleMove(row, index, 'move-down')">下移</Button>
          <Button @click="handleMove(row, index, 'move-top')">置顶</Button>
          <Button @click="handleMove(row, index, 'move-bottom')">置底</Button>
        </div>
      </template>
    </Table>
    <Button @click="handleNew()"> 新增 </Button>
    <div>
    <!-- {{rules}} -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      cols: [
        {
          title: 'ID',
          key: 'id'
        },
        {
          title: 'Comment Pattern',
          slot: 'commentPattern'
        },
        {
          title: 'SQL Pattern',
          slot: 'sqlPattern'
        },
        {
          title: 'User Pattern',
          slot: 'userPattern'
        },
        {
          title: 'Source Pattern',
          slot: 'sourcePattern'
        },
        {
          title: 'Sandbox Tag',
          slot: 'sandboxTag'
        },
        {
          title: '操作',
          slot: 'action'
        },
        {
          title: '顺序',
          slot: 'ord'
        }
      ],
      rules: [],
      editIndex: -1, // 当前聚焦的输入框的行数
      editCommentPattern: '', // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editSqlPattern: '', // 第二列输入框
      editUserPattern: '', // 第三列输入框
      editSourcePattern: '',
      editSandboxTag: ''
    }
  },
  methods: {
    handleNew () {
      let rule = { id: 0, commentPattern: '', sqlPattern: '', userPattern: '', sourcePattern: '', sandboxTag: '' }
      this.rules.unshift(rule)
      this.editIndex = 0
    },
    handleEdit (row, index) {
      this.editCommentPattern = row.commentPattern
      this.editSqlPattern = row.sqlPattern
      this.editUserPattern = row.userPattern
      this.editSourcePattern = row.sourcePattern
      this.editSandboxTag = row.sandboxTag
      this.editIndex = index
    },
    handleMove (row, index, way) {
      axios.request({
        method: 'POST',
        url: '/api/rules/' + way,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          id: row.id
        }
      }).then((res) => {
        this.$Message.info({
          content: 'Move成功',
          duration: 1,
          closable: true
        })
        this.reload()
      }).catch((err) => {
        this.$Modal.error({
          title: '消息',
          content: '失败：' + err,
          onOk: () => {
            //
          }
        })
      })
    },
    handleDelete (row, index) {
      this.$Modal.confirm({
        title: '确认',
        content: '<p>确认要删除吗？</p>',
        onOk: () => {
          axios.request({
            method: 'POST',
            url: '/api/rules/delete',
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
              id: row.id
            }
          }).then((res) => {
            this.$Message.info({
              content: 'Delete成功',
              duration: 1,
              closable: true
            })
            this.reload()
          }).catch((err) => {
            this.$Modal.error({
              title: '消息',
              content: '失败：' + err,
              onOk: () => {
                //
              }
            })
          })
        },
        onCancel: () => {

        }
      })
    },
    handleCancel (index) {
      if (this.rules[index].id === 0) {
        // cancel new
        this.rules.splice(index, 1)
      } else {
        // cancel old
      }
      this.editIndex = -1
    },
    handleSave (index) {
      let rule = { id: this.rules[index].id }
      rule.commentPattern = this.editCommentPattern
      rule.sqlPattern = this.editSqlPattern
      rule.userPattern = this.editUserPattern
      rule.sourcePattern = this.editSourcePattern
      rule.sandboxTag = this.editSandboxTag

      axios.request({
        method: 'POST',
        url: '/api/rules/save',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(rule)
      }).then((res) => {
        this.editIndex = -1
        // this.rules[index] = rule
        this.$Message.info({
          content: '保存成功',
          duration: 1,
          closable: true
        })
        this.reload()
      }).catch((err) => {
        this.$Modal.error({
          title: '消息',
          content: '失败：' + err,
          onOk: () => {
            //
          }
        })
      })
    },
    reload () {
      axios.request({
        method: 'GET',
        url: '/api/rules/list',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
      // 200
      // 换用iview组件
      // alert('新增成功!')
      // this.$Modal.success({
      //   title: '消息',
      //   content: '获取成功!',
      //   onOk: () => {
      //   }
      // })
        this.rules = res.data
      }).catch((err) => {
      // 换用iview组件
      // alert('失败：' + err)
        this.$Modal.error({
          title: '消息',
          content: '失败：' + err,
          onOk: () => {

          }
        })
      })
    }
  },
  mounted () {
    this.reload()
  }
}
</script>

<style>

</style>
