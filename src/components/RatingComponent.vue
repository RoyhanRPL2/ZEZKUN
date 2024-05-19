<script setup>
import { ref, onMounted } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

const props = defineProps({
    maxStars: {
        type: Number,
        default: 5,
    },
    modelValue: {
        type: Number,
        default: 0,
    },
});

const emit = defineEmits(['update:modelValue']);

const currentRating = ref(props.modelValue);
const temporaryRating = ref(null);

const stars = Array.from({ length: props.maxStars }, (_, i) => i + 1);

const setRating = (rating) => {
    currentRating.value = rating;
    emit('update:modelValue', rating);
};

const hoverRating = (rating) => {
    temporaryRating.value = rating;
};

const resetRating = () => {
    temporaryRating.value = null;
};

const isFilled = (star) => {
    return temporaryRating.value ? star <= temporaryRating.value : star <= currentRating.value;
};

onMounted(() => {
    const submitBtn = document.getElementById('submit-btn');
    const ratingComponent = document.getElementById('rating-component');
    submitBtn.addEventListener('click', () => {
        alert('Thank you for your feedback!');  
        ratingComponent.style.display = 'none';
    });
});
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center backdrop-blur-[2px]" id="rating-component">
        <div class="border border-solid border-[#000] bg-[#fff] p-[1rem]">
            <p class="text-[1.2rem] text-center">Your opinion matters to us</p>

            <div class="star-rating justify-center">
                <span v-for="star in stars" :key="star" class="star text-[3rem] cursor-pointer" :class="{ filled: isFilled(star) }"
                    @click="setRating(star)" @mouseover="hoverRating(star)" @mouseleave="resetRating">
                    ★
                </span>
            </div>
            <textarea class="w-full h-[10rem] border border-solid border-[#000] p-[1rem] mt-[1rem] mb-2"></textarea>
            <ButtonComponent variant="shadow" class="uppercase text-[1rem] px-[2rem] w-full cursor-pointer" id="submit-btn">send
            </ButtonComponent>
        </div>
    </div>
</template>


<style scoped>
.star-rating {
    display: flex;
}

.star.filled {
    color: #ffc107;
}
</style>