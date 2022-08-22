<template>
  <div class="about">
    <p>Increment count object</p>
    <button @click="increment">
      {{ state.count }}
    </button>
    <p>Increment count primitive type</p>
    <button @click="incrementAnotherCount">
      {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const state = reactive({ count: 0 })
const count = ref(0)

console.log(count.value)

function incrementAnotherCount() {
  count.value++
}

function increment() {
  state.count++
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
