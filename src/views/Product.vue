<template>
    <div class="flex flex-col gap-[120px]">
        <CarouselImage />
        <div class="flex flex-col gap-[120px] m-20">
            <div class="flex flex-row py-[10px] justify-between">
                <div class="flex flex-row gap-[20px]">
                    <div class="flex flex-row gap-5">
                        <div
                            class="text-white bg-black px-[30px] py-3 flex items-center justify-center font-bold text-base">
                            <p>COLUMBIA</p>
                        </div>
                        <div
                            class="bg-white text-black border-x-2 border-[#E2EBEB] px-[30px] py-3 flex items-center justify-center font-bold text-base">
                            <p>LAFUMA</p>
                        </div>
                        <div
                            class="bg-white text-black border-x-2 border-[#E2EBEB] px-[30px] py-3 flex items-center justify-center font-bold text-base">
                            <p>MILLET</p>
                        </div>
                        <div
                            class="bg-white text-black border-x-2 border-[#E2EBEB] px-[30px] py-3 flex items-center justify-center font-bold text-base">
                            <p>BLACKYAK</p>
                        </div>
                        <div
                            class="bg-white text-black border-x-2 border-[#E2EBEB] px-[30px] py-3 flex items-center justify-center font-bold text-base">
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
                <div class="grid grid-cols-4 gap-[52px]">
                  <div
                    v-for="product in displayedWaterproofProducts"
                    :key="product.id"
                    class="flex flex-col w-[150px] sm:w-[300px] h-fit gap-[10px]"
                  >
                    <div class="w-full bg-[#F7F4F7] p-4">
                      <img class="object-cover" :src="product.imageUrl" :alt="product.name" />
                    </div>
                    <div class="flex flex-col mb-[5px] gap-[5px] sm:mb-[10px] sm:gap-[10px]">
                      <h1 class="font-medium text-sm sm:text-xl text-black">{{ product.name }}</h1>
                      <p class="text-[#4E696C] text-xs sm:text-base line-clamp-3">{{ product.description }}</p>
                      <h2 class="font-medium text-sm sm:text-xl text-black">{{ product.price | currency }}</h2>
                    </div>
                  </div>
                </div>
                <div class="w-full flex items-center justify-center">
                  <button
                    @click="showAllProducts"
                    v-if="!allProductsShown"
                    class="w-[110px] h-[50px] border border-black flex items-center justify-center font-bold text-base text-black"
                  >
                    SEE MORE
                  </button>
                </div>
              </div>
            <div class="flex flex-col gap-5">
                <h1 class="font-black text-black text-5xl">WINDBREAKER</h1>
                <div class="grid grid-cols-4 gap-[52px]">
                    <div v-for="product in displayedWindbreakerProducts" :key="product.id"
                        class="flex flex-col w-[150px] sm:w-[300px] h-fit gap-[10px]">
                        <div class="w-full bg-[#F7F4F7] p-4">
                            <img class="object-cover" :src="product.imageUrl" :alt="product.name" />
                        </div>
                        <div class="flex flex-col mb-[5px] gap-[5px] sm:mb-[10px] sm:gap-[10px]">
                            <h1 class="font-medium text-sm sm:text-xl text-black">{{ product.name }}</h1>
                            <p class="text-[#4E696C] text-xs sm:text-base line-clamp-3">{{ product.description }}</p>
                            <h2 class="font-medium text-sm sm:text-xl text-black">{{ product.price | currency }}</h2>
                        </div>
                    </div>
                </div>
                <div class="w-full flex items-center justify-center">
                    <button
                    @click="showAllProducts"
                    v-if="!allProductsShown"
                    class="w-[110px] h-[50px] border border-black flex items-center justify-center font-bold text-base text-black"
                  >
                    SEE MORE
                  </button>
                </div>
            </div>
            <div class="flex flex-col gap-5">
                <h1 class="font-black text-black text-5xl">LIGHTWEIGHT</h1>
                <div class="grid grid-cols-4 gap-[52px]">
                    <div v-for="product in displayedLightweightProducts" :key="product.id"
                        class="flex flex-col w-[150px] sm:w-[300px] h-fit gap-[10px]">
                        <div class="w-full bg-[#F7F4F7] p-4">
                            <img class="object-cover" :src="product.imageUrl" :alt="product.name" />
                        </div>
                        <div class="flex flex-col mb-[5px] gap-[5px] sm:mb-[10px] sm:gap-[10px]">
                            <h1 class="font-medium text-sm sm:text-xl text-black">{{ product.name }}</h1>
                            <p class="text-[#4E696C] text-xs sm:text-base line-clamp-3">{{ product.description }}</p>
                            <h2 class="font-medium text-sm sm:text-xl text-black">{{ product.price | currency }}</h2>
                        </div>
                    </div>
                </div>
                <div class="w-full flex items-center justify-center">
                    <button
                        class="w-[110px] h-[50px] border border-black flex items-center justify-center font-bold text-base text-black">SEE
                        MORE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CarouselImage from '@/components/CarouselImage.vue'
import { ref, computed, onMounted } from 'vue';

const products = ref([]);
const allProductsShown = ref(false);

// Fetch data when the component is mounted
onMounted(() => {
    fetch('/src/components/data.json')  // Adjust the path to your actual JSON file location
        .then(response => response.json())
        .then(data => {
            products.value = data;  // Store the fetched data in the products ref
        })
        .catch(error => {
            console.error('Error fetching product data:', error);  // Handle any errors during the fetch
        });
});

// Filter products by category 'Waterproof'
const waterproofProducts = computed(() =>
    products.value.filter(product => product.category === 'Waterproof')
);

// Filter products by category 'Windbreaker'
const windbreakerProducts = computed(() =>
    products.value.filter(product => product.category === 'Windbreaker')
);

// Filter products by category 'Lightweight'
const lightweightProducts = computed(() =>
    products.value.filter(product => product.category === 'Lightweight')
);

const displayedWaterproofProducts = computed(() => 
  allProductsShown.value ? waterproofProducts.value : waterproofProducts.value.slice(0, 4)
);

const displayedWindbreakerProducts = computed(() => 
  allProductsShown.value ? windbreakerProducts.value : windbreakerProducts.value.slice(0, 4)
);

const displayedLightweightProducts = computed(() => 
  allProductsShown.value ? lightweightProducts.value : lightweightProducts.value.slice(0, 4)
);

const showAllProducts = () => {
  allProductsShown.value = true;
};

// Currency filter function
const currency = value => {
    if (typeof value !== 'number') return value;
    return 'IDR ' + value.toLocaleString('id-ID');
};
</script>
