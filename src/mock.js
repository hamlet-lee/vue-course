// 请先安装依赖： cnpm install mockjs --save
import Mock from 'mockjs'

// 是否使用 mock
var doMock = true

let list = [{
  'id': 0,
  'name': '张三',
  'tel': '123123'
}, {
  'id': 1,
  'name': '李四',
  'tel': '234234'
}]
let maxId = 1

if (doMock) {
  Mock.mock(/\/api\/hello/, 'get', ({ url, type, body }) => {
    return 'hello from mock'
  })

  Mock.mock(/\/api\/new$/, 'post', ({ url, type, body }, res) => {
    let { name, tel } = JSON.parse(body)
    maxId++
    list.push({
      id: maxId,
      name,
      tel
    })

    // 可以在console看到当前list情况
    console.log(list)
  })
}
