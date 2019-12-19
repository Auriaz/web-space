<template>
    <v-app>
        <v-nav :user="user" :online="online"/>   
        <v-content>

            <router-view ></router-view>
            <v-snack-bar-box />
            <v-radial-menu v-if="online && user"></v-radial-menu>
            <v-progress-site v-if="loading"></v-progress-site>
        </v-content>

        <v-foot/>
    </v-app>
</template>

<script>
    import VNav from './components/navigations/VNav.vue'
    import VRadialMenu from './components/navigations/VRadialMenu.vue'
    import VFoot from './components/footer/VFoot'
    import VProgressSite from './components/progress/VProgressSite'
    import VSnackBarBox from './components/alerts/VSnackBarBox'
    // import VPreloader from './components/loader/VPreloader'


    export default {
        name: 'App',
        components: { 
            VNav: VNav, 
            VFoot: VFoot,
            VSnackBarBox: VSnackBarBox,
            VRadialMenu: VRadialMenu,
            VProgressSite: VProgressSite,
            // VPreloader: VPreloader
            
        },
        computed: {
            messages() {
                return this.$store.getters.getMessages
            },
            online() {
                return this.$store.getters.online
            },
            user() {
                return this.$store.state.user
            },
            loading() {
                return this.$store.getters.loading
            }
        },
        created() {
            // this.$store.dispatch('getEntry')
            // this.$store.dispatch('getIntroductions')
            // this.$store.dispatch('getPackages')
            // this.$store.dispatch('getInformations')
            
        },

    }
</script>

<style lang="scss" scoped>

</style>