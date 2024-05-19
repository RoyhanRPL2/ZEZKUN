<script setup>
import { defineProps } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const props = defineProps({
  showOverlay: {
    type: Boolean,
    required: true
  },
  backToLogin: {
    type: Function,
    required: true
  },
  closeOverlay: {
    type: Function,
    required: true
  }
})

const handleResetPassword = () => {
  toast('Password reset link sent to your email', {
    theme: 'dark',
    type: 'success',
    icon: true,
    position: 'top-right',
    autoClose: 1500,
    dangerouslyHTMLString: true,
    bodyClassName: 'gap-[10px] text-[14px] font-[500] flex items-center',
    progressStyle: {
      background: '#63E600'
    }
  })

  props.backToLogin()
}
</script>

<template>
  <div
    v-if="showOverlay"
    class="overlay w-full h-[100vh] flex flex-col justify-center items-center bg-black/10 fixed left-0 top-0 backdrop:filter backdrop-blur-[5px]"
  >
    <div
      class="overlay-content flex flex-col gap-10 border border-black border-solid p-[30px] bg-white w-[500px]"
    >
      <div class="flex flex-row w-full justify-between items-center">
        <p class="font-[500] text-[20px]">Forgot Password</p>
        <button
          class="text-[14px] font-[500] underline underline-offset-2"
          @click="props.backToLogin"
        >
          Back to Login
        </button>
      </div>
      <p>Enter your email to receive password reset info.</p>
      <form action="">
        <div class="input-field h-[44px] leading-[44px] relative">
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
      </form>
      <ButtonComponent
        variant="shadow"
        class="w-full uppercase text-[13px] font-[700] mb-[20px]"
        @click="handleResetPassword"
      >
        Reset Password
      </ButtonComponent>
    </div>
  </div>
</template>
