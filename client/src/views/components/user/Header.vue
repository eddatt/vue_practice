<template lang="pug">
  <v-toolbar class="primary" app :clipped-left="clipped" dark>
    <v-toolbar-side-icon @click.stop="setDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>骨干管理系统</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="font-weight-medium font-italic title">{{userInfo['username']}}</span>
      <v-btn  @click="signOut" flat dark >
        <span>离开</span>
          <v-icon  right>exit_to_app</v-icon>
      </v-btn>
    //- MyMessage(ref="message")
  </v-toolbar>
</template>
<script>
import api from '@/api'
import util from '@/utils'
export default {
  name: 'top',
  data () {
    return {
      end:'/user/welcome',
      self: this,
      items: null,
      
    }
  },
  computed: {
    userInfo () {
      console.log("now is into userinfo")
      console.log(this.$store.getters.getUserInfo)
      return this.$store.getters.getUserInfo
    }
  },
  props: ['clipped', 'miniVariant', 'drawer'],
  methods: {
    setDrawer () {
      this.$emit('setDrawer', !this.drawer)
    },
    async signOut (){
      sessionStorage.removeItem('user')
      util.toRouter(this.end, this)

      console.log("now is signOut")

    }
  }
}
</script>
<style lang="less" scoped>
.bcb {
  &>li {
    a.v-breadcrumbs__item a{
      color: #EEEEEE !important;
      font-weight: 400;
    }
    a.v-breadcrumbs__item--disabled a{
      color: #BDBDBD !important;
      font-weight: 300;
    }
  }
}
</style>
