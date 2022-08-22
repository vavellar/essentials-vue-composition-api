<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <slot />
  </div>
</template>

<style scoped>
.alert-box {
  background-color: black;
  display: flex;
  flex-direction: column;
  border: 1px red solid
}
</style>