<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/Footer.vue";

</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent/>
</template>
