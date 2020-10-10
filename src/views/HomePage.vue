<template>
  <div class="home">
    <TopbarComponent :componentName="componentName"/>
    <HomeComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TopbarComponent from '@/components/TopbarComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';

@Component({
  components: {
    TopbarComponent,
    HomeComponent,
  },
})
export default class HomePage extends Vue {
  @Prop(String) readonly componentName!: string;
}
</script>
