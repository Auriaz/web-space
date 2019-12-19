<template>
    <v-content 
        v-if="online" 
        class="settings"
    >
        <v-row align-content="center">
            <v-col class="col-12 my-7">
                <h1 class="title text-center grey--text">Ustawienia</h1>
            </v-col>

            <v-container class="settings__container">  
                    <v-layout 
                        row 
                        justify-space-between 
                        class="settings__cards"
                    >
                        <router-link></router-link>
                    </v-layout>
            </v-container>
        </v-row>

        <v-menu-settings/>
    </v-content>
</template>

<script>
import VMenuSettings from '../components/navigations/VMenuSettings'

export default {
    name: 'account',
    components: {
   VMenuSettings: VMenuSettings
    },
    computed: {
        online() {
            return this.$store.getters.online
        },
    },
}
</script>

<style lang="scss" scoped>
    .settings {
        margin-top: 60px;

        &__container {
        }

        &__cards {

        }
    }
</style>

