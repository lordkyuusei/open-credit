<template>
  <div>
    <TopbarComponent componentName="DETAILS"/>
    <vs-row justify="center" align="center" direction="column" class="details-text">
      <vs-col> 💁‍♂️ Sender: {{}} </vs-col>
      <vs-col> 🙋‍♂️ Receiver: {{}} </vs-col>
      <vs-col> 📆 Due date: {{ new Date(2020, 31, 10) }} </vs-col>
      <vs-col> 🍙 Transaction type: {{ }} </vs-col>
      <vs-col> 💲  Amount: {{  }} </vs-col>
      <vs-col> 💱 Interests: {{ }} </vs-col>
      <vs-col> 💰 Total: {{ }} </vs-col>
    </vs-row>
    <vs-row justify="center" align="center" direction="column">
      <vs-button>Refund now</vs-button>
    </vs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopbarComponent from '@/components/TopbarComponent.vue';

@Component({
  components: {
    TopbarComponent,
  },
})
export default class TransitionDetail extends Vue {}
</script>

<style lang="scss" scoped>
.details-text {
  padding: 10px 0 0 50px;
  text-align: start;
}
</style>
