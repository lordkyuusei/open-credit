<template>
  <div>
    <TopbarComponent :componentName="componentName"/>
    <AccountComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import AccountComponent from '@/components/AccountComponent.vue';
import TopbarComponent from '@/components/TopbarComponent.vue';

@Component({
  components: {
    AccountComponent,
    TopbarComponent,
  },
})
export default class AccountPage extends Vue {
  @Prop(String) readonly componentName!: string;
}
</script>

<style lang="sass">

</style>
