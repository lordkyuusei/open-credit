<template>
  <div class='connect-register'>
    <vs-navbar class='connect-navbar'> OPEN CREDIT APP </vs-navbar>
    <vs-row justify='center'>
      <img src='@/assets/undraw_coming_home_52ir.svg' />
    </vs-row>
    <h1>Welcome.</h1>
    <vs-row class='mh' align='center' justify='center'>
      <vs-input
        success
        v-model='bankAccount'
        label-placeholder='Bank Account n°'
      >
        <template v-if="!isSuccess" #message-danger>
          Incorrect bank account.
        </template>
      </vs-input>
    </vs-row>
    <vs-row></vs-row>
    <vs-row class='mh' align='center' justify='center'>
      <vs-input
        success
        v-model='password'
        type='password'
        label-placeholder='Password'
      >
        <template v-if="!isSuccess" #message-danger>
          Incorrect password.
        </template>
      </vs-input>
    </vs-row>
    <vs-row class='mh' align='center' justify='center'>
      <vs-button @click='connect' size='xl'>Connect</vs-button>
    </vs-row>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Types from '@/store/glossary';

@Component({})
export default class ConnectRegister extends Vue {
  bankAccount = '';

  password = '';

  success = true;

  get isSuccess() {
    return this.success;
  }

  connect() {
    if (this.bankAccount !== '' && this.password !== '') {
      this.$store.dispatch({
        type: Types.a.CONNECT_ACCOUNT,
        account: [this.bankAccount, this.password],
      });
      this.success = true;
      this.$router.push({ name: 'Home' });
    } else {
      this.success = false;
    }
  }
}
</script>

<style lang='scss' scoped>
.connect-navbar {
  background-color: #5b3cc4;
  color: white;
}
.mh {
  height: 75px;
}
img {
  width: 80%;
}
.connect-register {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
