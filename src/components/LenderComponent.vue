<template>
    <div>
        <h2> Operations: {{ cards }} </h2>
        <vs-card-group>
            <vs-card v-for="card in cards" :key="card" @click="handleClick">
                <template #img>
                    <img src="@/assets/undraw_invest_88iw.svg">
                </template>
                <template #title>
                    <h3>Lending n° {{card}}</h3>
                </template>
                <template #text>
                    This lending costed <b>1000$</b> and yielded <b>1200$</b>.
                </template>
            </vs-card>
        </vs-card-group>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Types from '@/store/glossary';

@Component({
  components: {},
  computed: {},
})
export default class LenderComponent extends Vue {
  cards = 3;

  static transactionBuilder(id: string) {
    return {
      id: parseInt(id, 10),
      recipient: ['Kevin POIROT', ''],
      sender: ['David LAFARGE', ''],
      amount: 1000,
      due: Date.now(),
      interest: 0.01,
    };
  }

  handleClick() {
    const id = (Math.random() * 100).toPrecision(2);
    const lendings = LenderComponent.transactionBuilder(id);
    this.$store.commit({ type: Types.m.MUTATE_LENDINGS, lendings });
    this.$router.push({ path: `/detail/${id}` });
  }
}
</script>

<style lang="scss">
img {
    width: 20%;
    height: auto;
}
</style>
