<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<template>

  <HeaderComponent />
  <!-- <h1 class="text-7xl text-black">Hello World</h1> -->

  <RouterView />
</template>
