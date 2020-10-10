<template>
    <vs-navbar center-collapsed class="navigation-bar">
        <template #left>
            {{ componentName }}
        </template>
    </vs-navbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class TopbarComponent extends Vue {
  @Prop(String) readonly componentName!: string;
}
</script>

<style lang="scss" scoped>
.navigation-bar {
  position: relative;
  letter-spacing: 3px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
  font-size: 25px;
  background-color: #242331;
  color: white;
}
</style>
