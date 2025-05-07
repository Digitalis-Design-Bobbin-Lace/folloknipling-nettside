<script setup lang="ts">
import DSButton from '../DS/Button/DSButton.vue';


</script>

<template>
  <div class="header-wrapper">
    <div class="content-left">
      <DSButton type="subtle" @click="$router.push('/home')">Forside</DSButton>
    </div>
    <h1 class="title">Folloknipling</h1>
    <div class="content-right">
      <DSButton type="subtle" @click="$router.push('/about')">Om Oss</DSButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-header-background);
  border-bottom: 1px solid var(--color-border);
  padding: 0 50px;
}

.content-left,
.content-right {
  flex: 1;
}

.content-left,
.content-right {
  display: flex;
  align-items: center;
}

.content-left {
  justify-content: left;
  width: 400px;
}

.content-right {
  justify-content: right;
}

.title {
  justify-content: center;
}

.site-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: min-content;
}
</style>
