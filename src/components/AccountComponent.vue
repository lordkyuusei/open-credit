<template>
  <div>
    {{ getAccount }}
    <vs-row justify="space-around" align="center" direction="column">
      <h3> Your Reputation: </h3>
      <h2>{{ getReputation }}% ⭐</h2>
    </vs-row>
    <vs-row justify="center" align="center" direction="column">
      <h3>Your accounts: </h3>
      <vs-col :key="i" v-for="(provider, i) in providers">
        <p>#{{i}}: {{ provider.name }}, with:</p>
        <p>1. BIC: {{ provider.bic }}.</p>
        <p>2. Scope: {{ provider.consentModel }}</p>
      </vs-col>
    </vs-row>
    <vs-row justify="center" align="center" direction="column">
      <h3>Your token: </h3>
      <vs-col>
        <p><b>{{ accessToken.token_type }}</b> access token:
        <i><b>{{ myAccessToken }}</b></i></p>
        <p>Expires in <b>{{ accessToken.expires_in }}s</b>,
        allows you to access <b>{{ accessToken.scope }}</b>.</p>
      </vs-col>
    </vs-row>
    <vs-row justify="center" align="center">
      <vs-button @click="disconnect"> Disconect your account </vs-button>
    </vs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { AccessToken } from '@/store/interfaces';

@Component({
  components: {},
  computed: {
    ...mapGetters({
      account: 'account',
      providers: 'providers',
      accessToken: 'accessToken',
    }),
  },
})
export default class AccountComponent extends Vue {
  private account!: [string, string];

  private providers!: [];

  private accessToken!: AccessToken;

  get myAccessToken() {
    return this.accessToken.access_token != null
      ? `${this.accessToken.access_token.substring(0, 10)}...` : 'None';
  }

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
