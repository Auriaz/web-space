<template>
    <ul  class="loader">
        <li v-for="item in 15" :key="item.index"></li>
    </ul>
</template>

<script>
export default {
    name: "v-preloader",
    computed: {
        loading() {
            return this.$store.getters.loading
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../styles/settings/_colors';  

    .loader {
        z-index: -1;
        width: 100px;
        height: 100px;
        padding: 0;
        position: absolute;
        bottom: 110px;  right: 110px;
        margin: auto;
        list-style-type: none;

        & li {
            border: 5px solid transparent;
            border-left-color: $mainCyan;
            border-top-color: $mainCyan;
            // border-right-color: $mainPurple;
            // border-bottom-color: $mainPurple;
            position: absolute;
            top: -100%;
            left: -100%;
            right: -100%;
            bottom: -100%;
            margin: auto;
            border-radius: 50%;
            transform: rotate(0deg);
            animation: animate 10s ease infinite;
            animation-direction: alternate-reverse;
        }
    }

    @for $i from 1 through 15 {
        li:nth-child(#{$i}) {
            height: #{$i*20}px;
            width: #{$i*20}px;
            animation-delay: #{$i*0.1}s;
        }
    } 

    @keyframes animate {
        0%, 100% {
            transform: rotate(45deg);
        }

        50%, 60% {
            transform: rotate(-315deg);
        }
    }
</style>