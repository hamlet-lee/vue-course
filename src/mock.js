// 请先安装依赖： cnpm install mockjs --save
import Mock from 'mockjs'

// 使用mock设为true
var doMock = true

if (doMock) {
  Mock.mock(/\/api\/hello/, 'get', (url, type, body) => {
    return 'hello from mock'
  })
}
