<script setup>
import ButtonComponent from './ButtonComponent.vue';
import DiscountIcon from '@/assets/svg/discount.svg';
import { onMounted } from 'vue';

onMounted(() => {
    const voucherItem = document.querySelectorAll('.voucher-item');
    for (let i = 0; i < voucherItem.length; i++) {
        if (voucherItem[i].querySelector('.submit-btn')) {
            voucherItem[i].querySelector('.submit-btn').addEventListener('click', () => {
                alert('Voucher has been used!');
                voucherItem[i].style.display = 'none';
            });
        }
    }
});

</script>

<template>
    <div class="voucher-item flex-col border border-solid border-[#000] lg:w-fit p-[1rem] w-full">
        <div class="flex items-center mb-[1rem] gap-[1rem] w-full">
            <div class="discount-icon-wrapper bg-[#9FEA1C] w-fit p-[1rem]">
                <img class="w-[24px] h-[24px]" :src="DiscountIcon" alt="">
            </div>
            <div class="voucher-info">
                <p class="uppercase">DISCOUNT 10%</p>
                <p class="text-[0.8rem]">Valid until 31 Dec 2024</p>
            </div>
        </div>

        <ButtonComponent variant="shadow" class="submit-btn uppercase text-[0.9rem] px-[2rem] w-full">use
        </ButtonComponent>
    </div>
</template>