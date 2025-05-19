<template>
    <div class="schedule-overview">
        <EmployeeInfo :name="name" :professions="professions"></EmployeeInfo>
        <AvailabilityStatus v-for="n in 4"></AvailabilityStatus>
    </div>
</template>

<script setup>
import EmployeeInfo from './EmployeeInfo.vue';
import AvailabilityStatus from './AvailabilityStatus.vue';


defineProps({
    name: String,
    professions: Array
})
</script>

<style scope>
.schedule-overview {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}
</style>