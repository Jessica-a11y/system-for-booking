<template>
    <div class="employee-profile">
        <img :src="profileImg" alt="User imag" />
        <div>
            <span class="profession-list">{{ professions?.join(' & ') }}</span>
            <span class="name">{{ name }}</span>
        </div>
    </div>
</template>

<script setup>
import profileImg from '../assets/user.png';

    defineProps({
        name: String,
        professions: Array
    })
</script> 

<style scoped>
.employee-profile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #E7E7E7;
    padding-inline: 1.4rem;
    padding-block: 0.5rem;
}

.employee-profile > img {
    width: 34px;
    height: 34px;
    padding-right: 0.5rem;
}

.employee-profile > div {
    display: flex;
    flex-direction: column;
}

.profession-list {
    font-size: 12px;
}
.name {
    font-size: 14px;
    font-weight: bold;
}
</style>


