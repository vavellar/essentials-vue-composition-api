<template>
    <div>
        <div>
            <h2>Inline Handlers</h2>
            <p>Inline handlers are typically used in simple cases, for example:</p>
            <button @click="count++">Add 1</button>
            <button @click="count--">Remove 1</button>
            <p>Count is: {{ count }}</p>
        </div>
        <hr>
        <div>
            <h2>Method Handlers</h2>
            <p>The logic for many event handlers will be more complex though, and likely isn't feasible with inline handlers. That's why v-on can also accept the name or path of a component method you'd like to call.</p>
            <button @click="greet">Greet</button>
        </div>

        <div>
            <h2>Calling Methods in Inline Handlers</h2>
            <p>Instead of binding directly to a method name, we can also call methods in an inline handler. This allows us to pass the method custom arguments instead of the native event:</p>
            <button @click="say('hello')">Say hello</button>
            <button @click="say('bye')">Say bye</button>        
        </div>

        <div>
            <h2>Accessing Event Argument in Inline Handlers</h2>
            <p>Sometimes we also need to access the original DOM event in an inline handler. You can pass it into a method using the special $event variable, or use an inline arrow function:</p>
            <!-- using $event special variable -->
            <button @click="warn('Form cannot be submitted yet.', $event)">
            Submit
            </button>

            <!-- using inline arrow function -->
            <button @click="(event) => warn('Form cannot be submitted yet.', event)">
            Submit
            </button>      
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0)
const name = ref('Vue.js')

function greet(event: any) {
  alert(`Hello ${name.value}!`)
  console.log(event)
  // `event` is the native DOM event
  if (event) {
    alert(event.target.tagName)
  }
}

function warn(message: string, event: any) {
  // now we have access to the native event
  if (event) {
    event.preventDefault()
  }
  alert(message)
}

function say(message: string) {
  alert(message)
}

</script>

<style lang="scss" scoped>

</style>