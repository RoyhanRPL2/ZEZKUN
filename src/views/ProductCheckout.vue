<script setup>
import MandiriIcon from "@/assets/images/mandiri-logo.png";
import BcaIcon from "@/assets/images/bca-logo.png";
import BniIcon from "@/assets/images/bni-logo.png";
import BriIcon from "@/assets/images/bri-logo.png";
</script>

<template>
    <div class="lg:py-[5rem] p-[2rem]">
        <section class="checkout-top-section py-[2rem] lg:px-[5rem]">
            <h1 class="text-[3.5rem] font-[900] uppercase">CHECKOUT</h1>
        </section>
        <section
            class="checkout-middle-section lg:py-[2rem] lg:px-[5rem] flex lg:justify-between gap-[4rem] flex-col-reverse lg:flex-row">
            <div class="checkout-user-info flex flex-col gap-[1rem] w-full">
                <div class="checkout-user-contact-container py-[1.5rem]  border-t border-b border-solid border-[#000]">
                    <div class="user-contact-wrapper w-fit flex flex-col gap-[1rem]">
                        <h1 class="text-[32px] font-[800] p-0 m-0">CONTACT INFORMATION</h1>
                        <div class="contact-info flex flex-col gap-[0.5rem]">
                            <label class="text-[1rem] font-[700]" for="">EMAIL</label>
                            <input class="border border-[#000] p-[0.5rem] text-[1rem] font-[700] mb-[0.5rem]"
                                type="text">
                        </div>
                    </div>
                </div>
                <div class="checkout-user-address pb-[1.5rem]  border-b border-solid border-[#000]">
                    <div class="user-address w-fit flex flex-col gap-[1rem]">
                        <h1 class="text-[32px] font-[800] p-0 m-0">DELIVERY ADDRESS</h1>
                        <div class="address-info flex flex-col gap-[1rem]">
                            <div class="user-first-name flex flex-col gap-[0.5rem]">
                                <label class="text-[1rem] font-[700]" for="">FIRST NAME</label>
                                <input class="border border-[#000] p-[0.5rem] text-[1rem] font-[700]" type="text">
                            </div>
                            <div class="user-last-name flex flex-col gap-[0.5rem]">
                                <label class="text-[1rem] font-[700]" for="">LAST NAME</label>
                                <input class="border border-[#000] p-[0.5rem] text-[1rem] font-[700]" type="text">
                            </div>
                            <div class="user-address flex flex-col gap-[0.5rem]">
                                <label class="text-[1rem] font-[700]" for="">ADDRESS</label>
                                <textarea class="border border-[#000] text-[1rem] p-[0.5rem]" name="" id=""></textarea>
                            </div>
                            <div class="user-phone-number flex flex-col gap-[0.5rem]">
                                <label class="text-[1rem] font-[700]" for="">PHONE NUMBER</label>
                                <input class="border border-[#000] text-[1rem] p-[0.5rem]" type="number">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="checkout-user-delivery-options pb-[1.5rem] border-b border-solid border-[#000]">
                    <div class="user-delivery-options lg:w-fit flex flex-col gap-[1rem]">
                        <h1 class="text-[32px] font-[800] p-0 m-0">DELIVERY OPTIONS</h1>
                        <div class="delivery-options flex flex-col gap-[1rem]">
                            <div class="delivery-option flex gap-[1rem] items-center">
                                <input class="custom-radio" type="radio" name="delivery-option" id="standard">
                                <label class="text-[1rem] font-[700] uppercase" for="standard">Standard Delivery</label>
                            </div>
                            <div class="delivery-option flex gap-[1rem] items-center">
                                <input class="custom-radio" type="radio" name="delivery-option" id="express">
                                <label class="text-[1rem] font-[700] uppercase" for="express">Express Delivery</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="checkout-user-payment pb-[1.5rem] border-b border-solid border-[#000]">
                    <div class="user-payment lg:w-fit flex flex-col gap-[1rem]">
                        <h1 class="text-[32px] font-[800]">PAYMENT METHOD</h1>
                        <div class="payment-method-list flex flex-col gap-[1.5rem]">
                            <div class="payment-method flex gap-[1rem] items-center">
                                <input class="custom-radio" type="radio" name="payment-method" id="credit-card">
                                <div class="payment-method-image-container border border-[#000] py-[1rem] px-[1.5rem]">
                                    <img class="w-full object-cover" :src="BcaIcon" alt="">
                                </div>
                            </div>
                            <div class="payment-method flex gap-[1rem] items-center">
                                <input class="custom-radio" type="radio" name="payment-method" id="paypal">
                                <div class="payment-method-image-container border border-[#000] py-[1rem] px-[1.5rem]">
                                    <img class="w-full object-cover" :src="MandiriIcon" alt="">
                                </div>
                            </div>
                            <div class="payment-method flex gap-[1rem] items-center">
                                <input class="custom-radio" type="radio" name="payment-method" id="paypal">
                                <div class="payment-method-image-container border border-[#000] py-[1rem] px-[1.5rem]">
                                    <img class="w-full object-cover" :src="BniIcon" alt="">
                                </div>
                            </div>
                            <div class="payment-method flex gap-[1rem] items-center">
                                <input class="custom-radio" type="radio" name="payment-method" id="paypal">
                                <div class="payment-method-image-container border border-[#000] py-[1rem] px-[1.5rem]">
                                    <img class="w-full object-cover" :src="BriIcon" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="btn shadow w-full py-[1rem] px-[5rem] border border-solid border-[#000] bg-[#9FEA1C] text-[1rem] font-[800]">PLACE
                    ORDER</button>
            </div>
            <div class="cart-summary bg-[#9FEA1C] p-[1.5rem] h-fit flex flex-col gap-[1rem]">
                <h3 class="text-[1.5rem] uppercase font-[700]">YOUR CART</h3>
                <div class="cost-container flex flex-col gap-[0.4rem]">
                    <div class="subtotal-cost flex justify-between">
                        <p class="text-[1rem] font-[500]">Subtotal</p>
                        <p class="text-[1rem] font-[700]">IDR 3.000.000</p>
                    </div>
                    <div class="shipping-cost flex justify-between">
                        <p class="text-[1rem] font-[500]">Shipping Cost</p>
                        <p class="text-[1rem] font-[700]">IDR 28.000</p>
                    </div>
                    <div class="platform-cost flex justify-between">
                        <p class="text-[1rem] font-[500]">Platform Service Cost</p>
                        <p class="text-[1rem] font-[700]">IDR 28.000</p>
                    </div>
                </div>
                <div
                    class="order-total-cost flex justify-between border-t border-b border-solid border-[#000] py-[0.5rem]">
                    <p class="text-[1rem] font-[600]">ORDER TOTAL</p>
                    <p class="text-[1rem] font-[800]">IDR 3.056.000</p>
                </div>
                <div class="cart-order-product-list">
                    <div class="card-order-product-item flex gap-[1rem] items-center">
                        <div class="product-image w-[150px]">
                            <img class="w-full object-cover"
                                src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/077/248/original/1218262_01.jpg.jpeg?action=crop&width=600"
                                alt="">
                        </div>
                        <div class="product-info">
                            <p class="font-[700]">IDR 3.000.000</p>
                            <h3 class="uppercase font-[600]">Air Jordan 1 Retro High OG 'Shadow 2.0'</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.custom-radio {
    width: 1.3rem;
    height: 1.3rem;
}
</style>