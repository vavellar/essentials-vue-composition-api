<template>
    <div>
        <div>
            <h2>Computed properties allow us to declaratively compute derived values. However, there are cases where we need to perform "side effects" in reaction to state changes - 
                for example, mutating the DOM, or changing another piece of state based on the result of an async operation.
                With Composition API, we can use the watch function to trigger a callback whenever a piece of reactive state changes:
            </h2>

            <p>
                Ask a yes/no question:
                <input v-model="question" />
            </p>
            <p>{{ answer }}</p>
        </div>

        <hr/>

        <div>
            <h2>Watch source types</h2>
            <p>watch's first argument can be different types of reactive "sources": it can be a ref (including computed refs), a reactive object, a getter function, or an array of multiple sources:</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

// watch works directly on a ref
watch(question, getAnswer)

async function getAnswer(newQuestion, oldQuestion) {
    if (newQuestion.indexOf('?') > -1) {
        answer.value = 'Thinking...'
        try {
        const res = await fetch('https://yesno.wtf/api')
        answer.value = (await res.json()).answer
        } catch (error) {
        answer.value = 'Error! Could not reach the API. ' + error
        }
    }
}

const x = ref(0)
const y = ref(0)

// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

const obj = reactive({ count: 0 })

// this won't work because we are passing a number to watch()
watch(obj.count, (count) => {
  console.log(`count is: ${count}`)
})

// instead, use a getter:
watch(() => obj.count, (count) => {
    console.log(`count is: ${count}`)
  }
)
</script>

<style scoped>

</style>