<script setup>
import { ref, defineProps, watch } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import ForgotPasswordOverlay from '@/components/ForgotPasswordOverlay.vue'

const props = defineProps({
  showOverlay: {
    type: Boolean,
    required: true
  },
  closeOverlay: {
    type: Function,
    required: true
  },
  openRegisterOverlay: {
    type: Function,
    required: true
  }
})

const showPassword = ref(false)
const showLoginOverlay = ref(props.showOverlay)
const showForgotPasswordOverlay = ref(false)

watch(
  () => props.showOverlay,
  (val) => {
    showLoginOverlay.value = val
  }
)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}

const handleForgotPassword = () => {
  showLoginOverlay.value = false
  showForgotPasswordOverlay.value = true
}

const backToLogin = () => {
  showLoginOverlay.value = true
  showForgotPasswordOverlay.value = false
}
</script>

<template>
  <div
    v-if="showLoginOverlay"
    class="overlay w-full h-[100vh] flex flex-col justify-center items-center bg-black/10 fixed left-0 top-0 backdrop:filter backdrop-blur-[5px]"
  >
    <div
      class="overlay-content flex flex-col gap-10 border border-black border-solid p-[30px] bg-white w-[500px]"
    >
      <div class="flex flex-row w-full justify-between items-center">
        <p class="font-[500] text-[20px]">Log In</p>
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
            >Email or Username</label
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
            >Password</label
          >
          <div class="absolute right-0 top-0 flex items-center h-full">
            <button type="button" @click="toggleShowPassword" class="text-[14px] text-black mr-2">
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
            <button type="button" @click="handleForgotPassword" class="text-[14px] text-black">
              Forgot
            </button>
          </div>
        </div>
      </form>
      <ButtonComponent variant="shadow" class="w-full uppercase text-[13px] font-[700] mb-[20px]">
        Log In
      </ButtonComponent>
      <a
        href="#"
        class="text-center mb-[20px] text-[14px] underline underline-offset-2 decoration-[1.5px]"
        @click.prevent="props.openRegisterOverlay"
        >Create Account</a
      >
      <p class="text-[14px] text-center">
        By proceeding, you agree to the
        <a href="#" class="underline underline-offset-2 decoration-[1.5px]">Privacy Policy</a> &
        <a href="#" class="underline underline-offset-2 decoration-[1.5px]">Terms of Service</a>
      </p>
    </div>
  </div>

  <ForgotPasswordOverlay :showOverlay="showForgotPasswordOverlay" :backToLogin="backToLogin" />
</template>
