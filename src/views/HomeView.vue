<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
</script>

<template>
  <main class="h-screen flex justify-center items-center">
    <RouterLink to="/about">
      <ButtonComponent variant="shadow">
        Go to About
      </ButtonComponent>
    </RouterLink>
    <TheWelcome />
  </main>
</template>
