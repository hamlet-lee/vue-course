<template>
  <div>
    <h1>查找</h1>
    <Select v-model="searchType" style="width:150px">
      <Option
        v-for="item in searchTypeList"
        :value="item.value"
        :key="item.value"
        >{{ item.label }}</Option
      >
    </Select>
    <Input
      @on-search="handleSearch"
      search
      v-model="inputValue"
      style="width: 200px; margin-left: 10px"
      placeholder="请输入查找内容"
    />
    <div>
      <Table
        border
        :columns="addressColumns"
        :data="addressList"
        style="width: 1200px; margin: 20px 10%"
      ></Table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      // 查找类型
      searchTypeList: [
        {
          value: 'name',
          label: '按照姓名查找',
        },
        {
          value: 'phone',
          label: '按照手机号查找',
        },
      ],
      // 默认查找类型
      searchType: 'name',
      // 输入框输入值
      inputValue: '',
      // 列表表头
      addressColumns: [
        {
          title: '名称',
          key: 'name',
        },
        {
          title: '手机号',
          key: 'phone',
        },
      ],
      // 列表值
      addressList: [],
    }
  },
  created() {
    // 页面初始化时获取列表的初始值
    this.handleSearch()
  },
  methods: {
    handleSearch() {
      // 请求参数
      // [this.searchType] 根据选择框动态变化，分别传 name 和 phone
      const params = {
        [this.searchType]: this.inputValue,
      }

      // params = {
      //   name: this.inputValue
      // }

      // params = {
      //   phone: this.inputValue
      // }
      // 发送请求
      axios
        .get('/api/search', {
          params,
        })
        .then(res => {
          // 200
          this.addressList = res.data
        })
        .catch(err => {
          alert('查询失败！' + err)
        })
    },
  },
  watch: {
    inputValue() {
      if (!this.inputValue) {
        this.handleSearch()
      }
    },
  },
}
</script>
