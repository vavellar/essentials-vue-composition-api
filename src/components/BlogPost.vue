<template>
    <div>
        <h4>{{ title }}</h4>
        <button @click="$emit('enlarge-text')">Enlarge text</button>
    </div>
</template>

<script setup lang="ts">
defineProps(['title'])
// or this way
// const props = defineProps(['title'])
// console.log(props.title)
</script>

<style scoped>

</style>