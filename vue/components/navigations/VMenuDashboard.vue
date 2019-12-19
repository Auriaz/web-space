<template>
    <v-navigation-drawer
        expand-on-hover
        permanent
    >
        <template v-slot:prepend>
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item
                    link
                    two-line
                >
                    <v-list-item-content>
                        <v-list-item-title class="title">Sandra Adams</v-list-item-title>

                        <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-icon>mdi-menu-down</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </template>

        <v-divider></v-divider>

        <v-list
            nav
            dense
        >
            <v-list-item link="/dashboard/calendar" >
                <v-list-item-icon>
                    <v-icon>mdi-calendar</v-icon>
                </v-list-item-icon>
                
                <v-list-item-title>Lista wydarzeń</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'v-menu-dashboard',
    data() {
        return {
             links: [
                {icon: 'mdi-calendar', text: 'Lista wydarzeń', route: '/dashboard/calendar'},
            ], 
        }
    },

}
</script>

<style lang="scss" scoped>
</style>