<template>
<div>
    <v-overlay class="d-none d-md-block"> 
        <v-wallpaper class="d-none d-md-block"/>
    </v-overlay>

    <div class="home">
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-btn outlined fab href="/#introduction" small class="home-btn white--text" v-on="on">
                    <i class="fas fa-arrow-alt-circle-down fa-2x"></i>
                </v-btn>
            </template>
                    
            <span>przewiń w dół</span>
        </v-tooltip>

        <div class="home-entry">
            <span class="home-entry__box">
                <img class="home-entry__box--image d-none d-md-block" src="../assets/images/entry5.jpg" alt="entry">
            </span>

            <div class="home-entry__card">
                <v-card-entry :content="fetchEntry"/>
            </div>
        </div>

        <div class="home-introduction" id="introduction">
            <span class="home-entry__box d-none d-md-block">
                <img class="home-entry__box--image" src="../assets/images/about.jpg" alt="entry">
            </span>

            <div class="home-introduction__cards">
               
                <v-card-introduction v-for="introduction in fetchIntroductions" :key="introduction.id" :item="introduction"/>
            </div>
        </div>

        <div class="home-about d-none d-md-block" id="about">
            <span class="home-entry__box d-none d-md-block">
                <img class="home-entry__box--image d-none d-md-block" src="../assets/images/about.jpg" alt="entry">
            </span>

            <div class="home-about__cards" v-scroll-animation>
                 <v-panel-informations />
            </div>
        </div>

        <div class="home-price" id="price">
            <div class="home-price__cards">
                <v-card-price v-for="pack in  fetchPackages" :key="pack.id" :item="pack"/>
            </div>
        </div>

        <div class="home-contact" id="contact">
            <div class="home-contact__cards">
                <v-card-contact :item="fetchContact"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VCardEntry  from '../components/cards/VCardEntry';
import VCardIntroduction  from '../components/cards/VCardIntroduction';
import VPanelInformations  from '../components/panels/VPanelInformations';
import VCardPrice  from '../components/cards/VCardPrice';
import VCardContact  from '../components/cards/VCardContact';
import VWallpaper from '../components/overlays/VWallpaper';
import VOverlay from '../components/overlays/VOverlay';

export default {
    name: 'home',
    components:{
        VWallpaper: VWallpaper,
        VOverlay: VOverlay,
        VCardIntroduction: VCardIntroduction,
        VPanelInformations: VPanelInformations,
        VCardPrice: VCardPrice,
        VCardContact: VCardContact,
        VCardEntry: VCardEntry
    },
    computed: {

        fetchEntry() {
            return this.$store.getters.getEntry;
        },
        fetchIntroductions() {
            return this.$store.getters.getIntroductions
        },
        fetchPackages() {
            return this.$store.getters.getPackages
        },
        fetchContact() {
            return this.$store.getters.getContact
        },
        // fetchAbout() {
        //     return this.$store.getters.getInformations
        // },     
    }

}
</script> 
