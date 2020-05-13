// 请先安装依赖： cnpm install mockjs --save
import Mock from 'mockjs'

// 是否使用 mock
var doMock = true

let list = [
  { id: 1, commentPattern: 'commentPattern1', ord: '1', sandboxTag: 'tag1', sqlPattern: 'sqlPattern1', userPattern: 'userPattern1', sourcePattern: 'sourcePattern1' },
  { id: 2, commentPattern: 'commentPattern2', ord: '2', sandboxTag: 'tag2', sqlPattern: 'sqlPattern2', userPattern: 'userPattern2', sourcePattern: 'sourcePattern2' }
]

let indexMap = {}
let maxId = 2
function doIndex () {
  for (let i = 0; i < list.length; i++) {
    indexMap[list[i].id] = i
  }
}

doIndex()

if (doMock) {
  Mock.mock(/\/api\/hello/, 'get', ({ url, type, body }) => {
    return 'hello from mock'
  })

  // Mock.mock(/\/api\/new$/, 'post', ({ url, type, body }, res) => {
  //   let { name, tel } = JSON.parse(body)
  //   maxId++
  //   list.push({
  //     id: maxId,
  //     name,
  //     tel
  //   })

  //   // 可以在console看到当前list情况
  //   console.log(list)
  // })

  Mock.mock(/\/api\/rules\/list$/, 'get', ({ url, type, body }, res) => {
    // 可以在console看到当前list情况
    console.log(list)
    return list
  })

  Mock.mock(/\/api\/rules\/save$/, 'post', ({ url, type, body }, res) => {
    // eslint-disable-next-line no-debugger
    debugger
    let rule = JSON.parse(body)
    if (rule.id === 0) {
      // new item
      maxId++
      rule.id = maxId
      list.unshift(rule)
      doIndex()
    } else {
      // old item
      list[indexMap[rule.id]] = rule
    }
    console.log(list)
    return list
  })

  Mock.mock(/\/api\/rules\/move-.*$/, 'post', ({ url, type, body }, res) => {
    // eslint-disable-next-line no-debugger
    let { id } = JSON.parse(body)
    let pos = indexMap[id]
    if (url.indexOf('move-up') >= 0) {
      if (pos !== 0) {
        let rule = list[pos]
        let ruleUp = list[pos - 1]
        list[pos] = ruleUp
        list[pos - 1] = rule
      }
    }
    if (url.indexOf('move-down') >= 0) {
      if (pos !== list.length - 1) {
        let rule = list[pos]
        let ruleDown = list[pos + 1]
        list[pos] = ruleDown
        list[pos + 1] = rule
      }
    }
    if (url.indexOf('move-top') >= 0) {
      if (pos !== 0) {
        let rule = list[pos]
        list.splice(pos, 1)
        list.unshift(rule)
      }
    }
    if (url.indexOf('move-bottom') >= 0) {
      if (pos !== list.length - 1) {
        let rule = list[pos]
        list.splice(pos, 1)
        list.push(rule)
      }
    }
    doIndex()
    console.log(list)
    return list
  })

  Mock.mock(/\/api\/rules\/delete$/, 'post', ({ url, type, body }, res) => {
    let { id } = JSON.parse(body)
    let pos = indexMap[id]
    list.splice(pos, 1)
    doIndex()
    console.log(list)
    return {}
  })

  Mock.mock(/\/api\/audit\/last$/, 'get', ({ url, type, body }, res) => {
    return [
      {
        id: 0,
        queryText: '--comment 1\nselect 1',
        comment: '--comment 1\n',
        sql: 'select 1',
        user: 'lisn',
        source: 'source',
        queryId: 'queryaoeaoeuoe',
        backendUrl: 'http://a.com:80',
        matchedRuleId: 1
      }
    ]
  })
  Mock.mock(/\/api\/userinfo/, 'get', ({ url, type, body }) => {
    return {
      name: 'lisn'
    }
  })
}
