<template>
    <div class="snackbar-box">
        <v-snackbar v-for="msg in messages" :key="msg.index" v-model="msg.snackbar" bottom left :color="msg.color" multi-line :timeout="6000" class="snackbar">
            <v-avatar class="pa-6" :color="`${msg.color} lighten-4`" size="24">
                <v-icon :class="`${msg.icon}`" small :color="msg.color"></v-icon>
            </v-avatar>
            {{ msg.text }}
            <v-btn x-small outlined fab @click="msg.snackbar = false">
                <v-icon class="fas fa-times fa-xs"></v-icon>
            </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    name: 'v-snack-bar-box',
    computed: {
        messages() {
            return this.$store.getters.getMessages
        },
    }
}
</script>

<style lang="scss" scoped>
.snackbar-box {
    width: 50%;
    height: auto;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 10px;
    z-index: 5;
}

.snackbar {
    position: relative;
    margin: 10px;
}
</style>