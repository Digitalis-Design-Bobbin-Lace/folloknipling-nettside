<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { BUTTON_TYPES } from '@/components/DS/Button/types'

const emit = defineEmits(['click'])

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
    router.push(props.href);
    return;
  }
  emit('click');
}
</script>

<template>
  <div :class="buttonClasses" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use '@/components/DS/Button/style.scss';
</style>
