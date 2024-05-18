<script setup>
import { ref, onMounted } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

const imageUrl = ref('');
const accesKey = 'KVMJuOWdvX-hiB4hsrCUd3THrYKHPkTLVWJ4TKEMD3s';
const url = 'https://api.unsplash.com/photos/random';
const fetchRandomImage = async () => {
  fetch(`${url}?client_id=${accesKey}`)
    .then((response) => response.json())
    .then((data) => {
      imageUrl.value = data.urls.regular;
    });
};

onMounted(() => {
  fetchRandomImage();
});

</script>

<template>
  <div class="flex flex-col gap-[1rem]">
    <div class="img-container w-fit">
      <div v-if="imageUrl" class="w-fit">
        <img class="w-[100px] h-[100px] rounded-[50%] object-cover" :src="imageUrl" alt="">
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
    <div class="full-name flex flex-col">
      <label for="">FULL NAME</label>
      <input class="w-fit focus:outline-none placeholder:text-[#000] placeholder:underline" type="text"
        placeholder="Mavis Daffa Wisanggeni">
    </div>
    <div class="full-name flex flex-col">
      <label for="">USERNAME</label>
      <input class="w-fit focus:outline-none placeholder:text-[#000] placeholder:underline" type="text"
        placeholder="Mavis">
    </div>
    <div class="full-name flex flex-col">
      <label for="">EMAIL</label>
      <input class="w-full focus:outline-none placeholder:text-[#000] placeholder:underline" type="email"
        placeholder="maviswisanggeni22@gmail.com">
    </div>
    <div class="full-name flex flex-col">
      <label for="">PHONE NUMBER</label>
      <input class="w-fit focus:outline-none placeholder:text-[#000] placeholder:underline" type="text  "
        placeholder="0123456789876">
    </div>
    <ButtonComponent variant="shadow" class="text-[1rem] uppercase px-[5rem] mb-[1rem] lg:w-fit w-full">
      Save
    </ButtonComponent>
  </div>
</template>