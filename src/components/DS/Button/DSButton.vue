<script setup lang="ts">
import { computed } from 'vue';
import { BUTTON_TYPES } from './types';
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
  type: {
    type: String,
    default: 'default',
    validator: (value: string) => BUTTON_TYPES.includes(value)
  },
  disabled: {
    type: Boolean
  },
  href: {
    type: String,
    default: undefined,
  }
})

const buttonClasses = computed(() => {
  return {
    btn: true,
    [`btn-${props.type}`]: true,
    'btn-disabled': props.disabled,
  }
})

const clickHandler = () => {
  if (props.href) {
    router.push(props.href)
  }
}
</script>

<template>
  <div :class="buttonClasses" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.btn {
  width: min-content;
  padding: 5px;
  border-radius: var(--radius-medium);
  text-wrap: nowrap;

  &-default {
    border: 1px solid var(--color-border);

    &:hover {
      background-color: var(--button-color-hover);
    }
  }

  &-primary {
    background-color: var(--button-color-primary);
    border: 1px solid var(--color-border);

    &:hover {
      background-color: var(--button-color-primary-hover);
    }
  }

  &-subtle {
    border-bottom: 1px solid var(--color-border);

    &:hover {
      background-color: var(--button-color-hover);
    }

    &-primary {
      border-bottom: 1px solid var(--color-border);
      background-color: var(--button-color-primary);

      &:hover {
        background-color: var(--button-color-primary-hover);
      }
    }
  }

  &-disabled {
    color: grey;

    &:hover {
      background-color: transparent;
    }
  }
}
</style>
