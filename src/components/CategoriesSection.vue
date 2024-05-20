<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <div class="category w-full h-[100vh]">
    <div class="grid grid-cols-2 grid-rows-2 bg-white h-full gap-[20px] px-[80px] py-[120px]">
      <div
        class="waterproof relative row-span-2 bg-white bg-[url('@/assets/images/ctg-waterproof.png')] bg-cover bg-center overflow-hidden"
      >
        <div class="overlay absolute inset-0 bg-black opacity-30"></div>
        <div class="content z-10 px-[30px] absolute right-0 top-[40%]">
          <h1 class="text-[48px] font-[800] uppercase leading-[130%] tracking-[-0.96px] text-white mb-[20px] z-20">
            Waterproof
          </h1>
          <ButtonComponent
            variant="shadow"
            class="uppercase text-[14px] font-[800] leading-[145%] tracking-[0.16px] z-20"
          >
            See More
          </ButtonComponent>
        </div>
      </div>
      <div
        class="windbreaker relative bg-slate-300 bg-[url('@/assets/images/ctg-windbreaker.png')] bg-cover bg-center overflow-hidden"
      >
        <div class="overlay absolute inset-0 bg-black opacity-30"></div>
        <div class="content z-10 px-[60px] absolute right-0 top-[30%]">
          <h1 class="text-[32px] font-[800] uppercase leading-[130%] tracking-[-0.96px] text-white mb-[10px] z-20">
            Windbreaker
          </h1>
          <ButtonComponent
            variant="shadow"
            class="uppercase text-[12px] font-[850] leading-[145%] tracking-[0.16px] z-20"
          >
            See More
          </ButtonComponent>
        </div>
      </div>
      <div
        class="lightweight relative bg-slate-500 bg-[url('@/assets/images/ctg-lightweight.png')] bg-cover bg-center overflow-hidden"
      >
        <div class="overlay absolute inset-0 bg-black opacity-30"></div>
        <div class="content z-10 px-[60px] absolute left-0 top-[30%]">
          <h1 class="text-[32px] font-[800] uppercase leading-[130%] tracking-[-0.96px] text-white mb-[10px] z-20">
            Lightweight
          </h1>
          <ButtonComponent
            variant="shadow"
            class="uppercase text-[12px] font-[850] leading-[145%] tracking-[0.16px] z-20"
          >
            See More
          </ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>
