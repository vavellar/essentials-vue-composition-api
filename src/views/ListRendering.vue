<template>
  <div>
    <h3>We can use the v-for directive to render a list of items based on an array. The v-for directive requires a special syntax in the form of item in items, 
        where items is the source data array and item is an alias for the array element being iterated on: 
    </h3>
    <li v-for="item in items">
        {{ item.message }}
    </li>
    <h3>We can use destructuring properties on v-for directive too</h3>
    <li v-for="{ message } in items">
        {{ message }}
    </li>

    <!-- with index alias -->
    <li v-for="({ message }, index) in items">
    {{ message }} {{ index }}
    </li>

    <div>
        <h3>You can also use v-for to iterate through the properties of an object. The iteration order will be based on the result of calling Object.keys() on the object:</h3>
        <ul>
            <li v-for="value in myObject">
                {{ value }}
            </li>
        </ul>
    </div>

    <div>
        Sometimes we want to display a filtered or sorted version of an array without actually mutating or resetting the original data. In this case, you can create a computed property that returns the filtered or sorted array.

        <li v-for="n in evenNumbers">{{ n }}</li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0)
})


</script>
