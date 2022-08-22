<template>
  <div>
    <p>Has published books:</p>
    <span>{{ publishedBooksMessage }}</span>
    <p>Using method call insted</p>
    <p>{{ calculateBooksMessage() }}</p>
  </div>
</template>

<script setup lang='ts'>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

// this will works too, but computed properties are cached based on their reactive dependencies
function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}
</script>

