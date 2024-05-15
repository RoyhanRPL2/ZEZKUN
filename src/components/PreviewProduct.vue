<template>
    <section class="bottom-section lg:py-[4rem] lg:px-[5rem] py-[2rem] px-[0.9rem] w-full">
        <h1 class="lg:text-[60px] font-[900] leading-[-1.5px] text-[2rem]">MAYBE YOU LIKE</h1>
        <div class="product-list">
            <div class="product-card w-[400px] flex flex-col gap-[1rem]">
                <div class="img-container">
                    <img src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/088/283/387/original/1204022_01.jpg.jpeg?action=crop&width=600"
                        alt="" />
                </div>
                <h3 class="font-[700]">Supreme x Umbro Snap Sleeve Jacket 'Black'</h3>
                <p>IDR8.000.000</p>
            </div>
            <div class="product-card w-[400px] flex flex-col gap-[1rem]">
                <div class="img-container">
                    <img src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/096/049/853/original/1337289_01.jpg.jpeg?action=crop&width=600"
                        alt="" />
                </div>
                <h3 class="font-[700]">Supreme x Umbro Hooded Anorak 'Dark Purple'</h3>
                <p>IDR3.000.000</p>
            </div>
            <div class="product-card w-[400px] flex flex-col gap-[1rem]">
                <div class="img-container w-fit">
                    <img class="w-full object-cover"
                        src="https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/085/166/798/original/1141832_01.jpg.jpeg?action=crop&width=600"
                        alt="" />
                </div>
                <h3 class="font-[700]">Stussy Basic Zip Hoodie 'Black'</h3>
                <p>IDR3.000.000</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
}

@media screen and (min-width: 380px) and (max-width: 767px) {
    .bottom-section .product-list {
        grid-template-columns: repeat(1, auto);
        gap: 2rem;
        width: 100%;
    }

    .product-card {
        width: auto;
    }

    .product-card .img-container {
        width: 100%;
    }
    .product-card .img-container img {
        width: 100%;
        object-fit: cover;
    }

    .product-card h3 {
        font-size: 1.3rem;
    }

    .product-card p {
        font-size: 1rem;
    }
}
</style>