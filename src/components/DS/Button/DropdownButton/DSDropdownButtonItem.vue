<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  }
})

const props = defineProps({
  disabled: {
    type: Boolean
  },
  href: {
    type: String,
    default: undefined,
  }
})

const clickHandler = () => {
  if (props.href) {
    router.push(props.href)
  }
}
</script>

<template>
  <div class="button-item" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.button-item {
  padding: var(--padding-small);
  width: 100%;
  border-radius: var(--radius-medium);

  &+.button-item::before {
    content: "";
    display: block;
    height: 1px;
    background-color: var(--color-border);
    border-radius: var(--radius-small);
    margin-bottom: var(--padding-small);
    margin-top: calc(var(--padding-small) * -1);
    transform: translateY(-0.5px)
  }

  .button-item:not(:last-child) {
    padding-bottom: calc(var(--padding-small) / 2);
  }

  &:hover {
    background-color: var(--color-background-highlight);
  }
}
</style>
