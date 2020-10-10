<template>
  <div>
    <TopbarComponent :componentName="componentName"/>
    <ImmeubleComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ImmeubleComponent from '@/components/ImmeubleComponent.vue';
import TopbarComponent from '@/components/TopbarComponent.vue';

@Component({
  components: {
    ImmeubleComponent,
    TopbarComponent,
  },
})
export default class ImmeublePage extends Vue {
  @Prop(String) readonly componentName!: string;
}
</script>

<style lang="sass" scoped>

</style>
