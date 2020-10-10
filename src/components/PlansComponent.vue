<template>
  <div>
    <vs-row justified="center" align="center" direction="column">
      <vs-col>
        <img src="@/assets/undraw_contrast_vb82.svg">
        <h3> Compare plans </h3>
      </vs-col>
    </vs-row>
    <vs-table class="plans-table">
      <template #thead class="plans-table-head">
        <vs-tr>
          <vs-th>
            Free membership
          </vs-th>
          <vs-th>
            Premium membership
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr :key="i" v-for="(tr, i) in features" :data="tr" class="plans-table-first-child">
          <vs-td class="plans-table-node">
            {{ tr.freenode }}
          </vs-td>
          <vs-td class="plans-table-node">
            {{ tr.businessnode }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <vs-row justify="center" align="center">
      <vs-switch v-model="activeLoading" @click="dialogActive = !dialogActive">
        {{ isActive }} premium membership
      </vs-switch>
    </vs-row>
    <vs-dialog width="250px" not-center v-model="dialogActive">
        <template #header>
          <h4 class="not-margin">
            {{ isNotActive }} <b>Premium Membership</b>
          </h4>
        </template>
        <div class="con-content">
          <p>
            You're about to unlock additional features by spending 3.99€ per month starting today.
            That's what you want?
          </p>
        </div>
        <template #footer>
          <div class="con-footer">
            <vs-button @click="handleOk" transparent>
              Ok
            </vs-button>
            <vs-button @click="handleCancel" dark transparent>
              Cancel
            </vs-button>
          </div>
        </template>
      </vs-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class PlansComponent extends Vue {
  activeLoading = false;

  dialogActive = false;

  features = [
    { freenode: '0€/month', businessnode: '3.99€/month' },
    { freenode: 'Borrowing 150€/quarter', businessnode: 'Up to 10000€' },
    { freenode: 'Lending 150€/quarter', businessnode: 'Up to 10000€' },
    { freenode: 'Normal support', businessnode: '24/7 Priority support' },
    { freenode: 'One account', businessnode: 'Up to three accounts' },
  ]

  handleCancel() {
    this.dialogActive = false;
    this.activeLoading = !this.activeLoading;
  }

  handleOk() {
    this.dialogActive = false;
  }

  get isActive() {
    return this.activeLoading ? 'Disable' : 'Enable';
  }

  get isNotActive() {
    return this.activeLoading ? 'Enable' : 'Disable';
  }
}
</script>

<style lang="scss">
img {
  width: 40%
}

.plans-table-first-child :nth-child(2) {
  font-weight: 800;
}

.plans-table-node {
  text-align: start;
}
.vs-table table{
  padding: 0 5px 0 10px!important;
  background-color: #1a1a1a !important;
  max-width: 100% !important;
  min-width: 100px !important;
}

.vs-table__th {
  width: 150px !important;
  max-width: 150px !important;
}

.vs-table__thead .vs-table__th {
  background-color: #5b3cc4;
  text-align: right;
}

</style>
