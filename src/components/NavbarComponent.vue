<template>
    <vs-navbar class="navigation-bar">
        <vs-navbar-item>
            <router-link to="/home">🐱‍👓</router-link>
        </vs-navbar-item>
        <vs-navbar-item></vs-navbar-item>
        <vs-navbar-item>
            <router-link to="/transactions">💱</router-link>
        </vs-navbar-item>
        <vs-navbar-item></vs-navbar-item>
        <vs-navbar-item>
            <router-link to="/immeuble">🏢</router-link>
        </vs-navbar-item>
        <vs-navbar-item></vs-navbar-item>
        <vs-navbar-item>
            <router-link to="/account">
                <vs-avatar primary>
                    <template #text>
                        Your Name
                    </template>
                </vs-avatar>
            </router-link>
        </vs-navbar-item>
     </vs-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class NavbarComponent extends Vue {}
</script>

<style lang="scss" scoped>
.navigation-bar {
    top: auto;
    bottom: 0px;
    background-color: #1a1a1a;
}
</style>
