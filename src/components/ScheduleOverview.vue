<template>
    <div class="schedule-overview-style">
        <EmployeeTag :name="name" :professions="professions"></EmployeeTag>
        <ScheduleStatus :status="status"></ScheduleStatus>
        <ScheduleStatus :status="status"></ScheduleStatus>
        <ScheduleStatus :status="status"></ScheduleStatus>
        <ScheduleStatus :status="status"></ScheduleStatus>
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}
</style>