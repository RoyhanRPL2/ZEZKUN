<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <div class="top-product w-full h-[425px] bg-blue-300 flex flex-row justify-center items-center bg-[url('@/assets/images/top-product-bg.png')] bg-cover bg-center relative gap-[50px]">
    <div class="overlay w-full h-full absolute bg-black/90 z-0"></div>
    <div class="z-10">
      <p class="text-[20px] font-[700] leading-[130%] tracking-[0.4px] text-white">Men's Jacket TNF HYVENT GORE-TEX</p>
      <h1 class="max-w-[760px] text-[48px] uppercase font-[900] leading-[130%] tracking-[-0.96px] text-white mb-[20px]">Incredible durability and wearing comfort that is truly over-the-top.</h1>
      <ButtonComponent
        variant="shadow"
        class="uppercase text-[12px] font-[800] leading-[145%] tracking-[0.16px] z-20"
      >
        See More
      </ButtonComponent>
    </div>

    <div class="w-[350px] h-[350px] z-10">
        <img src="@/assets/image/product-30.png" alt="Top Product" class="w-full h-full object-cover object-center" />
    </div>
  </div>
</template>
