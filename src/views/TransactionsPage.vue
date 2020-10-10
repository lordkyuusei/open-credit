<template>
  <div>
    <TopbarComponent :componentName="componentName"/>
    <div class="transactions-button">
      <vs-button primary
        size="xl"
        :class="{ active: this.currentTab, inactive: !this.currentTab }"
        :active="this.currentTab"
        v-on:click="updateTab(true)">
          Lending
      </vs-button>
      <vs-button primary
        size="xl"
        :class="{ active: !this.currentTab, inactive: this.currentTab }"
        :active="!this.currentTab"
        v-on:click="updateTab(false)">
          Borrowing
      </vs-button>
    </div>
    <LenderComponent v-if="this.currentTab" />
    <BorrowerComponent v-if="!this.currentTab" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import LenderComponent from '@/components/LenderComponent.vue';
import TopbarComponent from '@/components/TopbarComponent.vue';
import BorrowerComponent from '@/components/BorrowerComponent.vue';

@Component({
  components: {
    TopbarComponent,
    LenderComponent,
    BorrowerComponent,
  },
})
export default class TransactionsPage extends Vue {
  @Prop(String) readonly componentName!: string;

  tab = true;

  beforeMount() {
    const tempo: unknown = this.$route.params.currentTab;
    this.currentTab = tempo as boolean;
  }

  updateTab(value: boolean) {
    this.currentTab = value;
  }

  get currentTab() {
    return this.tab;
  }

  set currentTab(value: boolean) {
    this.tab = value;
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 10px 10px !important;
}

.transactions-button {
  padding-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.inactive {
  opacity: 0.3
}
</style>
