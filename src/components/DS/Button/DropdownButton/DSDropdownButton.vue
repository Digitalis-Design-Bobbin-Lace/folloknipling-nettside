<script setup lang="ts">
import { computed, reactive, toRef, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { BUTTON_TYPES } from '@/components/DS/Button/types'

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
    type: Boolean,
  },
  href: {
    type: String,
    default: undefined,
  },
  showMoreText: {
    type: String,
    default: "Vis mer",
  },
})

const buttonClasses = computed(() => {
  return {
    btn: true,
    [`btn-${props.type}`]: true,
    'btn-disabled': props.disabled,
    'dropdown-btn': true,
  }
})

const panelBackgroundClasses = computed(() => {
  return {
    'dropdown-panel-background': true,
    [`dropdown-panel-background-${props.type}`]: true,
  }
})

const state = reactive({
  hovered: false,
  showMore: false,
})

const clickHandler = () => {
  if (props.href) {
    router.push(props.href)
  }
}

watch(
  toRef(state, 'hovered'),
  (newVal) => {
    if (!newVal) {
      state.showMore = false;
    }
  }
)
</script>

<template>
  <div class="dropdown-panel-container" @mouseenter="state.hovered = true" @mouseleave="state.hovered = false">
    <div :class="buttonClasses" @click="clickHandler">
      <slot></slot>
    </div>
    <div class="dropdown-panel" v-show="state.hovered">
      <div :class="panelBackgroundClasses">
        <slot name="content"></slot>
        <div class="show-more-spacer" v-show="state.showMore"></div>
        <slot name="show-more" v-if="state.showMore"></slot>

        <div class="show-more-marker" @click="state.showMore = !(state.showMore)" v-show="!state.showMore">
          {{ props.showMoreText }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/components/DS/Button/style.scss';

.dropdown-panel {
  height: 0;

  &-container {
    width: fit-content;
    z-index: 9999;
  }

  &-background {
    background-color: var(--color-background);
    outline: 1px solid var(--color-border);
    border-radius: var(--radius-medium);
    width: fit-content;
    min-width: calc(100% - var(--padding-small) * 2);
    padding-right: calc(var(--padding-small) * 2);

    &-subtle {
      margin: 1px;
      min-width: calc(100% - var(--padding-small) * 2 - 2px);
    }
  }
}

.show-more-spacer {
  width: 100%;
  height: 0;
  padding: var(--padding-small);
  margin-bottom: calc(var(--padding-small) * -2);

  &::before {
    content: "";
    display: block;
    height: 1px;
    background-color: var(--color-border);
    border-radius: var(--radius-small);
    margin-bottom: var(--padding-small);
    margin-top: calc(var(--padding-small) * -1);
    transform: translateY(-0.5px)
  }
}


.show-more-marker {
  font-size: x-small;
  text-align: center;
  padding: 0 var(--padding-small);
  width: 100%;
  border-radius: var(--radius-medium);
}
</style>
