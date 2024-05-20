<script setup>
import ProfileComponent from '@/components/ProfileComponent.vue';
import OrdersComponent from '@/components/OrdersComponent.vue';
import VoucherComponent from '@/components/VoucherComponent.vue';
import { onMounted } from 'vue';

onMounted(() => {
    const menuList = document.querySelectorAll('.menu-list');
    const ordersComponent = document.querySelector('.orders-component');
    const voucherComponent = document.querySelector('.voucher-component');
    const firstMenuItem = menuList[0].querySelector('a');
    firstMenuItem.classList.add('active');
    ordersComponent.style.display = 'none';
    voucherComponent.style.display = 'none';

    for (let i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener('click', (e) => {
            const target = e.target;
            const menuItem = document.querySelectorAll('.menu-list a');

            menuItem.forEach((menu) => {
                menu.classList.remove('active');
            });

            target.classList.add('active');

            if (e.target.textContent === 'ACCOUNT') {
                document.querySelector('.profile-component').style.display = 'flex';
                document.querySelector('.orders-component').style.display = 'none';
                document.querySelector('.voucher-component').style.display = 'none';
            } else if (e.target.textContent === 'ORDERS') {
                document.querySelector('.profile-component').style.display = 'none';
                document.querySelector('.orders-component').style.display = 'flex';
                document.querySelector('.voucher-component').style.display = 'none';
            } else if (e.target.textContent === 'VOUCHER') {
                document.querySelector('.profile-component').style.display = 'none';
                document.querySelector('.orders-component').style.display = 'none';
                document.querySelector('.voucher-component').style.display = 'flex';
            }
        });
    }
});

</script>

<template>
    <div class="py-[5rem] px-[1rem]">
        <div class="profile-container p-[0.5rem] border border-solid border-[#000] flex flex-col gap-[1em]">
            <div class="menu-list flex gap-[1rem]">
                <a href="#">ACCOUNT</a>
                <a href="#">ORDERS</a>
                <a href="#">VOUCHER</a>
            </div>
            <div class="content">
                <ProfileComponent class="profile-component" />
                <OrdersComponent class="orders-component" />
                <VoucherComponent class="voucher-component" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.active {
    text-decoration: underline;
}
</style>