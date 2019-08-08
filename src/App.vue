<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  data: () => ({
    //
  }),
});
</script>
<style>
#app{
  flex:1;
  margin:0;
  overflow:hidden hidden;
  padding: 0;
}
html,body{
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow-y:hidden;
}
</style>

