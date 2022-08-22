<template>
    <div>
        <h1>Acessing the refs</h1>
          <input ref="input"/>
    </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue'

// declare a ref to hold the element reference
// the name must match template ref value
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>

<style scoped>

</style>