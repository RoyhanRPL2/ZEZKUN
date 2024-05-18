<template>
    <div class="relative w-full">
        <div class="fixed inset-0 flex items-center justify-center mx-[1rem]">
            <div class="border border-solid border-[#000] bg-[#fff] p-[1rem]">
                <p class="text-[1.2rem] text-center">Your opinion matters to us</p>
                
                <div class="star-rating justify-center">
                    <span v-for="star in stars" :key="star" class="star text-[3rem]" :class="{ filled: isFilled(star) }"
                        @click="setRating(star)" @mouseover="hoverRating(star)" @mouseleave="resetRating">
                        ★
                    </span>
                </div>
                <textarea class="w-full h-[10rem] border border-solid border-[#000] p-[1rem] mt-[1rem] mb-2"></textarea>
                <ButtonComponent variant="shadow" class="uppercase text-[1rem] px-[2rem] w-full">send</ButtonComponent>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
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
</script>

<style scoped>
.star-rating {
    display: flex;
}

.star.filled {
    color: #ffc107;
}
</style>