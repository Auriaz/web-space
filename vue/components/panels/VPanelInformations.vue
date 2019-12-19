<template>
    <div class="informations">
        <div class="informations__wrapper">
            <div class="informations__ring"></div>

            <div class="informations__box"
                v-for="item in informations"
                :key="item.id"
            >
                <div class="informations__box-images">  
                    <div :class="`informations__box-image informations__box-image-${item.id}`">
                        <v-btn
                            v-if="model == item.id"
                            fab 
                            color="cyan" 
                            class="deep-purple--text" 
                            width="8vh" 
                            height="8vh" 
                            @click="model=item.id"
                        >
                            <v-icon>{{item.icon}}</v-icon>
                        </v-btn>

                        <v-btn 
                            v-if="model != item.id" 
                            fab 
                            color="deep-purple" 
                            class="cyan--text" 
                            width="7vh"
                            height="7vh" 
                            @click="model=item.id"
                        >
                            <v-icon>{{item.icon}}</v-icon>
                        </v-btn>
                    </div>                            
                </div>
            </div>
                
            <v-carousel 
                v-model="model"
                :show-arrows="false" 
                :hide-delimiters="true"
                cycle
                reverse
                light
                :interval="10000"
                class="informations__carousel"
            >
                <v-carousel-item
                    v-for="item in informations"
                    :key="item.id"
                    transition="scale-transition"
                >   
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <div class="informations__carousel--line"></div>

                        <div class="informations__carousel--text">{{ item.description }}</div>
                    </v-row>
                </v-carousel-item>
            </v-carousel>           
        </div>

        <div  class="informations__box-responsive">
             <transition name="bounce">
                <div v-if="model == 1" class="informations__box-responsive--computer">
                    <div class="informations__box-responsive--computer-leg"></div>
                </div>
            </transition>

            <transition name="bounce">
                <div v-if="model == 1" class="informations__box-responsive--laptop">
                    <div class="informations__box-responsive--laptop-keyboard"></div>
                </div>
            </transition>

            <transition name="bounce">
                <div v-if="model == 1" class="informations__box-responsive--tablet informations__box-responsive--tablet-1">
                    <i class="fas fa-phone fa-rotate-180 informations__box-responsive--tablet-1-phone"></i>
                    <i class="fas fa-home informations__box-responsive--tablet-1-home"></i>
                    <i class="fas fa-power-off informations__box-responsive--tablet-1-off"></i>
                </div>
            </transition>

            <transition name="bounce">
                <div v-if="model == 1" class="informations__box-responsive--phone"></div>
            </transition>

            <transition name="bounce">
        
                <div v-if="model == 2 || model == 0" class="informations__dna">
                    <div :class="`informations__dna--dnaloader `" >
                        <v-icon v-for="item in 18" :key="item.index" class="icon"></v-icon>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-panel-informations',
    data() {
        return {
            model: 0,
        }
    },
    computed: {
        informations() {
            return this.$store.getters.getInformations
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../../styles/settings/_colors';   
    .informations {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-flow: wrap row;
        align-items: center;
        
        &__wrapper {
            width: 90%;
            height: 90%;
            position: relative;
        }

        &__ring {
            width: 60vh;
            height: 60vh;
            position: absolute;
            top: 0;
            left: -50vh;
            border: 1px solid $mainCyan;
            border-radius: 50%;
        }

        &__carousel {
            width: 70%;
            height: 60vh;
            position: absolute;
            top: 0;
            left: 25%;
            display: flex;
            flex-flow: wrap row;
            align-items: center;

            &--title {
                width: 100%;
                color: $mainCyan;
                position: absolute;
                background-color: rgba($color: $mainPurple, $alpha: 0.6);
                border-radius: 10px;
                text-align: center;
                padding: 20px;
                transform: translateX(-100px);
            }

            &--text {
                width: 100%;
                height: auto;
                background-color: rgba($color: $mainPurple, $alpha: 0.4);
                color: $mainCyan;
                padding: 25px;
                border-radius: 10px;
                border: 2px solid $mainCyan;
            }
        }

        &__images {
            position: absolute;
            top: 0;
            right: 0;
        }

        &__box {
            &-images {
                width: 60vh;
                height: 60vh;
                position: absolute;
                top: 0;
                left: -50vh;
            }            
            
            &-image {
                position: absolute;
                z-index: 1;

                &-0 {
                    top: 12vh;
                    right: 0vh;
                }                
                
                &-1 {
                    top: 26.5vh;
                    right: -3.5vh;
                }                
                
                &-2 {
                    top: 41vh;
                    right: 0vh;
                }
            }

            &-responsive {
                width: 500px;
                height: 300px;
                position: absolute;
                right: 0;

                &--computer {
                    width: 200px;
                    height: 100px;
                    position: absolute;
                    background-color: $mainDark;
                    top: 60px;
                    left: 25%;
                    border-radius: 3px; 

                    &::before {
                        content: '';
                        background-image: url('../../assets/images/pobrane.jpg');
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        width: 190px;
                        height: 90px;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                    }

                    &-leg {
                        content: '';
                        width: 60px;
                        height: 30px;
                        position: absolute;
                        background-color: $mainWhite;
                        bottom: -30px;
                        left: 75px;
                        clip-path: polygon(20% 0%, 80% 0, 85% 56%, 100% 80%, 98% 100%, 2% 100%, 0% 80%, 15% 56%);
                        border-radius: 3px; 

                        &::before {
                            content: '';
                            width: 60px;
                            height: 7px;
                            position: absolute;
                            background-color: darken($color: $mainWhite, $amount: 20%);
                            bottom: 0;
                            left: 0;
                            border-radius: 4px; 
                        }

                        &::after {
                            content: '';
                            width: 42px;
                            height: 3px;
                            position: absolute;
                            background-color: darken($color: $mainWhite, $amount: 5%);
                            bottom: 12px;
                            left: 9px;
                            border-radius: 3px; 
                        }
                    }
                }

                &--laptop {
                    width: 150px;
                    height: 100px;
                    position: absolute;
                    background-color: $mainDark;
                    top: 110px;
                    left: 5%;
                    border-radius: 3px; 

                    &::before {
                        content: '';
                        background-image: url('../../assets/images/pobrane.jpg');
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        width: 140px;
                        height: 90px;
                        position: absolute;
                        top: 5px;
                        left: 5px;
                    }

                    &-keyboard {
                        content: '';
                        width: 170px;
                        height: 7px;
                        position: absolute;
                        background-color: lighten($color: $mainDark, $amount: 45%);
                        bottom: -7px;
                        left: -10px;
                        border-radius: 0 0 5px 5px;

                        &::after {
                            content: '';
                            width: 174px;
                            height: 3px;
                            position: absolute;
                            background-color: lighten($color: $mainDark, $amount: 20%);
                            top: 0;
                            left: -2px;
                            border-radius: 0 0 3px 3px;  
                        }
                    }
                }

                &--tablet {
                    position: absolute;
                    background-color: $mainDark;
                    top: 110px;
                    left: 60%;
                    border-radius: 3px; 
                    
                    &-1 {         
                        width: 70px;
                        height: 100px;
                        transform: skew(5deg);

                        &::before {
                            content: '';
                            background-image: url('../../assets/images/tablet.jpg');
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                            width: 60px;
                            height: 80px;
                            position: absolute;
                            top: 8px;
                            left: 5px;
                        }

                        &-phone {
                            font-size: 0.4rem; 
                            position: absolute;
                            color: $mainGreen;
                            left: 10px;
                            bottom: 2px;
                        }

                        &-home {
                            font-size: 0.4rem; 
                            position: absolute;
                            color: $mainCyan;
                            left: 30px;
                            bottom: 2px;
                        }

                        &-off {
                            font-size: 0.4rem; 
                            position: absolute;
                            color: $mainRed;
                            left: 50px;
                            bottom: 2px;
                        }
                    }
                }

                &--phone {
                    width: 70px;
                    height: 40px;
                    position: absolute;
                    background-color: $mainDark;
                    top: 180px;
                    left: 70%;
                    border-radius: 3px; 
                    transform: skew(5deg);

                    &::before {
                        content: '';
                        background-image: url('../../assets/images/phone.jpg');
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        width: 60px;
                        height: 36px;
                        position: absolute;
                        top: 2.5px;
                        left: 5px;
                    }
                }

            }
        }

        &__dna {
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;

            &--dnaloader {
                width: 30rem;
                height: 10rem;
                top: 0; bottom: 0; left: 0; right: 0;
                margin: 0;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                animation: rotateDna 15s linear infinite;

                .icon {
                    width: 0;
                    height: 80%;
                    position: relative;
                    
                    &::before, &::after {
                        content: "";
                        width: 1rem;
                        height: 1rem;
                        position: absolute;
                        right: 0;
                        left: 0;
                        border-radius: 50%;
                        transform: translateX(-50%);
                        margin: auto;
                    }

                    &::before {
                        top: 0;
                        background-color: $mainPurple;
                        border: 1px solid $mainCyan;
                        animation: beforeAnimate 1.5s linear infinite;
                    }

                    &::after {
                        bottom: 0;
                        background-color: $mainCyan;
                        border: 1px solid lighten($color: $mainPurple, $amount: 20%);
                        animation: afterAnimate 1.5s linear infinite;
                    }
                }
            }
        }
    }

    .bounce-enter-active {
        animation: bounce-in 3s;
    }

    .bounce-leave-active {
        animation: bounce-in 1s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0) translateX(-150px);
        }
        50% {
            transform: scale(1.2) translateX(50px);
        }
        100% {
            transform: scale(1) translateX(0);
        }
    }

    @for $i from 1 through 18               {
        .icon:nth-child(#{$i}) {
            &::before, &::after {
                animation-delay: #{$i * 0.15}s;
            }
        }
    }

    @keyframes beforeAnimate {
        0% {
            top: 0;
            transform: translateX(-50%) translateY(0) scale(0.5);
            opacity: 0.25;
        }

        25% {
            transform: translateX(-50%) translateY(-100%) scale(0.5);
            opacity: 0.5;
            z-index: -1;
        }

        50% {
            top: 100%;
            transform: translateX(-50%) translateY(-100%) scale(0.5);
            opacity: 0.75;
        }

        75% {
            transform: translateX(-50%) translateY(-100%) scale(1.5);
            opacity: 1;
            z-index: 1;
        }

        100% {
            top: 0;
            transform: translateX(-50%) translateY(0) scale(0.5);
            opacity: 0.75;
        }
    }

    @keyframes afterAnimate {
        0% {
            bottom: 0;
            transform: translateX(-50%) translateY(0) scale(0.5);
            opacity: 0.25;
        }

        25% {
            transform: translateX(-50%) translateY(-100%) scale(1.5);
            opacity: 1;
            z-index: 1;
        }

        50% {
            bottom: 100%;
            transform: translateX(-50%) translateY(100%) scale(0.5);
            opacity: 0.75;
        }

        75% {
            transform: translateX(-50%) translateY(-100%) scale(1.5);
            opacity: 0.5;
            z-index: -1;
        }

        100% {
            bottom: 0;
            transform: translateX(-50%) translateY(0) scale(0.5);
            opacity: 0.75;
        }
    }

    @keyframes rotateDna {
        0% {
            transform: rotate(0deg) ;
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>