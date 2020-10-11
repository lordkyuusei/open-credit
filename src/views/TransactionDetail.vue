<template>
  <div>
    <TopbarComponent componentName="DETAILS"/>
    <vs-row justify="center" align="center" direction="column" class="details-text">
      <vs-col> 💁‍♂️ Sender: {{ currentTransaction.sender[0] }} </vs-col>
      <vs-col> 🙋‍♂️ Receiver: {{ currentTransaction.recipient[0] }} </vs-col>
      <vs-col> 📆 Due date: {{ currentTransaction.due }} </vs-col>
      <vs-col> 🍙 Transaction type: {{currentTransaction.sender }} </vs-col>
      <vs-col> 💲  Amount: {{ currentTransaction.amount }} </vs-col>
      <vs-col> 💱 Interests: {{ currentTransaction.interests }} </vs-col>
      <vs-col> 💰 Total: {{ 1100 }} </vs-col>
    </vs-row>
    <vs-row justify="center" align="center" direction="column">
      <vs-button>Refund now</vs-button>
    </vs-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopbarComponent from '@/components/TopbarComponent.vue';
import { mapGetters } from 'vuex';

@Component({
  components: {
    TopbarComponent,
  },
  computed: {
    ...mapGetters({
      lendings: 'lendings',
      borrowings: 'borrowings',
    }),
  },
})
export default class TransitionDetail extends Vue {
  private lendings!: {};

  private borrowings!: {};

  private transactionType!: string;

  get currentTransaction() {
    const { length } = Object.keys(this.lendings);
    this.transactionType = length === 0 ? 'Borrow' : 'Lend';
    return length === 0 ? this.borrowings : this.lendings;
  }
}

</script>

<style lang="scss" scoped>
.details-text {
  padding: 10px 0 0 50px;
  text-align: start;
}
</style>
