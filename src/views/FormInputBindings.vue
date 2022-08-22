<template>
    <div>
        <div>
            <h2>Form Input Bindings</h2>
            <p>When dealing with forms on the frontend, we often need to sync the state of form input elements with corresponding state in JavaScript. It can be cumbersome to manually wire up value bindings and change event listeners:</p>
            <!--This can be replaced by -->
            <input
                :value="text1"
                @input="event => text1 = event.target.value"
            >
            <input v-model="text2">
        </div>

        <div>
            <p>Message is: {{ message }}</p>
            <input v-model="message" placeholder="edit me" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text1 = ref('')
const text2 = ref('')
const message = ref('')
</script>

<style scoped>

</style>