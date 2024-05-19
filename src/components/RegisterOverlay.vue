<script setup>
import { ref, defineProps, watch } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

const props = defineProps({
  showRegOverlay: {
    type: Boolean,
    required: true
  },
  closeOverlay: {
    type: Function,
    required: true
  },
  openLoginOverlay: {
    type: Function,
    required: true
  }
})

const showPassword = ref(false)
const showRegisterOverlay = ref(props.showRegOverlay)

watch(
  () => props.showRegOverlay,
  (val) => {
    showRegisterOverlay.value = val
  }
)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div
    v-if="showRegisterOverlay"
    class="overlay w-full h-[100vh] flex flex-col justify-center items-center bg-black/10 fixed left-0 top-0 backdrop:filter backdrop-blur-[5px]"
  >
    <div
      class="overlay-content flex flex-col gap-10 border border-black border-solid p-[30px] bg-white w-[500px]"
    >
      <div class="flex flex-row w-full justify-between items-center">
        <p class="font-[500] text-[20px]">Create an Account</p>
        <button class="text-[14px] font-[500]" @click="props.closeOverlay">Close</button>
      </div>
      <form action="">
        <div class="input-field h-[44px] leading-[44px] relative mb-[40px]">
          <input
            type="text"
            name="username"
            id="username"
            required
            class="w-full focus:outline-none border-b-[1px] border-[#000] bg-transparent text-[14px] peer focus:border-b-[2px]"
          />
          <label
            for="username"
            class="absolute top-0 left-0 w-full text-[#B1BBC8] text-[15px] transition-all duration-[0.2s] cursor-text peer-focus:text-[14px] peer-focus:top-[-24px] peer-focus:text-[#000] peer-valid:text-[14px] peer-valid:top-[-24px] peer-valid:text-[#000]"
            >Full Name</label
          >
        </div>
        <div class="input-field h-[44px] leading-[44px] relative mb-[40px]">
          <input
            type="text"
            name="email"
            id="email"
            required
            class="w-full focus:outline-none border-b-[1px] border-[#000] bg-transparent text-[14px] peer focus:border-b-[2px]"
          />
          <label
            for="email"
            class="absolute top-0 left-0 w-full text-[#B1BBC8] text-[15px] transition-all duration-[0.2s] cursor-text peer-focus:text-[14px] peer-focus:top-[-24px] peer-focus:text-[#000] peer-valid:text-[14px] peer-valid:top-[-24px] peer-valid:text-[#000]"
            >Email Address</label
          >
        </div>
        <div class="input-field h-[44px] leading-[44px] relative mb-[40px]">
          <input
            :type="showPassword ? 'text' : 'password'"
            name="password"
            id="password"
            required
            class="w-full focus:outline-none border-b-[1px] border-[#000] bg-transparent text-[14px] peer focus:border-b-[2px]"
          />
          <label
            for="password"
            class="absolute top-0 left-0 w-full text-[#B1BBC8] text-[15px] transition-all duration-[0.2s] cursor-text peer-focus:text-[14px] peer-focus:top-[-24px] peer-focus:text-[#000] peer-valid:text-[14px] peer-valid:top-[-24px] peer-valid:text-[#000]"
            >Password (8+ Characters)</label
          >
          <div class="absolute right-0 top-0 flex items-center h-full">
            <button type="button" @click="toggleShowPassword" class="text-[14px] text-black mr-2">
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
          </div>
        </div>
      </form>
      <ButtonComponent variant="shadow" class="w-full uppercase text-[13px] font-[700] mb-[20px]">
        Create Account
      </ButtonComponent>
      <a
        href="#"
        class="text-center mb-[20px] text-[14px] underline underline-offset-2 decoration-[1.5px]"
        @click.prevent="props.openLoginOverlay"
        >Log In</a
      >
      <p class="text-[14px] text-center">
        By proceeding, you agree to the
        <a href="#" class="underline underline-offset-2 decoration-[1.5px]">Privacy Policy</a> &
        <a href="#" class="underline underline-offset-2 decoration-[1.5px]">Terms of Service</a>
      </p>
    </div>
  </div>
</template>
