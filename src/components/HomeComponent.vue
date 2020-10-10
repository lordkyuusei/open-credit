<template>
    <div class="home-component">
        <vs-row justify="center" align="center" direction="column">
            <v-col w="2">
                <h1>Your situation</h1>
            </v-col>
            <v-col w="2">
                <router-link :to=" { name: 'Transactions', params: { currentTab: true }}">
                    <vs-card @click="handleClick">
                        <template #img>
                            <img src="@/assets/undraw_invest_88iw.svg">
                        </template>
                        <template #title>
                            <h3>Borrowings</h3>
                        </template>
                        <template #text>
                            Borrowed: <b>1000$</b>. Total cost: {{ 1000+(1000*(1/100))}}.
                        </template>
                    </vs-card>
                </router-link>
            </v-col>
            <v-col w="2">
                ___
            </v-col>
            <v-col w="2">
                <router-link :to=" { name: 'Transactions', params: { currentTab: false }}">
                    <vs-card @click="handleClick">
                        <template #img>
                            <img src="@/assets/undraw_transfer_money_rywa.svg">
                        </template>
                        <template #title>
                            <h3>Lendings</h3>
                        </template>
                        <template #text>
                            Lended: <b>6000$</b>. Total yield: {{ 6000 + (1000*(1/100))}}.
                        </template>
                    </vs-card>
                </router-link>
            </v-col>
        </vs-row>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class HomeComponent extends Vue {
  event!: string;

  handleClick(event: string) {
    console.log(event);
    this.event = event;
  }
}
</script>

<style lang="scss" scoped>
img {
    width: 80%;
}
</style>
