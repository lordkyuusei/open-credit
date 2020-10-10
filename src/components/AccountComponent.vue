<template>
  <div>
    {{ getAccount }}
    <vs-row justify="space-around" align="center" direction="column">
      <h3> Your Reputation: </h3>
      <h2>{{ getReputation }}% ⭐</h2>
    </vs-row>
    <vs-row justify="center" align="center">
      <vs-button @click="disconnect"> Disconect your account </vs-button>
    </vs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  components: {},
  computed: {
    ...mapGetters({
      account: 'account',
    }),
  },
})
export default class AccountComponent extends Vue {
  private account!: [string, string];

  reputation = (Math.random() * 100).toPrecision(2);

  get getAccount() {
    return this.account[0];
  }

  get getReputation() {
    return this.account[0] === 'Kevin POIROT' ? 99 : this.reputation;
  }

  disconnect() {
    this.$router.replace({ name: 'Connect & Register' });
  }
}
</script>

<style lang="sass" scoped>
</style>
