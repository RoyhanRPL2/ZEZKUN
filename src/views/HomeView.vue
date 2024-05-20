<template>
  <main>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.imageUrl" :alt="product.name" class="product-image">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <p>Color: {{ product.colors }}</p>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Simulate fetching data from an API or external source
const products = ref([]);

onMounted(() => {
  fetch('/src/components/data.json')  // Replace with the actual path or URL
    .then(response => response.json())
    .then(data => {
      products.value = data;
    })
    .catch(error => {
      console.error('Error fetching product data:', error);
    });
});
</script>

