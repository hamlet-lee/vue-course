<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/new">新增</router-link> |
      <router-link to="/search">查找</router-link> |
      <router-link to="/manage">管理</router-link> |
      <router-link to="/chart">图表展示</router-link>
    </div>
    <router-view/> -->

    <div class="layout">
        <!-- 参考：https://www.iviewui.com/components/layout -->
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <!-- https://www.iviewui.com/components/menu -->
                <Menu :active-name="activeName" theme="dark" width="auto" :class="menuitemClasses" @on-select="onSelect">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>首页</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="ios-search"></Icon>
                        <span>新增</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="ios-settings"></Icon>
                        <span>查找</span>
                    </MenuItem>
                    <MenuItem name="1-4">
                        <Icon type="ios-settings"></Icon>
                        <span>管理</span>
                    </MenuItem>
                     <MenuItem name="1-5">
                        <Icon type="ios-settings"></Icon>
                        <span>图表展示</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                   <router-view/>
                </Content>
            </Layout>
        </Layout>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapsed: false,
      activeName: ''
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    onSelect (itemName) {
      let navMap = {
        '1-1': '/',
        '1-2': '/new',
        '1-3': '/search',
        '1-4': '/manage',
        '1-5': '/chart'
      }
      console.log(itemName)
      // https://router.vuejs.org/zh/guide/essentials/navigation.html
      this.$router.push({
        path: navMap[itemName]
      })
    }
  },
  watch: {
    '$route.name': {
      handler: function (newVal, oldVal) {
        let pathToNameMap = {
          'home': '1-1',
          'new': '1-2',
          'search': '1-3',
          'manage': '1-4',
          'chart': '1-5'
        }
        this.activeName = pathToNameMap[newVal]
        console.log(newVal)
      },
      immediate: true
    },
    deep: true
  }
}
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>

<!--style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style-->
