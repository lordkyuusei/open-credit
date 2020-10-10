<template>
  <div id="app">
    <div id="content">
      <NavbarComponent v-if="!isConnectionScreen"/>
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavbarComponent from '@/components/NavbarComponent.vue';

@Component({
  components: {
    NavbarComponent,
  },
})
export default class Home extends Vue {
  get isConnectionScreen() {
    return this.$route.path === '/';
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  width: 100%;
  background-color: #212121;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#content {
  height: 100%;
  width: 100%;
}
</style>
