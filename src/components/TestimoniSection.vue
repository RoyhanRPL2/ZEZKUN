<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import QuotesIcon from '@/assets/svg/quotes.svg';
import Profile1 from '@/assets/images/profile-1.png';
import Profile2 from '@/assets/images/profile-2.png';
import Profile3 from '@/assets/images/profile-3.png';
import Profile4 from '@/assets/images/profile-4.png';
import Profile5 from '@/assets/images/profile-5.png';
import Profile6 from '@/assets/images/profile-6.png';

const testimonies = [
  {
    name: 'Mavis Wisanggeni',
    job: 'CEO of Company',
    testimoni: 'I am very satisfied with the service and the product quality is very good.',
    profile: Profile1
  },
  {
    name: 'Royhan Bumi',
    job: 'CTO of Company',
    testimoni: 'The product is very good and the price is very affordable. I will definitely recommend this store to my friends.',
    profile: Profile2
  },
  {
    name: 'Jolang Alif',
    job: 'COO of Company',
    testimoni: 'The service is very good and the product quality is very good.',
    profile: Profile3
  },
  {
    name: 'Arkhan Fikri',
    job: 'CFO of Company',
    testimoni: 'The product is very good and the price is very affordable. I will definitely recommend this store to my friends.',
    profile: Profile4
  },
  {
    name: 'Melisa C',
    job: 'CMO of Company',
    testimoni: 'The product is very good and the price is very affordable. I will definitely recommend this store to my friends.',
    profile: Profile5
  },
  {
    name: 'Devin AI',
    job: 'CIO of Company',
    testimoni: 'The service is very good and the product quality is very good.',
    profile: Profile6
  }
];

const testimoniRef = ref(null);

onMounted(() => {
  const marqueeAnimation = () => {
    const totalWidth = testimoniRef.value.scrollWidth / 2;
    gsap.fromTo(
      testimoniRef.value,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 20,
        ease: 'linear',
        repeat: -1,
        onRepeat() {
          gsap.set(testimoniRef.value, { x: 0 });
        }
      }
    );
  };
  marqueeAnimation();
});
</script>

<template>
  <div class="testimoni-container w-full h-fit px-[80px] overflow-hidden py-[120px]">
    <h1 class="text-[48px] font-[800] text-black leading-[130%] tracking-[-0.96px] uppercase mb-[50px]">
      Customer is our priority
    </h1>
    <div class="testimoni flex whitespace-nowrap gap-[20px]" ref="testimoniRef">
      <div
        v-for="(testimony, index) in [...testimonies, ...testimonies]"
        :key="index"
        class="testimoni-card w-[410px] h-[250px] bg-white flex flex-col justify-between border-x-[1px] border-[#E2EBEB] py-[20px] px-[40px]"
      >
        <div class="user-content flex flex-col gap-[20px]">
          <img :src="QuotesIcon" alt="Quotes Icon" class="w-[32px] h-[32px]" />
          <p class="w-[300px] flex whitespace-normal">{{ testimony.testimoni }}</p>
        </div>
        <div class="user-profile flex flex-row justify-start items-center gap-[20px]">
          <img
            :src="testimony.profile"
            :alt="testimony.name"
            class="w-[60px] h-[60px] rounded-[100%] object-cover object-center"
          />
          <div class="user-info">
            <h1 class="text-[16px] font-[600] capitalize">{{ testimony.name }}</h1>
            <p class="text-[16px] font-[400] text-[#526077]">{{ testimony.job }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
