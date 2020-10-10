<template>
    <div class='account-component'>
      <vs-button @click="disconnect"> Disconect your account </vs-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AccountComponent extends Vue {
  disconnect() {
    this.$router.replace({ name: 'Connect & Register' });
  }
}
</script>

<style lang="sass" scoped>
</style>
