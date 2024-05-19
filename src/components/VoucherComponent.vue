<script setup>
import { ref } from 'vue';
import { createApp, h } from 'vue';
import ButtonComponent from './ButtonComponent.vue';
import VoucherItem from './VoucherCardComponent.vue';

const voucherList = ref(null);
const voucherItems = ref([]);

function addVoucher() {
    const voucherCode = document.querySelector('.add-voucher input').value;

    if (voucherCode) {
        const voucherItemContainer = document.createElement('div');
        voucherList.value.appendChild(voucherItemContainer);

        const app = createApp({
            render() {
                return h(VoucherItem, {
                    voucherCode,
                    onVoucherUsed: () => {
                        alert('Voucher has been used!');
                        app.unmount();
                        voucherItemContainer.remove();
                        voucherItems.value = voucherItems.value.filter(item => item !== voucherCode);
                    }
                });
            }
        });

        app.mount(voucherItemContainer);
        voucherItems.value.push(voucherCode);
    } else {
        alert('Please input a voucher code!');
    }
}
</script>

<template>
    <div class="flex flex-col gap-[1rem]">
        <div
            class="border border-solid border-[#000] flex lg:flex-row flex-col lg:justify-center lg:items-center p-[1rem] gap-[0.7rem] items-start add-voucher">
            <p class="uppercase">add voucher</p>
            <input class="focus:outline-none border border-solid border-[#000] p-[0.5rem] lg:w-fit w-full" type="text">
            <ButtonComponent variant="shadow" class="uppercase text-[0.9rem] px-[2rem] lg:w-fit w-full"
                @click="addVoucher">add
            </ButtonComponent>
        </div>
        <div class="voucher-list" ref="voucherList">
            <p class="uppercase" v-if="voucherItems.length === 0">voucher not available</p>
        </div>
    </div>
</template>

<style scoped>
.voucher-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
}
</style>