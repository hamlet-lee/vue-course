<template>
  <div>
    <Button @click="changeParams">change params</Button>
    <Input v-model="myParams.a" />
    +
    <Input v-model="myParams.b" />
    <Button @click="doRun">=</Button>
    {{ myC }}
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Object,
      default: () => ({})
    },
    noReload: {
      type: Boolean,
      default: () => (false)
    }
  },
  data () {
    return {
      myParams: this.params,
      myC: '',
      autoRun: false
    }
  },
  // 首次进入本组件（通过导航，或者通过手工输入URL）
  beforeRouteEnter (to, from, next) {
    // 不能用this, 可以 next ( vm => {  vm是组件实例 })
    // next( vm => {
    //   vm.myParams = JSON.parse(JSON.stringify(to.query))
    // })
    console.log('calling: beforeRouteEnter')
    next(vm => {
      // debugger
      // vm.myParams = JSON.parse(JSON.stringify(to.query))
      vm.reload()
    })
  },
  // 点击了RUN，或者通过 导航或手工输入URL
  // 如果是点击了RUN，可以带上noReload = true
  // 这样就不用刷新参数

  beforeRouteUpdate (to, from, next) {
    console.log('calling: before route update')
    if (to.params.noReload) {
      // 用户点击RUN，走这个分支
      // 不用reload
      console.log('do not reload')
      next()
    } else {
      // 用户手工改变 URL，走这个分支
      console.log('do reload')
      next()
      this.reload()
    }
  },
  methods: {
    reload () {
      const query = this.$route.query
      this.myParams = JSON.parse(JSON.stringify(query))
      // 结果置空
      this.myC = ''
      this.autoRun = (query.autoRun === 'true' || query.autoRun === true)
      if (this.autoRun) {
        this.doRun()
      }
    },
    changeParams () {
      this.$router.push({
        name: 'adder',
        query: {
          a: '15',
          b: '25'
        }
      })
    },
    doRun () {
      this.$router.push({
        name: 'adder',
        query: this.myParams,
        params: {
          // 不用reload
          noReload: true
        }
      })
      this.myC = parseInt(this.myParams.a) + parseInt(this.myParams.b)
    }
  }
}
</script>

<style>

</style>
