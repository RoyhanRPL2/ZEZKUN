<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import ChevronLeftIcon from '@/assets/svg/chevron-left.svg';
import CarouselImg1 from '@/assets/images/carousel-img-1.png';
import CarouselImg2 from '@/assets/images/carousel-img-2.png';
import CarouselImg3 from '@/assets/images/carousel-img-3.png';

const originalSlides = [
  {
    title: 'New Adventures with Quality Thrift Jackets!',
    description: 'Find high-quality second-hand outdoor jackets that are ready to accompany you on every adventure.',
    image: CarouselImg1
  },
  {
    title: 'Find your favorite Outdoor Jacket at an Affordable Price!',
    description: "Choose your favorite outdoor jacket from our thrift collection. The best quality at a price that doesn't break the bank.",
    image: CarouselImg2
  },
  {
    title: 'Express your adventurous style with a Thrift Jacket!',
    description: 'Show off your adventurous style with a stylish and functional second-hand outdoor jacket. Find the best selection here.',
    image: CarouselImg3
  }
];

// Duplicate the first and last slide for smooth looping
const slides = ref([
  originalSlides[originalSlides.length - 1],
  ...originalSlides,
  originalSlides[0]
]);

const currentSlide = ref(1); // Start at the real first slide
let interval = null;

const startCarousel = () => {
  interval = setInterval(nextSlide, 5000);
};

const nextSlide = () => {
  currentSlide.value++;
  if (currentSlide.value === slides.value.length - 1) {
    setTimeout(() => {
      currentSlide.value = 1; // Reset to the real first slide
      document.querySelector('.carousel-content').style.transition = 'none';
      document.querySelector('.carousel-content').style.transform = `translateX(-${currentSlide.value * 100}%)`;
      setTimeout(() => {
        document.querySelector('.carousel-content').style.transition = 'transform 0.5s ease-in-out';
      }, 20);
    }, 500);
  }
};

const prevSlide = () => {
  currentSlide.value--;
  if (currentSlide.value === 0) {
    setTimeout(() => {
      currentSlide.value = slides.value.length - 2; // Reset to the real last slide
      document.querySelector('.carousel-content').style.transition = 'none';
      document.querySelector('.carousel-content').style.transform = `translateX(-${currentSlide.value * 100}%)`;
      setTimeout(() => {
        document.querySelector('.carousel-content').style.transition = 'transform 0.5s ease-in-out';
      }, 20);
    }, 500);
  }
};

onMounted(() => {
  startCarousel();
});

onBeforeUnmount(() => {
  clearInterval(interval);
});

watch(currentSlide, (newSlide) => {
  document.querySelector('.carousel-content').style.transform = `translateX(-${newSlide * 100}%)`;
});
</script>

<template>
  <div class="carousel relative w-full h-[650px] overflow-hidden">
    <div class="arrow left-arrow absolute top-[45%] translate-x-[50%] cursor-pointer z-10" @click="prevSlide">
      <img :src="ChevronLeftIcon" alt="Icon Arrow Left" class="w-[100px] h-[100px]">
    </div>
    <div class="carousel-content flex transition-transform duration-[0.5s] ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div 
        class="carousel-slide min-w-full h-[650px] box-border bg-cover bg-center flex text-white items-center"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{ backgroundImage: ` url(${slide.image})`, background: `linear-gradient(258deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), url(${slide.image})`, backgroundSize: 'cover'}"
      >
        <div class="carousel-caption text-left max-w-[500px] ml-[200px]">
          <h1 class="text-[48px] font-[900] leading-[110%] mb-[30px]">{{ slide.title }}</h1>
          <p class="text-[16px] font-[500] leading-[145%] tracking-[0.16px] text-white/60">{{ slide.description }}</p>
        </div>
      </div>
    </div>
    <div class="carousel-indicators absolute bottom-[10px] right-[10px] flex">
      <div
        class="indicator w-[15px] h-[10px] bg-white ml-[5px] transition-all duration-300 ease-in-out"
        v-for="(slide, index) in originalSlides"
        :key="index"
        :class="{ active: index === (currentSlide - 1) % originalSlides.length }"
      ></div>
    </div>
  </div>
</template>