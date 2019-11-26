/* eslint-disable no-unused-vars */
// 请先安装依赖： cnpm install mockjs --save
import Mock from 'mockjs'

// 是否使用 mock
var doMock = true

let list = [
  {
    id: 0,
    name: '张三',
    phone: '123123',
  },
  {
    id: 1,
    name: '李四',
    phone: '234234',
  },
]
let maxId = 1

function search(condition) {
  return list.filter(function(item) {
    item.name == condition || item.tel == condition
  })
}

if (doMock) {
  Mock.mock(/^\/api\/hello/, 'get', ({ url, type, body }) => {
    return 'hello from mock'
  })

  // 查询接口
  Mock.mock(/^\/api\/search/, 'get', ({ url }) => {
    // url = /api/search?name=name
    const searchParams = url.split('?')[1]
    const params = searchParams
      ? Object.fromEntries(new URLSearchParams(searchParams))
      : {}
    const key = Object.keys(params)[0]
    // 如果有传入查询条件  则根据条件筛选
    if (key) {
      return list.filter(item => {
        return item[key].indexOf(params[key]) !== -1
      })
    }
    // 如果查询条件为空  则返回整个列表
    return list
  })

  Mock.mock(/^\/api\/new/, 'post', ({ url, type, body }) => {
    let { name, phone } = JSON.parse(body)
    maxId++
    list.push({
      id: maxId,
      name,
      phone,
    })

    // 可以在console看到当前list情况
    console.log(list)
  })

  // 编辑接口
  Mock.mock(/^\/api\/edit/, 'post', ({ url, type, body }) => {
    let { id, name, phone } = JSON.parse(body)
    // 根据 id 更新指定元素
    list.forEach(function(item) {
      if (item.id === id) {
        item.name = name
        item.phone = phone
      }
    })
  })

  // 删除接口
  Mock.mock(/^\/api\/delete/, 'post', ({ url, type, body }) => {
    let id = JSON.parse(body).id
    // 根据 id 删除指定元素
    list = list.filter(item => {
      return item.id !== id
    })
  })
}
