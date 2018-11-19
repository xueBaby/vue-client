<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue';
//  import {reqAddress} from './api';
//  import {mapState} from 'vuex'

  export default {
//    async mounted(){
//      const result = await reqAddress('31.38098','121.50146')
//      console.log(result);
//    },
    mounted () {
      // 异步获取食品分类列表
      this.$store.dispatch('getAddress');

      // 异步获取食品商家列表

    },
//    computed:{
//      ...mapState('ca')
//
//    },
      components: {
        FooterGuide
      }
    }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
