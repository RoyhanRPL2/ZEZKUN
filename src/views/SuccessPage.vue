<template>
    <div class="flex flex-col gap-9 sm:gap-[69px] px-10 py-8 sm:px-20 sm:py-[69px]">
        <div class="flex flex-col items-center justify-center gap-5 sm:gap-10">
            <h1 class="font-black text-black sm:text-3xl lg:text-5xl">THANK YOU</h1>
            <div class="w-[20%] sm:w-[25%] lg:w-[30%]">
                <img class="object-cover w-full h-full" src="/src/assets/svg/checksuccess.svg" alt="">
            </div>
            <div class="flex flex-col items-center justify-center gap-[10px]">
                <h2 class="font-bold text-black text-center sm:text-xl lg:text-[32px]">YOUR ORDER WAS COMPLETED SUCCESFULLY</h2>
                <p class="font-semibold text-center text-black text-xs sm:text-sm lg:text-base w-[70%] sm:w-[45%]">An email receipt the details about your
                    order has been sent to your email address</p>
            </div>
        </div>
        <hr>
        <div class="flex flex-col gap-8 sm:gap-[60px]">
            <h1 class="font-black text-center sm:text-start text-black sm:text-3xl lg:text-5xl">MAYBE YOU LIKE</h1>
            <div class="lg:flex justify-between hidden gap-[50px]">
                <Product />
            </div>
        </div>
    </div>
</template>

<script setup>
import Product from '../components/ProductComponent.vue'
</script>