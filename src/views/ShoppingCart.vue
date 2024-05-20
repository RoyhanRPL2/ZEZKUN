<script setup>
import { ref, computed, onMounted } from 'vue';
import TrashIcon from "@/assets/svg/trash.svg";

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
    <div class="lg:py-[5rem] py-[3rem]">
        <section class="shopping-cart-top-section py-[2rem] lg:px-[5rem] px-[2rem]">
            <h1 class="lg:text-[3.5rem] text-[2rem] uppercase font-[900] lg:text-left text-center">Shopping Cart</h1>
        </section>
        <section
            class="shopping-cart-main-section lg:px-[5rem] flex lg:flex-row flex-col lg:justify-between gap-[1rem] p-[1rem]">
            <div class="product-list-container flex flex-col gap-[2rem]">
                <div v-for="product in limitedProducts" :key="product.id"
                    class="product-item flex lg:flex-row flex-col lg:items-center w-full border border-solid border-[#000] lg:border-none lg:p-0 p-[1rem]">
                    <div class="product-item-image lg:w-[200px] w-full">
                        <img class="w-full h-full object-cover" :src="product.imageUrl" alt="product" />
                    </div>
                    <div class="product-item-details flex flex-col gap-[0.6rem] w-full">
                        <h3 class="product-item-name lg:text-[1rem] text-[1.5rem] uppercase font-[800]">{{ product.name
                            }}</h3>
                        <div class="color-wrapper flex gap-[0.5rem]">
                            <p>Color :</p>
                            <p>{{ formatColors(product.colors) }}</p>
                        </div>
                        <p class="product-item-price text-[1.3rem] font-[800]">{{ formatPrice(product.price) }}</p>
                        <img :src="TrashIcon" class="lg:w-[20px] w-[32px]" alt="">
                    </div>
                </div>
            </div>
            <div class="cart-summary-container bg-[#9FEA1C] p-[2rem] h-fit flex flex-col gap-[2rem]">
                <h3 class="text-[1.5rem] uppercase font-[700]">total</h3>
                <div class="cost-container flex flex-col gap-[1rem]">
                    <div class="subtotal-cost flex justify-between">
                        <p class="text-[1rem] font-[500]">Subtotal</p>
                        <p class="text-[1rem] font-[700]">IDR 3.000.000</p>
                    </div>
                </div>
                <div
                    class="order-total-cost flex gap-[1rem] justify-between border-t border-b border-solid border-[#000] py-[0.5rem]">
                    <p class="text-[1rem] font-[600]">ORDER TOTAL</p>
                    <p class="text-[1rem] font-[800]">IDR 3.000.000</p>
                </div>
                <router-link to="/checkout">
                    <button
                        class="checkout-button bg-[#000] text-[#fff] text-[1rem] font-[800] uppercase py-[0.5rem] w-full">
                        checkout
                    </button>
                </router-link>
            </div>
        </section>
        <div class="lg:flex hidden flex-col gap-8 sm:gap-[60px] px-[5rem] mt-[2rem]">
            <h1 class="font-black text-center sm:text-start text-black sm:text-3xl lg:text-5xl">MAYBE YOU LIKE</h1>
            <div class="lg:flex justify-between gap-[50px]">
                <div v-for="product in limitedProducts" :key="product.id">
                    <div class="flex flex-col w-[150px] sm:w-[300px] h-fit gap-[10px]">
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
            </div>
        </div>
    </div>
</template>