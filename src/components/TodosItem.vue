<template>
  <div class="todos-item" v-bind="$attrs">
    <span class="todos-item__name">{{ name }}</span>
    
    <button
      class="todos-item__button"
      @click="$emit('confirm')"
      :aria-label="buttonAriaLabel"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  name: 'TodosItem',
  
  props: {
    name: {
      type: String as PropType<string>,
      required: true
    },
    status: {
      type: String as PropType<'pending' | 'completed'>,
      default: 'pending'
    },
  },

  emits: {
    confirm: null
  },

  setup(props) {
    const buttonText = computed(() => props.status === 'pending' ? 'Done' : 'Undo')
    const buttonAriaLabel = computed(() => `${buttonText.value} ${props.name}`)

    return {
      buttonText,
      buttonAriaLabel
    }
  }
})
</script>

<style scoped>
.todos-item {
  @apply flex justify-between pl-3 mb-4;
}

.todos-item__name {
  @apply text-gray-800;
}

.todos-item__button {
  @apply border rounded-md py-1 px-3 text-sm text-gray-700 select-none;
}
</style>
