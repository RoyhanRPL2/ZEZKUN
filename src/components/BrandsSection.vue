<script setup>
import BrandComponent from '@/components/BrandComponent.vue'
</script>

<template>
    <div class="brands-container relative bg-white py-[50px] w-full h-fit px-[80px] mb-[100vh]">
      <h1 class="text-center text-[48px] uppercase font-[900] leading-[130%] tracking-[-0.96px] mb-[30px]">
        Commercial Brand
      </h1>
      <div class="brands w-full flex justify-between">
        <BrandComponent :delay="0" />
        <BrandComponent :delay="0.1" />
        <BrandComponent :delay="0.2" />
        <BrandComponent :delay="0.3" />
        <BrandComponent :delay="0.4" />
      </div>
    </div>
  </template>
  