<script setup lang="ts">
import DSDropdownButton from '../DS/Button/DropdownButton/DSDropdownButton.vue';
import DSDropdownButtonItem from '../DS/Button/DropdownButton/DSDropdownButtonItem.vue';
import DSButton from '../DS/Button/DSButton.vue';


</script>

<template>
  <div class="header-wrapper">
    <div class="content content-left">
      <DSButton type="subtle" href="/folloknipling-nettside/home">Forside</DSButton>
      <DSDropdownButton type="subtle" show-more-text="Vis kurs" href="/folloknipling-nettside/courses">
        Kurs
        <template #content>
          <DSDropdownButtonItem href="/folloknipling-nettside/courses">Kursoversikt</DSDropdownButtonItem>
          <DSDropdownButtonItem href="/folloknipling-nettside/registration">Påmelding</DSDropdownButtonItem>
          <DSDropdownButtonItem href="/folloknipling-nettside/teachers">Våre lærere</DSDropdownButtonItem>
        </template>
        <template #show-more>
          <DSDropdownButtonItem href="/folloknipling-nettside/course/Nybegynner 1A">Nybegynner 1A</DSDropdownButtonItem>
          <DSDropdownButtonItem href="/folloknipling-nettside/course/Nybegynner 1B">Nybegynner 1B</DSDropdownButtonItem>
          <DSDropdownButtonItem href="/folloknipling-nettside/course/Nybegynner 2A">Nybegynner 2A</DSDropdownButtonItem>
          <DSDropdownButtonItem href="/folloknipling-nettside/course/Nybegynner 2B">Nybegynner 2B</DSDropdownButtonItem>
          <DSDropdownButtonItem href="/folloknipling-nettside/course/Binche">Binche</DSDropdownButtonItem>
        </template>
      </DSDropdownButton>
    </div>
    <h1 class="title">Folloknipling</h1>
    <div class="content content-right">
      <DSButton type="subtle" href="/folloknipling-nettside/about">Om Oss</DSButton>
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

.content {
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px;
}

.content-left {
  justify-content: left;
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
