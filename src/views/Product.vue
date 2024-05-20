<script setup>
import CarouselImage from '@/components/CarouselImage.vue'
</script>

<template>
    <div class="flex flex-col gap-[120px]">
        <CarouselImage />
        <div class="flex flex-col gap-[120px] m-20">
            <div class="flex flex-row py-[10px] justify-between">
                <div class="flex flex-row gap-[20px]">
                    <div class="flex flex-row gap-5">
                        <div class="text-white bg-black px-[30px] py-3 flex items-center justify-center font-bold text-base">
                            <p>COLUMBIA</p>
                        </div>
                        <div class="bg-white text-black border-x-2 border-[#E2EBEB] px-[30px] py-3 flex items-center justify-center font-bold text-base">
                            <p>LAFUMA</p>
                        </div>
                        <div class="bg-white text-black border-x-2 border-[#E2EBEB] px-[30px] py-3 flex items-center justify-center font-bold text-base">
                            <p>MILLET</p>
                        </div>
                        <div class="bg-white text-black border-x-2 border-[#E2EBEB] px-[30px] py-3 flex items-center justify-center font-bold text-base">
                            <p>BLACKYAK</p>
                        </div>
                        <div class="bg-white text-black border-x-2 border-[#E2EBEB] px-[30px] py-3 flex items-center justify-center font-bold text-base">
                            <p>TNF</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-[10px]">
                        <button class="flex px-[15px] py-[10px] border border-black">
                            <img src="/src/assets/svg/arrow-left.svg" alt="">
                        </button>
                        <button class="flex px-[15px] py-[10px] bg-black">
                            <img src="/src/assets/svg/arrow-right.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="filter">
                    <button class="bg-black px-[30px] py-3">
                        <p class="text-white text-base font-bold">Filter</p>
                    </button>
                </div>
            </div>
            <div class="flex flex-col gap-5">
                <h1 class="font-black text-black text-5xl">WATERPROOF</h1>
                <div class="flex flex-col w-[150px] sm:w-[300px] h-fit gap-[10px]">
                    <div class="w-full bg-[#F7F4F7] p-4">
                        <img class="object-cover" src="/src/assets/images/example-product.png" alt="">
                    </div>
                    <div class="flex flex-col mb-[5px] gap-[5px] sm:mb-[10px] sm:gap-[10px]">
                        <h1 class="font-medium text-sm sm:text-xl text-black">Women's Jacket SHIFT GORE-TEX</h1>
                        <p class="text-[#4E696C] text-xs sm:text-base line-clamp-3">Unsere hybride allround Palmere Hr Isolation aus für eine Vielzahl alpiner Abenteuer.</p>
                        <h2 class="font-medium text-sm sm:text-xl text-black">IDR2.700.000</h2>
                    </div>  
                </div>
                <div class="w-full flex items-center justify-center">
                    <button class="w-[110px] h-[50px] border border-black flex items-center justify-center font-bold text-base text-black">SEE MORE</button>
                </div>
            </div>
            <div class="flex flex-col gap-5">
                <h1 class="font-black text-black text-5xl">WINDBREAKER</h1>
                <div class="flex flex-col w-[150px] sm:w-[300px] h-fit gap-[10px]">
                    <div class="w-full bg-[#F7F4F7] p-4">
                        <img class="object-cover" src="/src/assets/images/example-product.png" alt="">
                    </div>
                    <div class="flex flex-col mb-[5px] gap-[5px] sm:mb-[10px] sm:gap-[10px]">
                        <h1 class="font-medium text-sm sm:text-xl text-black">Women's Jacket SHIFT GORE-TEX</h1>
                        <p class="text-[#4E696C] text-xs sm:text-base line-clamp-3">Unsere hybride allround Palmere Hr Isolation aus für eine Vielzahl alpiner Abenteuer.</p>
                        <h2 class="font-medium text-sm sm:text-xl text-black">IDR2.700.000</h2>
                    </div>  
                </div>
                <div class="w-full flex items-center justify-center">
                    <button class="w-[110px] h-[50px] border border-black flex items-center justify-center font-bold text-base text-black">SEE MORE</button>
                </div>
            </div>
            <div class="flex flex-col gap-5">
                <h1 class="font-black text-black text-5xl">LIGHTWEIGHT</h1>
                <div class="flex flex-col w-[150px] sm:w-[300px] h-fit gap-[10px]">
                    <div class="w-full bg-[#F7F4F7] p-4">
                        <img class="object-cover" src="/src/assets/images/example-product.png" alt="">
                    </div>
                    <div class="flex flex-col mb-[5px] gap-[5px] sm:mb-[10px] sm:gap-[10px]">
                        <h1 class="font-medium text-sm sm:text-xl text-black">Women's Jacket SHIFT GORE-TEX</h1>
                        <p class="text-[#4E696C] text-xs sm:text-base line-clamp-3">Unsere hybride allround Palmere Hr Isolation aus für eine Vielzahl alpiner Abenteuer.</p>
                        <h2 class="font-medium text-sm sm:text-xl text-black">IDR2.700.000</h2>
                    </div>  
                </div>
                <div class="w-full flex items-center justify-center">
                    <button class="w-[110px] h-[50px] border border-black flex items-center justify-center font-bold text-base text-black">SEE MORE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

