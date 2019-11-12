// 请先安装依赖： cnpm install mockjs --save
import Mock from 'mockjs'

// 是否使用 mock
var doMock = false

if (doMock) {
  Mock.mock(/\/api\/hello/, 'get', (url, type, body) => {
    return 'hello from mock'
  })
}
