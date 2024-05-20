<script setup>
import { ref, computed, onMounted } from 'vue';

// Create a reactive reference for the products array
const products = ref([]);

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

// Computed property to get only the first 3 products
const limitedProducts = computed(() => {
    return products.value.slice(4, 8);
});

const formatColors = (colors) => {
    return colors.join(', ');
};

const formatPrice = (price) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'IDR' });
};
</script>
<template>
    <div v-for="product in limitedProducts" :key="product.id">
        <div class="lg:flex hidden flex-col w-[150px] sm:w-[300px] h-fit gap-[10px]">
            <div class="w-full bg-[#F7F4F7] p-4">
                <img class="object-cover" :src="product.imageUrl" alt="">
            </div>
            <div class="flex flex-col mb-[5px] gap-[5px] sm:mb-[10px] sm:gap-[10px]">
                <h1 class="font-medium text-sm sm:text-xl text-black">{{ product.name }}</h1>
                <p class="text-[1rem] sm:text-sm text-black">{{ formatColors(product.colors) }}</p>
                <h2 class="font-medium text-sm sm:text-xl text-black">{{ formatPrice(product.price) }}</h2>
            </div>
        </div>
    </div>
</template>