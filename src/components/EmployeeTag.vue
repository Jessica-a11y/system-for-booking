<template>
    <div class="employee-overview">
        <img :src="employeeImg" alt="User imag" />
        <div>
            <span class="employee-profession">{{ professions?.join(' & ') }}</span>
            <span class="employee-name">{{ name }}</span>
        </div>
    </div>
</template>

<script setup>
import employeeImg from '../assets/user.png';

    defineProps({
        name: String,
        professions: Array
    })
</script> 

<style scoped>
.employee-overview {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #E7E7E7;
    padding-inline: 1.4rem;
    padding-block: 0.5rem;
}

.employee-overview > img {
    width: 34px;
    height: 34px;
    padding-right: 0.5rem;
}

.employee-overview > div {
    display: flex;
    flex-direction: column;
}

.employee-profession {
    font-size: 12px;
}
.employee-name {
    font-size: 14px;
    font-weight: bold;
}
</style>


