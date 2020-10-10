<template>
  <div>
    <h2> Operations: {{ cards }} </h2>
    <vs-card-group>
      <vs-card type="1" v-for="card in cards" :key="card" @click="handleClick">
          <template #img>
              <img src="@/assets/undraw_transfer_money_rywa.svg">
          </template>
          <template #title>
              <h3>Borrowing n° {{card}}</h3>
          </template>
          <template #text>
              You borrowed <b>1000$</b>. Current total cost: {{ 1000 + (1000*(1/100))}}.
          </template>
      </vs-card>
    </vs-card-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class BorrowerComponent extends Vue {
  cards = 5;

  handleClick() {
    this.$router.push({ path: `/detail/${(Math.random() * 100).toPrecision(2)}` });
  }
}
</script>

<style lang="scss">
.vs-card__group-next, .vs-card__group-prev {
  position: fixed !important;
  background-color: rgba(245, 245, 245, 0.5) !important;
  border-radius: 100%;
}

.vs-card__group-next {
  left: unset !important;
  right: 5px !important;
}
.vs-card__group-prev {
  right: unset !important;
  left: 5px !important;
}
</style>
