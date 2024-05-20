<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

import BrandBlackYak from '@/assets/images/brand-black-yak.png'
import BrandColumbia from '@/assets/images/brand-columbia.png'
import BrandEider from '@/assets/images/brand-eider.png'
import BrandLafuma from '@/assets/images/brand-lafuma.png'
import BrandTheNorthFace from '@/assets/images/brand-the-north-face.png'

const brandsRef = ref(null)
const props = defineProps({
  delay: Number
})

onMounted(() => {
  const tl = gsap.timeline({ repeat: -1, defaults: { duration: 0, ease: 'power4.inOut' } })

  tl.to(brandsRef.value, { filter: 'blur(5px)', duration: 0, delay: props.delay, ease: 'power4.inOut'})
    .to(brandsRef.value, { y: '-=100px', filter: 'blur(0px)', duration: 1.5, ease: 'power4.out' })
    .to(brandsRef.value, { filter: 'blur(5px)', duration: 0, delay: 1, ease: 'power4.inOut' })
    .to(brandsRef.value, { y: '-=100px', filter: 'blur(0px)', duration: 1.5, ease: 'power4.out' })
    .to(brandsRef.value, { filter: 'blur(5px)', duration: 0, delay: 1, ease: 'power4.inOut' })
    .to(brandsRef.value, { y: '-=100px', filter: 'blur(0px)', duration: 1.5, ease: 'power4.out' })
    .to(brandsRef.value, { filter: 'blur(5px)', duration: 0, delay: 1, ease: 'power4.inOut' })
    .to(brandsRef.value, { y: '-=100px', filter: 'blur(0px)', duration: 1.5, ease: 'power4.out' })
    .to(brandsRef.value, { filter: 'blur(5px)', duration: 0, delay: 1, ease: 'power4.inOut' })
    .to(brandsRef.value, { y: '-=100px', filter: 'blur(0px)', duration: 0, ease: 'power4.out' })
})
</script>

<template>
  <div class="brand w-[240px] h-[100px] bg-white overflow-hidden">
    <div class="translate-y-[100px]" ref="brandsRef">
      <img :src="BrandBlackYak" alt="Black Yak" />
      <img :src="BrandColumbia" alt="Columbia" />
      <img :src="BrandEider" alt="Eider" />
      <img :src="BrandLafuma" alt="Lafuma" />
      <img :src="BrandTheNorthFace" alt="The North Face" />
    </div>
  </div>
</template>
