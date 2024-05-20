<script setup>
import BackIcon from "@/assets/svg/back-arrow.svg";
import UserIcon from "@/assets/svg/user.svg";
import StarIcon from "@/assets/svg/star.svg";
import PreviewProduct from "@/components/PreviewProduct.vue";
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const product = ref(null);
const mainImageUrl = ref('');
const imageList = ref([]);
const route = useRoute();
const router = useRouter();

const fetchProductData = async () => {
    const productId = route.params.id;
    try {
        const response = await fetch('/src/components/data.json');
        const data = await response.json();
        product.value = data.find(p => p.id == productId);
        if (product.value) {
            mainImageUrl.value = product.value.imageUrl; // Set the initial main image
            imageList.value = [product.value.imageUrl, product.value.image2, product.value.image3]; 
        }
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
};

const updateMainImage = (imageUrl) => {
    mainImageUrl.value = imageUrl; // Update the main image URL
};

const formatPrice = (price) => {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'IDR' });
};

const formatColors = (colors) => {
    return colors.join(', ');
};

const goBack = () => {
  router.go(-1); // Navigate to the previous page
};

onMounted(fetchProductData);


</script>

<template>
    <main>
        <div v-if="product">
            <section class="top-section py-[5rem] px-[0.9rem]">
                <div
                    class="top-content-wrapper flex items-center lg:py-[2rem] lg:px-[5rem] lg:gap-[2rem] lg:border-0 py-[0.8rem] gap-[1.5rem] border-t border-b border-solid border-[#000]">
                    <div class="back-button relative cursor-pointer" @click="goBack">
                        <img :src="BackIcon" class="back-icon lg:w-[20rem] w-[16rem]" alt="">
                        <p class="absolute right-[13%] top-[55%] underline lg:text-base text-[0.9rem]">BACK</p>
                    </div>
                    <h1 class="product-title lg:text-[3.5rem] font-[900] uppercase text-[1.3rem]">{{ product.name }}
                    </h1>
                </div>
            </section>
            <section class="middle-section lg:px-[5rem] flex flex-col lg:gap-[2rem] px-[0.9rem] py-[1rem]">
                <div class="product-preview-image flex justify-center mb-[2rem]">
                    <div class="img-container flex w-[600px]">
                        <img class="w-full object-cover" :src="mainImageUrl" alt="">
                    </div>
                </div>
                <div class="product-image-list flex justify-center gap-[2rem]">
                    <div class="img-container w-[70px] cursor-pointer" v-for="(image, index) in imageList" :key="index"
                        :class="{ active: mainImageUrl === image }" @click="updateMainImage(image)">
                        <img class="w-full object-cover" :src="image" alt="" />
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-size p-[3rem] border border-solid border-[#000] flex flex-col items-center">
                        <h3 class="text-[1.5rem] mb-[1rem] uppercase font-[800]">SIZE</h3>
                        <div class="size-container py-[0.5rem] px-[1rem] border border-solid border-[#000]">
                            <p class="font-[1.5rem] font-[500] uppercase">{{ product.sizes }}</p>
                        </div>
                    </div>
                    <div
                        class="product-color p-[3rem] border border-solid border-[#000] flex flex-col justify-center items-center">
                        <h3 class="text-[1.5rem] uppercase mb-[1rem] font-[800]">COLOR</h3>
                        <div class="color-container flex flex-col items-center gap-[1rem]">
                            <p>{{ formatColors(product.colors) }}</p>
                        </div>
                    </div>
                    <div class="product-desc p-[2rem] border border-solid border-[#000] flex flex-col gap-[0.5rem]">
                        <h3 class="font-[800] lg:text-base text-[1.2rem]">PRODUCT DETAILS</h3>
                        <p>{{ product.description }}</p>
                    </div>
                    <div
                        class="product-price p-[3rem] border border-solid border-[#000] flex justify-center items-center bg-[#23272e]">
                        <p class="text-[2rem] font-[900] text-[#f4ffe4]">{{ formatPrice(product.price) }}</p>
                    </div>
                    <div
                        class="add-to-cart p-[3rem] border border-solid border-[#000] flex justify-center items-center">
                        <RouterLink to="/cart"
                            class="text-[#000] lg:text-[32px] font-[500] uppercase decoration-none text-[1.5rem]">
                            ADD TO CART
                        </RouterLink>
                    </div>
                </div>
                <div class="product-review py-[1.3rem] border-t border-b border-solid border-[#000]">
                    <h3 class="text-[2rem] font-[800] uppercase">REVIEW</h3>
                    <div class="product-review-list flex flex-col gap-[1rem] mt-[1rem]">
                        <div class="product-review-item flex flex-col gap-[0.5rem]">
                            <div class="product-review-header flex items-center gap-[1rem]">
                                <img class="w-[25px] h-[25px]" :src="UserIcon" alt="user-image" />
                                <p class="text-[14px] font-[400] uppercase">John Doe</p>
                            </div>
                            <div class="product-review-content">
                                <div class="review-star flex">
                                    <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                    <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                    <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                    <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                    <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                </div>
                                <p>Great quality, fast shipping, and good price. I'm very satisfied with the product.
                                </p>
                            </div>
                        </div>
                        <div class="product-review-item flex flex-col gap-[0.5rem]">
                            <div class="product-review-header flex items-center gap-[1rem]">
                                <img class="w-[25px] h-[25px]" :src="UserIcon" alt="user-image" />
                                <p class="text-[14px] font-[400] uppercase">John Doe</p>
                            </div>
                            <div class="product-review-content">
                                <div class="review-star flex">
                                    <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                    <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                    <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                    <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                    <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                </div>
                                <p>Great quality, fast shipping, and good price. I'm very satisfied with the product.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PreviewProduct />
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </main>
</template>

<style>
.product-size {
    grid-area: product-size;
}

.product-color {
    grid-area: product-color;
}

.product-desc {
    grid-area: product-desc;
}

.product-price {
    grid-area: product-price;
}

.add-to-cart {
    grid-area: add-to-cart;
}

.middle-section .product-info {
    display: grid;
    grid-template-areas:
        "product-size product-desc product-price"
        "product-color product-desc add-to-cart";
}

.product-image-list .img-container.active {
  border: 2px solid #000; /* Add your active class styles here */
}

@media screen and (min-width: 380px) and (max-width: 768px) {
    .middle-section .product-info {
        margin: 1.5rem 0;
        grid-template-areas:
            "product-desc"
            "product-size"
            "product-color"
            "product-price"
            "add-to-cart";
    }
}
</style>