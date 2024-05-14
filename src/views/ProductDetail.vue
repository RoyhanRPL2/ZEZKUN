<script setup>
import BackIcon from "@/assets/svg/back-arrow.svg";
import UserIcon from "@/assets/svg/user.svg";
import StarIcon from "@/assets/svg/star.svg";
import PreviewProduct from "@/components/PreviewProduct.vue";
</script>

<template>
    <main>
        <section class="top-section py-[5rem] px-[0.9rem]">
            <div class="top-content-wrapper flex items-center lg:py-[2rem] lg:px-[5rem] lg:gap-[2rem] lg:border-0 py-[0.8rem] gap-[1.5rem] border-t border-b border-solid border-[#000]">
                <div class="back-button relative">
                    <img :src="BackIcon" class="back-icon lg:w-[20rem] w-[16rem]" alt="">
                    <p class="absolute right-[13%] top-[55%] underline lg:text-base text-[0.9rem]">BACK</p>
                </div>
                <h1 class="product-title lg:text-[3.5rem] font-[900] uppercase text-[1.3rem]">Supreme x Umbro Hooded Anorak 'Dark Purple'
                </h1>
            </div>
        </section>
        <section class="middle-section lg:px-[5rem] flex flex-col lg:gap-[2rem] px-[0.9rem] py-[1rem]">
            <div class="product-preview-image flex justify-center mb-[2rem]">
                <div class="img-container flex w-[600px]">
                    <img class="w-full object-cover"
                        src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/077/248/original/1218262_01.jpg.jpeg?action=crop&width=600"
                        alt="">
                </div>
            </div>
            <div class="product-image-list flex justify-center gap-[2rem]">
                <div class="img-container w-[70px]">
                    <img class="w-full object-cover"
                        src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/077/248/original/1218262_01.jpg.jpeg?action=crop&width=600"
                        alt="" />
                </div>
                <div class="img-container w-[70px]">
                    <img class="w-full object-cover"
                        src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/077/250/original/1218262_02.jpg.jpeg?action=crop&width=600"
                        alt="" />
                </div>
                <div class="img-container w-[70px]">
                    <img class="w-full object-cover"
                        src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/077/244/original/1218262_03.jpg.jpeg?action=crop&width=600"
                        alt="" />
                </div>
            </div>
            <div class="product-info">
                <div class="product-size p-[3rem] border border-solid border-[#000] flex flex-col items-center">
                    <h3 class="text-[1.5rem] mb-[1rem] uppercase font-[800]">SIZE</h3>
                    <div class="size-container py-[0.5rem] px-[1rem] border border-solid border-[#000]">
                        <p class="font-[1.5rem] font-[500] uppercase">L</p>
                    </div>
                </div>
                <div
                    class="product-color p-[3rem] border border-solid border-[#000] flex flex-col justify-center items-center">
                    <h3 class="text-[1.5rem] uppercase mb-[1rem] font-[800]">COLOR</h3>
                    <div class="color-container flex flex-col items-center gap-[1rem]">
                        <p>Dark Purple</p>
                        <div class="color-preview w-[30px] h-[30px] rounded-[50%] bg-[#301934]"></div>
                    </div>
                </div>
                <div class="product-desc p-[2rem] border border-solid border-[#000] flex flex-col gap-[0.5rem]">
                    <h3 class="font-[800] lg:text-base text-[1.2rem]">PRODUCT DETAILS</h3>
                    <p>Supreme x Umbro Hooded Anorak 'Dark Purple' is a collaboration between the New York City
                        streetwear brand
                        and the British sportswear label. The pullover jacket features a purple nylon shell with a
                        half-zip closure,
                        a kangaroo pocket and a drawstring hood. The front is accented with a white Umbro logo and a
                        Supreme box
                        logo patch.</p>
                </div>
                <div
                    class="product-price p-[3rem] border border-solid border-[#000] flex justify-center items-center bg-[#23272e]">
                    <p class="text-[2rem] font-[900] text-[#f4ffe4]">IDR3.000.000</p>
                </div>
                <div class="add-to-cart p-[3rem] border border-solid border-[#000] flex justify-center items-center">
                    <a href="#" class="text-[#000] lg:text-[32px] font-[500] uppercase decoration-none text-[1.5rem]">
                        ADD TO CART
                    </a>
                </div>
            </div>
            <div class="product-review py-[1.3rem] border-t border-b border-solid border-[#000]">
                <h3 class="text-[2rem] font-[800] uppercase">REVIEW</h3>
                <div class="product-review-list flex flex-col gap-[1rem] mt-[1rem]">
                    <div class="product-review-item flex flex-col gap-[0.5rem]">
                        <div class="product-review-header flex items-center gap-[1rem]">
                            <img class="w-[25px] h-[25px]" :src="UserIcon" alt="user-image" />
                            <p class="text-[14px] font-[400] uppercase">John Doe</p>
                        </div>
                        <div class="product-review-content">
                            <div class="review-star flex">
                                <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                            </div>
                            <p>Great quality, fast shipping, and good price. I'm very satisfied with the product.</p>
                        </div>
                    </div>
                    <div class="product-review-item flex flex-col gap-[0.5rem]">
                        <div class="product-review-header flex items-center gap-[1rem]">
                            <img class="w-[25px] h-[25px]" :src="UserIcon" alt="user-image" />
                            <p class="text-[14px] font-[400] uppercase">John Doe</p>
                        </div>
                        <div class="product-review-content">
                            <div class="review-star flex">
                                <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                                <img :src="StarIcon" class="star-icon w-[1.5rem] h-[1.5rem]" alt="">
                            </div>
                            <p>Great quality, fast shipping, and good price. I'm very satisfied with the product.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PreviewProduct />
    </main>
</template>

<style>
.product-size {
    grid-area: product-size;
}

.product-color {
    grid-area: product-color;
}

.product-desc {
    grid-area: product-desc;
}

.product-price {
    grid-area: product-price;
}

.add-to-cart {
    grid-area: add-to-cart;
}

.middle-section .product-info {
    display: grid;
    grid-template-areas:
        "product-size product-desc product-price"
        "product-color product-desc add-to-cart";
}

@media screen and (min-width: 380px) and (max-width: 768px) {
    .middle-section .product-info {
        margin: 1.5rem 0;
        grid-template-areas:
            "product-desc"
            "product-size"
            "product-color"
            "product-price"
            "add-to-cart";
    }
}
</style>