<script setup>
import ArrowRightEmailIcon from '@/assets/svg/arrow-right-email.svg'
</script>

<template>
  <div class="atc-container w-full h-[360px] px-[80px] mb-[120px]">
    <div class="atc bg-[url('@/assets/images/top-product-bg.png')] bg-cover bg-center w-full h-full relative">
      <div class="overlay w-full h-full absolute bg-black/90 z-0"></div>
      <div class="z-10 relative h-full flex flex-col justify-center px-[100px]">
        <h1 class="text-[48px] font-[900] text-white underline underline-offset-8 uppercase">Join The Zezkun Community.</h1>
        <p class="text-[18px] font-[400] text-white">
          Subscribe to our newsletter to receive our news, new products, advice guides and exclusive
          offers first.
        </p>
        <div class="input-container flex w-[500px] mt-[20px]">
          <input type="text" placeholder="Enter your email address" class="w-full px-[20px] focus:outline-none" />
          <img :src="ArrowRightEmailIcon" alt="Arrow Icon" class="py-[10px] px-[15px] bg-slate-700"/>
        </div>
      </div>
    </div>
  </div>
</template>
