<template>
     <div class="employee-overview">
    <img :src="employeeImg" alt="User imag" />
    <div>
      <span class="employee-profession">{{ professions.join(' & ') }}</span><br>
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
    border: 1px solid black;
}

.employee-overview > img {
    width: 34px;
    height: 34px;
    margin-inline: 0.5rem;
}

.employee-profession {
    font-size:small;
}
.employee-name {
    font-weight: bold;
}
</style>


