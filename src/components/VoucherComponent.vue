<script setup>
import ButtonComponent from './ButtonComponent.vue';
import DiscountIcon from '@/assets/svg/discount.svg';
</script>

<template>
    <div class="flex flex-col gap-[1rem]">
        <div class="border border-solid border-[#000] flex lg:flex-row flex-col lg:justify-center lg:items-center p-[1rem] gap-[0.7rem]">
            <p class="uppercase">add voucher</p>
            <input class="focus:outline-none border border-solid border-[#000] p-[0.5rem]" type="text">
            <ButtonComponent variant="shadow" class="uppercase text-[0.9rem] px-[2rem] w-full">add</ButtonComponent>
        </div>
        <div class="voucher-list flex gap-[1rem] flex-wrap">
            <div class="voucher-item flex items-center gap-[1rem] border border-solid border-[#000] lg:w-fit pr-[1rem] w-full">
                <div class="discount-icon-wrapper bg-[#9FEA1C] w-fit p-[1rem]">
                    <img class="w-[24px] h-[24px]" :src="DiscountIcon" alt="">
                </div>
                <div class="voucher-info">
                    <p class="uppercase">DISCOUNT 10%</p>
                    <p class="text-[0.8rem]">Valid until 31 Dec 2021</p>
                </div>
            </div>
            <div class="voucher-item flex items-center gap-[1rem] border border-solid border-[#000] lg:w-fit w-full pr-[1rem]">
                <div class="discount-icon-wrapper bg-[#9FEA1C] w-fit p-[1rem]">
                    <img class="w-[24px] h-[24px]" :src="DiscountIcon" alt="">
                </div>
                <div class="voucher-info">
                    <p class="uppercase">DISCOUNT 10%</p>
                    <p class="text-[0.8rem]">Valid until 31 Dec 2021</p>
                </div>
            </div>
            <div class="voucher-item flex items-center gap-[1rem] border border-solid border-[#000] lg:w-fit w-full pr-[1rem]">
                <div class="discount-icon-wrapper bg-[#9FEA1C] w-fit p-[1rem]">
                    <img class="w-[24px] h-[24px]" :src="DiscountIcon" alt="">
                </div>
                <div class="voucher-info">
                    <p class="uppercase">DISCOUNT 10%</p>
                    <p class="text-[0.8rem]">Valid until 31 Dec 2021</p>
                </div>
            </div>
        </div>  
    </div>
</template>

<style>
</style>