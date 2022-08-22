<template>
  <div>
    <button @click="awesome = !awesome">Toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <h1>V-else-if</h1>
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
    <div>How can we use a v-if to toogle more than one element? We can do this using v-if on template element</div>
    <template v-if="awesome">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </template>
    <div>We also have a `v-show`` attribute that does basically the same of `v-if``. You should prefer `v-show`` if you need to toggle something very often and `v-if` if the condition is unlikely to change at runtime</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const awesome = ref(false)
const type = ref('C')

</script>
