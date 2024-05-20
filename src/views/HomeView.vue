<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import CarouselImage from '@/components/CarouselImage.vue' 
import CategoriesSection from '@/components/CategoriesSection.vue'
import BrandsSection from '@/components/BrandsSection.vue';
import TopProductSection from '@/components/TopProductSection.vue';
import TestimoniSection from '@/components/TestimoniSection.vue';
import BenefitSection from '@/components/BenefitSection.vue';
import AtcSection from '@/components/AtcSection.vue';
import NewProduct from '@/components/NewProduct.vue';
</script>

<template>
  <main>
    <CarouselImage />
    <!-- <TheWelcome /> -->
  </main>
  <CategoriesSection />
  <NewProduct />
  <BrandsSection />
  <TopProductSection />
  <TestimoniSection /> 
  <BenefitSection />
  <AtcSection />
</template>
