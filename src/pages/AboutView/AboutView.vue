<script setup lang="ts">
import DSButton from '@/components/DS/Button/DSButton.vue';

const testClick = () => {
  console.log("test clicked")
}
</script>

<template>
  <div>
    <h1>About</h1>
    <DSButton href="/folloknipling-nettside/test">To Testpage</DSButton>
    <DSButton @click="testClick">Test</DSButton>
  </div>
</template>

<style scoped lang="scss"></style>
