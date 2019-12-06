<template>
  <div>
    <Button @click="changeData">改变数据</Button>
    <ECharts :options="line"/>
  </div>
</template>

<script>
// cnpm install echarts vue-echarts --save
import ECharts from 'vue-echarts'
// 也可以按需引用，参考
// https://www.echartsjs.com/zh/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts
// https://github.com/apache/incubator-echarts/blob/master/index.js
// import 'echarts/lib/chart/line'

// 全部引入，免得麻烦
import 'echarts'

export default {
  components: {
    ECharts
  },
  data () {
    return {
      // 写法参考官网的options
      // https://www.echartsjs.com/examples/zh/index.html
      line: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
    }
  },
  methods: {
    changeData () {
      let newData = []
      for (let i = 0; i < 7; i++) {
        newData.push(Math.random() * 1000)
      }
      this.line.series[0].data = newData
    }
  }
}
</script>

<style>

</style>
