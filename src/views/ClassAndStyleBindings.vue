<template>
 <div>
     <p
       class="static"
       :class="{ active: isActive, 'text-danger': hasError }"
      >
      will render p class="static active"
      </p>
      <p :class="classObject">
           this will render p class="active"
      </p>
      <p :class="classObject2">
        This works too
      </p>
      <p :class="[activeClass, errorClass]">
        This will render p class="active text-danger"
      </p>
      <p :class="[isActive ? activeClass : '', errorClass]">
        This also works, but its a bit verbose, we can do this way down
      </p>
      <p :class="[{ active: isActive }, errorClass]">
        This way is better
      </p>
      <p>There is some additional informations when we use class attribute on component <a href="">https://vuejs.org/guide/essentials/class-and-style.html#binding-html-classes</a></p>
 </div>
</template>

<script setup lang='ts'>
import { ref, computed, reactive } from 'vue'

const isActive = ref(true)
const hasError = ref(true)

// we can rewrite like this
const classObject = reactive({ active: true, 'text-danger': false})

const active = ref(true)
const error = ref(null)

const classObject2 = computed(() => ({
  active: active.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))

const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>

