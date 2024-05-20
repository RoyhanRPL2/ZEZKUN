<script setup>
import { ref, computed, onMounted } from 'vue'

const products = ref([])

const limitedProducts = computed(() => {
  return products.value.slice(4, 7)
})

const formatColors = (colors) => {
  return colors.join(', ')
}

const formatPrice = (price) => {
  return price.toLocaleString('en-US', { style: 'currency', currency: 'IDR' })
}

onMounted(() => {
  fetch('/src/components/data.json')
    .then((response) => response.json())
    .then((data) => {
      products.value = data
    })
    .catch((error) => {
      console.error('Error fetching product data:', error)
    })
})
</script>

<template>
  <div class="lg:flex hidden flex-col gap-8 sm:gap-[60px] px-[5rem] my-[2rem]">
    <div class="lg:flex justify-between gap-[20px]">
        <div>
      <h1 class="font-black text-center sm:text-start text-black sm:text-3xl lg:text-5xl max-w-[200px] mb-[20px]">
        NEW PRODUCT
      </h1>
      <p class="text-justify pr-[30px]">Enjoy the thrill of finding high-quality outdoor gear at a fraction of the original price.</p>
    </div>
      <div v-for="product in limitedProducts" :key="product.id">
        <div class="flex flex-col w-[150px] sm:w-[300px] h-fit gap-[10px]">
          <div class="w-full bg-[#F7F4F7] p-4">
            <img class="object-cover" :src="product.imageUrl" alt="" />
          </div>
          <div class="flex flex-col mb-[5px] gap-[5px] sm:mb-[10px] sm:gap-[10px]">
            <h1 class="font-medium text-sm sm:text-xl text-black">{{ product.name }}</h1>
            <p class="text-[1rem] sm:text-sm text-black">{{ formatColors(product.colors) }}</p>
            <h2 class="font-medium text-sm sm:text-xl text-black">
              {{ formatPrice(product.price) }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
}

@media screen and (min-width: 380px) and (max-width: 767px) {
  .bottom-section .product-list {
    grid-template-columns: repeat(1, auto);
    gap: 2rem;
    width: 100%;
  }

  .product-card {
    width: auto;
  }

  .product-card .img-container {
    width: 100%;
  }

  .product-card .img-container img {
    width: 100%;
    object-fit: cover;
  }

  .product-card h3 {
    font-size: 1.3rem;
  }

  .product-card p {
    font-size: 1rem;
  }
}
</style>
