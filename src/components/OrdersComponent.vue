<script setup>
import ButtonComponent from "@/components/ButtonComponent.vue"
import RatingComponent from "./RatingComponent.vue";
import { onMounted } from "vue";

onMounted(() => {
    const ratingBtn = document.querySelectorAll('.rating-btn');
    const ratingComponent = document.querySelector('.rating-component');
    for (let i = 0; i < ratingBtn.length; i++) {
        ratingBtn[i].addEventListener('click', () => {
            ratingComponent.style.display = 'flex';
        });
    }
});
</script>

<template>
    <div>
        <RatingComponent class="rating-component hidden z-[1000]" />
        <div class="orders-product-list grid lg:grid-cols-3 gap-[1rem]">
            <div class="orders-product-item w-fit flex gap-[1rem] border border-solid border-[#000] p-[1.3rem]">
                <div class="product-image w-[100px] h-[100px]">
                    <img class="w-full object-cover" src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/077/248/original/1218262_01.jpg.jpeg?action=crop&width=600" alt="">
                </div>
                <div class="product-info flex flex-col gap-[0.5rem]">
                    <p class="product-name uppercase">Supreme x Umbro Hooded Anorak 'Dark Purple'</p>
                    <p class="product-color">PURPLE</p>
                    <p class="product-price">IDR3.000.000</p>
                    <div class="flex justify-end">
                        <ButtonComponent variant="shadow" class="rating-btn uppercase text-[0.9rem] px-[2rem]">rate</ButtonComponent>
                    </div>
                </div>
            </div>
            <div class="orders-product-item w-fit flex gap-[1rem] border border-solid border-[#000] p-[1.3rem]">
                <div class="product-image w-[100px] h-[100px]">
                    <img class="w-full object-cover" src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/052/170/791/original/746095_01.jpg.jpeg?action=crop&width=600" alt="">
                </div>
                <div class="product-info flex flex-col gap-[0.5rem]">
                    <p class="product-name uppercase">Supreme x Umbro Hooded Anorak 'Dark Purple'</p>
                    <p class="product-color">PURPLE</p>
                    <p class="product-price">IDR3.000.000</p>
                    <div class="flex justify-end">
                        <ButtonComponent variant="shadow" class="rating-btn uppercase text-[0.9rem] px-[2rem]">rate</ButtonComponent>
                    </div>
                </div>
            </div>
            <div class="orders-product-item w-fit flex gap-[1rem] border border-solid border-[#000] p-[1.3rem]">
                <div class="product-image w-[100px] h-[100px]">
                    <img class="w-full object-cover" src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/098/939/978/original/1389703_01.jpg.jpeg?action=crop&width=600" alt="">
                </div>
                <div class="product-info flex flex-col gap-[0.5rem]">
                    <p class="product-name uppercase">Supreme x Umbro Hooded Anorak 'Dark Purple'</p>
                    <p class="product-color">PURPLE</p>
                    <p class="product-price">IDR3.000.000</p>
                    <div class="flex justify-end">
                        <ButtonComponent variant="shadow" class="rating-btn uppercase text-[0.9rem] px-[2rem]">rate</ButtonComponent>
                    </div>
                </div>
            </div>
            <div class="orders-product-item w-fit flex gap-[1rem] border border-solid border-[#000] p-[1.3rem]">
                <div class="product-image w-[100px] h-[100px]">
                    <img class="w-full object-cover" src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/077/248/original/1218262_01.jpg.jpeg?action=crop&width=600" alt="">
                </div>
                <div class="product-info flex flex-col gap-[0.5rem]">
                    <p class="product-name uppercase">Supreme x Umbro Hooded Anorak 'Dark Purple'</p>
                    <p class="product-color">PURPLE</p>
                    <p class="product-price">IDR3.000.000</p>
                    <div class="flex justify-end">
                        <ButtonComponent variant="shadow" class="rating-btn uppercase text-[0.9rem] px-[2rem]">rate</ButtonComponent>
                    </div>
                </div>
            </div>
            <div class="orders-product-item w-fit flex gap-[1rem] border border-solid border-[#000] p-[1.3rem]">
                <div class="product-image w-[100px] h-[100px]">
                    <img class="w-full object-cover" src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/052/170/791/original/746095_01.jpg.jpeg?action=crop&width=600" alt="">
                </div>
                <div class="product-info flex flex-col gap-[0.5rem]">
                    <p class="product-name uppercase">Supreme x Umbro Hooded Anorak 'Dark Purple'</p>
                    <p class="product-color">PURPLE</p>
                    <p class="product-price">IDR3.000.000</p>
                    <div class="flex justify-end">
                        <ButtonComponent variant="shadow" class="rating-btn uppercase text-[0.9rem] px-[2rem]">rate</ButtonComponent>
                    </div>
                </div>
            </div>
            <div class="orders-product-item w-fit flex gap-[1rem] border border-solid border-[#000] p-[1.3rem]">
                <div class="product-image w-[100px] h-[100px]">
                    <img class="w-full object-cover" src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/098/939/978/original/1389703_01.jpg.jpeg?action=crop&width=600" alt="">
                </div>
                <div class="product-info flex flex-col gap-[0.5rem]">
                    <p class="product-name uppercase">Supreme x Umbro Hooded Anorak 'Dark Purple'</p>
                    <p class="product-color">PURPLE</p>
                    <p class="product-price">IDR3.000.000</p>
                    <div class="flex justify-end">
                        <ButtonComponent variant="shadow" class="rating-btn uppercase text-[0.9rem] px-[2rem]">rate</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>