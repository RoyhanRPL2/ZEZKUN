<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  btnType: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'shadow', 'outline', 'disabled'].includes(value),
  },
  icon: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  },
});

const btnClass = computed(() => {
  let baseClass = 'inline-flex py-[10px] px-[15px] w-fit h-fit justify-center items-center gap-[10px] text-[#0F1314] text-center text-[20px] not-italic font-[500] leading-[130%] tracking-[0.4px]';
  switch (props.variant) {
    case 'primary':
      return `${baseClass} bg-[#9FEA1C] transition duration-[0.3s] hover:bg-[#68A808] `;
    case 'shadow':
      return `${baseClass} border-[0.5px] border-solid border-[#000000] bg-[#9FEA1C] shadow-[5px_5px_0px_0px_#000000] transition duration-[0.3s] hover:shadow-[0px_0px_0px_0px_#000000] hover:translate-y-[2px] hover:translate-x-[2px] hover:bg-[#88D210]`;
    case 'outline':
      return `${baseClass} bg-white border-[1px] border-solid border-[#000000] transition duration-[0.3s] hover:bg-[#ECEEF2]`;
    case 'disabled':
      return `${baseClass} bg-[#B1BBC8] text-[#64748B] cursor-not-allowed`;
    default:
      return '';
  }
});

const isDisabled = computed(() => props.variant === 'disabled');
</script>

<template>
  <button :type="btnType" :class="btnClass" :disabled="isDisabled">
    <span v-if="icon && iconPosition === 'left'" :class="iconClass">
      <slot name="icon"></slot>
    </span>
    <slot></slot>
    <span v-if="icon && iconPosition === 'right'" :class="iconClass">
      <slot name="icon"></slot>
    </span>
  </button>
</template>
