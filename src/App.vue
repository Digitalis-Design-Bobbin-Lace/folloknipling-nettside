<script setup lang="ts">
import SiteHeader from './components/SiteHeader/SiteHeader.vue';
</script>

<template>
  <header>
    <SiteHeader></SiteHeader>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script lang="ts">
// Get saved theme or use system preference as fallback
const savedTheme = localStorage.getItem('preferred-theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const initialTheme = savedTheme || (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply theme immediately
document.documentElement.classList.add(initialTheme);

// Set up theme toggle function with persistence
const toggleTheme = () => {
  const root = document.documentElement.classList;

  if (root.contains('light')) {
    root.remove('light');
    root.add('dark');
    localStorage.setItem('preferred-theme', 'dark');
  } else {
    root.remove('dark');
    root.add('light');
    localStorage.setItem('preferred-theme', 'light');
  }
}

export { toggleTheme };
</script>

<style scoped></style>
