<template>
  <div>
    <TopbarComponent :componentName="componentName"/>
    <PlansComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PlansComponent from '@/components/PlansComponent.vue';
import TopbarComponent from '@/components/TopbarComponent.vue';

@Component({
  components: {
    PlansComponent,
    TopbarComponent,
  },
})
export default class PlansPage extends Vue {
  @Prop(String) readonly componentName!: string;
}
</script>

<style lang="sass" scoped>

</style>
