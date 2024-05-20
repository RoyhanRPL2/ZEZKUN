<script setup>
import TruckIcon from '@/assets/svg/truck.svg'
import ArrowPathIcon from '@/assets/svg/arrow-path.svg'
import CubeIcon from '@/assets/svg/cube.svg'
import ShieldIcon from '@/assets/svg/shield-check.svg'
</script>

<template>
  <div class="benefit w-full px-[80px] mb-[120px]">
    <div class="grid grid-cols-4 gap-[10px] bg-white border-[1px] border-[#76999A] py-[10px]">
      <div class="content flex gap-[20px] p-[20px] bg-white justify-center">
        <img :src="TruckIcon" alt="Truck Icon" class="bg-black py-[10px] px-[15px]" />
        <div>
          <h1 class="text-[20px] font-[700] leading-[130%] tracking-[-0.4px]">Free Delivery</h1>
          <p class="text-[16px] font-[400] leading-[145%] tracking-[0.16px]">
            All orders from IDR 300
          </p>
        </div>
      </div>

      <div class="content flex gap-[20px] p-[20px] bg-white justify-center border-l-[1px] border-[#76999A]">
        <img :src="ArrowPathIcon" alt="Truck Icon" class="bg-black py-[10px] px-[15px]" />
        <div>
          <h1 class="text-[20px] font-[700] leading-[130%] tracking-[-0.4px]">Returns Possible</h1>
          <p class="text-[16px] font-[400] leading-[145%] tracking-[0.16px]">
            Within 30 days
          </p>
        </div>
      </div>

      <div class="content flex gap-[20px] p-[20px] bg-white justify-center border-l-[1px] border-[#76999A]">
        <img :src="CubeIcon" alt="Truck Icon" class="bg-black py-[10px] px-[15px]" />
        <div>
          <h1 class="text-[20px] font-[700] leading-[130%] tracking-[-0.4px]">Shipping</h1>
          <p class="text-[16px] font-[400] leading-[145%] tracking-[0.16px]">
            Shipped within 72 hours
          </p>
        </div>
      </div>

      <div class="content flex gap-[20px] p-[20px] bg-white justify-center border-l-[1px] border-[#76999A]">
        <img :src="ShieldIcon" alt="Truck Icon" class="bg-black py-[10px] px-[15px]" />
        <div>
          <h1 class="text-[20px] font-[700] leading-[130%] tracking-[-0.4px]">Secure payment</h1>
          <p class="text-[16px] font-[400] leading-[145%] tracking-[0.16px]">
            Pay safely
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
