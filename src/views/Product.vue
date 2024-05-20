<template>
    <div class="flex flex-col sm:gap-[120px]">
        <CarouselImage />
        <div class="flex flex-col items-center sm:items-start gap-[20px] sm:gap-[60px] lg:gap-[120px] m-5 sm:m-20">
            <div class="w-full flex flex-row py-[10px] justify-center sm:justify-between">
                <div class="w-[70%] scrollbar flex flex-row gap-[30px] sm:gap-[20px] overflow-x-auto overflow-y-hidden">
                    <div v-for="(merk, index) in uniqueMerks" :key="index" :class="[
                        'px-[30px] py-3 flex items-center justify-center font-bold text-base cursor-pointer',
                        selectedMerk === merk ? 'text-white bg-black' : 'text-black bg-white border-x-2 border-[#E2EBEB]',
                    ]" style="flex: 0 0 auto; min-width: calc(20% - 20px);" @click="handleMerkClick(merk)">
                        <p>{{ merk }}</p>
                    </div>
                </div>
                <div class="hidden lg:flex">
                    <button class="bg-black px-[30px] py-3">
                        <p class="text-white text-base font-bold">Filter</p>
                    </button>
                </div>
            </div>
            <template v-for="category in categories">
                <h1 class="font-black text-black text-lg sm:text-3xl lg:text-5xl">{{ category }}</h1>
                <div class="grid w-full sm:grid-cols-2 lg:grid-cols-4 sm:gap-[52px] mt-5">
                    <template v-if="filteredProducts(category).length > 0">
                        <div v-for="product in filteredProducts(category)" :key="product.id"
                            class="flex flex-col h-fit gap-[10px]">
                            <router-link :to="`/product-detail/${product.id}`">
                                <div class="w-full bg-[#F7F4F7] p-4">
                                    <img class="object-cover" :src="product.imageUrl" :alt="product.name" />
                                </div>
                                <div class="flex flex-col my-[5px] gap-[5px] sm:my-[10px] sm:gap-[10px]">
                                    <h1 class="font-medium text-sm sm:text-xl text-black">{{ product.name }}</h1>
                                    <p class="text-[#4E696C] text-xs sm:text-base line-clamp-3">{{ product.description
                                        }}</p>
                                    <h2 class="font-medium text-sm sm:text-xl text-black">{{ formatPrice(product.price)
                                        }}</h2>
                                </div>
                            </router-link>
                        </div>
                    </template>
                    <template v-else>
                        <div
                            class="w-full h-[415px] border border-black flex items-center justify-center text-black font-black">
                            PRODUCT NOT FOUND</div>
                    </template>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import CarouselImage from '@/components/CarouselImage.vue'
import { ref, computed, onMounted } from 'vue';

const products = ref([]);
const selectedMerk = ref(null);

onMounted(() => {
    fetch('/src/components/data.json')
        .then(response => response.json())
        .then(data => {
            products.value = data;
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
});

const uniqueMerks = computed(() => {
    return [...new Set(products.value.map(product => product.merk))];
});

const categories = ['Waterproof', 'Windbreaker', 'Lightweight'];

const handleMerkClick = (merk) => {
    selectedMerk.value = merk;
};

const filteredProducts = (category) => {
    return products.value.filter(product =>
        product.category === category &&
        (!selectedMerk.value || product.merk === selectedMerk.value)
    );
};

const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
};
</script>

<style scoped>
.scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #F7F4F7 #0F1314;
}
</style>
