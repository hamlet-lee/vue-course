<template>
  <div>
    <h1>审计</h1>
        <Table border :columns="cols" :data="auditList">
      <template slot-scope="{ row }" slot="id">
        <Input type="text" v-model="row.id"/>
      </template>

      <template slot-scope="{ row }" slot="queryId">
        {{row.queryId}}
      </template>

      <template slot-scope="{ row }" slot="matchedRuleId">
        {{row.matchedRuleId}}
      </template>

      <template slot-scope="{ row }" slot="backendUrl">
        {{row.backendUrl}}
      </template>

      <template slot-scope="{ row }" slot="queryText">
        <Input type="textarea" :readonly="true" v-model="row.queryText"/>
      </template>

      <template slot-scope="{ row }" slot="comment">
        <Input type="textarea" :readonly="true" v-model="row.comment"/>
      </template>

      <template slot-scope="{ row }" slot="sql">
        <Input type="textarea" :readonly="true" v-model="row.sql"/>
      </template>

      <template slot-scope="{ row }" slot="user">
        {{row.user}}
      </template>

      <template slot-scope="{ row }" slot="source">
        <Input type="textarea" :readonly="true" v-model="row.source"/>
      </template>
    </Table>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      cols: [ {
        title: 'ID',
        key: 'id'
      },
      {
        title: 'Query ID',
        slot: 'queryId'
      },
      {
        title: 'Matched Rule ID',
        slot: 'matchedRuleId'
      },
      {
        title: 'Backend URL',
        slot: 'backendUrl'
      },
      {
        title: 'Query Text',
        slot: 'queryText'
      },
      {
        title: 'Comment',
        slot: 'comment'
      },
      {
        title: 'SQL',
        slot: 'sql'
      }, {
        title: 'User',
        slot: 'user'
      }, {
        title: 'Source',
        slot: 'source'
      }],
      auditList: []
    }
  },
  mounted () {
    this.reload()
  },
  methods: {
    reload () {
      axios.request({
        method: 'GET',
        url: '/api/audit/last',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        this.auditList = res.data
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
  }
}
</script>

<style>

</style>
