<script setup>
import { ref, onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import ZezkunLogo from '@/assets/images/zezkun-logo-white.png'
import SearchIcon from '@/assets/svg/magnifying-glass.svg'
import CartIcon from '@/assets/svg/shopping-bag.svg'
import UserIcon from '@/assets/svg/user.svg'
import MenuIcon from '@/assets/svg/bars-2.svg'
import CloseIcon from '@/assets/svg/x-mark.svg'

const isMenuMobileVisible = ref(false)

const toggleMenuMobile = () => {
  isMenuMobileVisible.value = !isMenuMobileVisible.value
}

const closeMenuMobile = () => {
  isMenuMobileVisible.value = false
}

let menuMobile
let tl

const showMenu = () => {
  gsap.to(menuMobile, {
    duration: 1,
    y: 0,
    ease: 'power2.inOut'
  })

  tl = gsap.timeline()
  tl.fromTo(
    '.header-menu-mobile li',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power2.inOut', delay: 0.5 }
  ),
    tl.fromTo(
      '.header-close-icon',
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.in' }
    )
}

const hideMenu = () => {
  gsap.to(menuMobile, {
    duration: 1,
    y: '-100%',
    ease: 'power4.inOut'
  })
}

onMounted(() => {
  menuMobile = document.querySelector('.header-menu-mobile')

  gsap.set(menuMobile, {
    y: '-100%'
  })

  watch(isMenuMobileVisible, (newValue) => {
    if (newValue) {
      showMenu()
    } else {
      hideMenu()
    }
  })
})
</script>

<template>
  <header
    class="bg-white flex w-full h-[70px] justify-between items-center py-0 px-[20px] sm:px-[50px] lg:px-[80px] fixed overflow-visible top-0 left-0 z-[999999]"
  >
    <div class="header-menu hidden sm:block lg:block">
      <ul class="flex items-center gap-[30px]">
        <li>
          <a
            href="#"
            class="no-underline text-[#0F1314] text-[16px] not-italic font-[700] leading-[145%] tracking-[0.16px] uppercase relative before:content-[''] before:absolute before:w-0 before:h-[10px] before:bg-[#9FEA1C] before:bottom-0 before:left-0 before:duration-[0.5s] before:z-[-1] hover:before:w-full"
            >product</a
          >
        </li>
        <li>
          <RouterLink to="/about"
            class="no-underline text-[#0F1314] text-[16px] not-italic font-[700] leading-[145%] tracking-[0.16px] uppercase relative before:content-[''] before:absolute before:w-0 before:h-[10px] before:bg-[#9FEA1C] before:bottom-0 before:left-0 before:duration-[0.5s] before:z-[-1] hover:before:w-full"
            >about</RouterLink>
        </li>
      </ul>
    </div>

    <img
      :src="MenuIcon"
      alt="Menu Icon"
      class="header-menu-icon block sm:hidden lg:hidden"
      @click="toggleMenuMobile"
    />

    <div
      :class="{ 'translate-y-[-100%]': !isMenuMobileVisible, 'translate-y-0': isMenuMobileVisible }"
      class="header-menu-mobile absolute bg-white top-0 left-0 w-full h-screen z-[9999999] sm:hidden"
    >
      <img
        :src="CloseIcon"
        alt="Close Icon"
        class="header-close-icon absolute top-[30px] right-[30px] w-[30px] h-[30px]"
        @click="closeMenuMobile"
      />
      <ul class="h-full flex flex-col justify-center items-center gap-[20px]">
        <li>
          <a
            href="#"
            class="no-underline text-black text-[40px] font-[700] leading-[145%] tracking-[0.16px] uppercase relative after:content-[''] after:absolute after:w-full after:h-[20px] after:bg-[#9FEA1C] after:bottom-0 after:left-0 after:z-[-1]"
            >product</a
          >
        </li>
        <li>
          <RouterLink to="/about" @click="closeMenuMobile"
            class="no-underline text-black text-[40px] font-[700] leading-[145%] tracking-[0.16px] uppercase relative after:content-[''] after:absolute after:w-full after:h-[20px] after:bg-[#9FEA1C] after:bottom-0 after:left-0 after:z-[-1]"
            >about</RouterLink>
        </li>
        <li>
          <a
            href="#"
            class="no-underline text-black text-[40px] font-[700] leading-[145%] tracking-[0.16px] uppercase relative after:content-[''] after:absolute after:w-full after:h-[20px] after:bg-[#9FEA1C] after:bottom-0 after:left-0 after:z-[-1]"
            >profile</a
          >
        </li>
      </ul>
    </div>

    <div class="header-logo hidden sm:block lg:block">
      <img
        :src="ZezkunLogo"
        alt="Zezkun Logo"
        class="mix-blend-difference w-[55px] h-[55px] cursor-pointer"
      />
    </div>
    <div class="header-icons">
      <a href="#" class="py-[10px] px-[15px] justify-center items-center float-left"
        ><img :src="SearchIcon" alt="Search Icon"
      /></a>
      <RouterLink to="/cart"
        class="py-[10px] px-[15px] justify-center items-center float-left"
        ><img :src="CartIcon" alt="Cart Icon"
      /></RouterLink>
      <a
        href="#"
        class="py-[10px] px-[15px] justify-center items-center float-left hidden sm:block lg:block"
        ><img :src="UserIcon" alt="User Icon"
      /></a>
    </div>
  </header>
</template>
