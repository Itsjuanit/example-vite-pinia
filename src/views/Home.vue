<template>
    <div>
        <h1>HOME</h1>
        <p>{{userStore.userData}}</p>
    </div>
</template>

<script setup>
    import {useUserStore} from "../stores/user";
    const userStore = useUserStore();
</script>

<style lang="scss" scoped>

</style>