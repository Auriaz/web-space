<template>
    <v-app-bar elevate-on-scroll clipped-right fixed >
        <nav class="nav deep-purple">
            <v-toolbar-title class="nav-logo">
                <router-link to="/">
                    <span class="cyan--text font-weight-bold font-lg font-italic">Web</span>
                    <span class="deep-orange--text font-lg font-wt-b font-oblique">SPACE</span>
                </router-link> 
            </v-toolbar-title>

            <v-btn small fab outlined class="nav-wrap-sm ma-2" color="cyan" @click="active = !active">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
          
            <v-btn small fab outlined class="nav-open ma-2" color="cyan" @click.stop="drawer = !drawer">
                <v-icon>mdi-menu</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <div :class="{flex: active}" class="nav-wrap">
                <span class="nav-list">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#contact" class="nav-section cyan--text font-weight-bold" v-on="on">
                                Kontakt
                            </a>   
                        </template>
                    
                        <span>Kontakt</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#price" class="nav-section cyan--text font-weight-bold" v-on="on">
                                Cennik
                            </a>   
                        </template>
                    
                        <span>Cennik</span>
                    </v-tooltip>                    
                    
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#about" class="nav-section cyan--text font-weight-bold d-none d-md-block" v-on="on">
                                O firmie
                            </a>   
                        </template>
                    
                        <span>O firmie</span>
                    </v-tooltip>                    
                    
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <a href="/#introduction" class="nav-section cyan--text font-weight-bold" v-on="on">
                                Oferta
                            </a>   
                        </template>
                    
                        <span>Oferta</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn small fab outlined class="d-none d-md-block ma-3 mx-10" color="cyan" @click.stop="drawer = !drawer" v-on="on">
                                <v-icon>mdi-menu</v-icon>
                            </v-btn>   
                        </template>
                    
                        <span>Menu</span>
                    </v-tooltip>
                </span>
            </div>
        </nav>


        <v-navigation-drawer app temporary absolute v-model="drawer" right class="deep-purple nav-drawer" >
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn small fab outlined class="nav-drawer--close ma-3 mx-10" color="cyan" @click.stop="drawer = !drawer" v-on="on">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>   
                </template>
            
                <span>zamknij menu</span>
            </v-tooltip>

            <v-row align="center" class="pa-0" >
                    <v-col :cols="activated ? 4 : 12">
                        <v-list class="list" transition="slide-x-transition">
                            <v-list-item-group>
                                <v-layout column align-center>
                                    <v-flex class="mt-5">
                                        <v-avatar size="100">
                                            <v-img v-if="online && user" :src="user.avatar_url" :alt="user.avatar"></v-img>
                                            <v-img v-else src="/uploads/images/avatar/dr_strange.jpg" alt="logo web-space"></v-img>
                                        </v-avatar>
                                    </v-flex>

                                    <v-flex class="mt-1 mb-4">
                                        <h1 v-if="online && user" class="title cyan--text">{{ user.first_name }} {{ user.last_name }}</h1>
                                        <h1 v-else class="title white--text">Web-Space.pl</h1>
                                    </v-flex>

                                    <v-flex class="mt-1 mb-5">
                                        <v-popup @projectAdded="snackbar = true" :name="name" :colorBtn="colorBtn"/>
                                    </v-flex>
                                </v-layout>

                                <v-layout column align-center >
                                    <transition-group name="fade" tag="div">
                                        <v-list-item class="list-item" v-show="drawer" v-for="link in links" :key="link.id" router :to="link.route">
                                            <v-list-item-icon class="pl-12">
                                                <v-icon class="fas" :class="`cyan--text ${link.icon}`" ></v-icon>
                                            </v-list-item-icon>

                                            <v-list-item-content>
                                                <v-list-item-title v-text="link.text" class="white--text"></v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item class="list-item" v-show="drawer" v-if="online && user" @click="logout" router to="/" key="4">
                                            <v-list-item-icon class="pl-12">
                                                <v-icon class="cyan--text">mdi-logout-variant</v-icon>
                                            </v-list-item-icon>

                                            <v-list-item-content>
                                                <v-list-item-title class="white--text" >Wyloguj się</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>

                                        <v-list-item class="list-item" v-show="drawer" v-else @click="activated = !activated" key="3">
                                            <v-list-item-icon class="pl-12">
                                                <v-icon class="cyan--text">mdi-login-variant</v-icon>
                                            </v-list-item-icon>

                                            <v-list-item-content>
                                                <v-list-item-title   class="white--text" >Logowanie</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </transition-group>
                                </v-layout>
                            </v-list-item-group>
                        </v-list>
                    </v-col>

                <transition name="slide-fade" tag="div">
                    <v-col class="login" v-if="activated && !online">
                        <span class="login-title">Logowanie</span>

                        <v-form-login  :online="online"></v-form-login>
                                    <!-- use a dynamic transition name -->
                    </v-col>
                </transition>
            </v-row>
            <!-- <v-preloader ></v-preloader>     -->
        </v-navigation-drawer>
    </v-app-bar>
</template>

<script>
import VFormLogin from '../forms/VFormLogin'
import VPopup from '../modals/VPopup'
    // import VPreloader from '../loader/VPreloader'


export default {
    name: 'v-nav',
    components: {
        VFormLogin: VFormLogin,
        VPopup: VPopup,
            // VPreloader: VPreloader

    },
    data() {
        return {
            active: false,
            drawer: false,    
            name: 'skontaktuj się',
            colorBtn: 'cyan white--text',
            activated: false,
            links: [
                {id: 0, icon: 'fa-home',           text: 'Strana główna',     route: '/'},
                {id: 1, icon: 'fa-street-view',    text: 'Nasze projekty',   route: '/projects'},
                {id: 2, icon: 'fa-users',           text: 'Zespół',          route: '/team'},
            ],
        
        }
    },
    props: ['online', 'user'],
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    },

    mounted () {

    }

}
</script>

<style lang="scss" scoped>
    @import '../../styles/settings/_colors';  
    
    .nav-drawer {
        width: 100vw !important;
        transition: all .7s ease-in-out;

        &--close {
            position: absolute;
            top: 10px;
            right: 0;
            z-index: 1;
        }
    }

    .flex {
        display: flex;
    }

    .v-app-bar--is-scrolled {
        position: fixed;
        opacity: 0.95;
        // background-color: $mainPurple !important;
    }

    .list {
       

        &-item {
            width: 280px;
            height: auto;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;

        }
    }

    .login {
        width: 400px;
        height: auto;
        position: absolute;
        right: 20%;
        top: 10%;
        border: 2px solid $mainWhite;
        border-radius: 10px;
        background-color: $mainWhite;
        display: flex;
        flex-direction: column;
        align-items: center;


        &-title {
            width: 250px;
            height: 80px;
            position: absolute;
            top: -40px;
            background-color: $mainPurple;
            border: 2px solid $mainWhite;
            border-radius: 10px;
            color: $mainWhite;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }   

    @mixin div-childs($values...) {
        @each $var in $values {
            &:nth-child(#{$var}) {
               transition-delay:  #{$var * 0.15}s;


            }
        }
    }

    .slide-fade-enter-active, .slide-fade-leave-active {
        opacity: 1;
        transition: opacity 1.5s ease-in-out;
    }
    .slide-fade-enter, .slide-fade-leave-active {
        opacity: 0;
        transform: translateX(800px);
    }

    .fade-enter-active, .fade-leave-active {
        transition: transform 1s cubic-bezier(.34,-0.41,.62,1.21);
        @include div-childs(1 , 2 , 3 , 4);
    }

    .fade-enter, .fade-leave-to {
        transform: translateX(100px) skewX(20deg);

    }
    
</style>