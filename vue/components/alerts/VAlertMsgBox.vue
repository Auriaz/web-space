<template>
<div>
    <v-alert class="alert__msg" dismissible outlined border="bottom" :type="msg.color" :icon="msg.icon">
        {{ msg.text }}
    </v-alert>
</div>
</template>

<script>
export default {
    name: 'v-alert-msg-box',
    props: ['msg']
}
</script>

<style lang="scss" scoped>
.alert__msg {
    z-index: 5;
}
</style>