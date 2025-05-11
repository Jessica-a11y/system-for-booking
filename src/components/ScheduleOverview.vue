<template>
    <div class="schedule-overview-style">
        <EmployeeTag :name="name" :professions="professions"></EmployeeTag>
        <ScheduleStatus></ScheduleStatus>
        <ScheduleStatus></ScheduleStatus>
        <ScheduleStatus></ScheduleStatus>
        <ScheduleStatus></ScheduleStatus>
    </div>
  
</template>

<script setup>
import EmployeeTag from './EmployeeTag.vue';
import ScheduleStatus from './ScheduleStatus.vue';

defineProps({
    name: String,
    professions: Array
})
</script>

<style scope>
.schedule-overview-style {
    display: flex;
    border: 1px solid black;
    justify-content: space-between;
    background-color: #F1F1F1;
    margin-inline: 1rem;
    padding-inline-end: 0.5rem;
}
</style>