<template>
    <div>
        <div class="schedule-top">
            <div v-for="status, index in statusList" class="schedule-inner-info">
                <div :style = "{backgroundColor : statusColors[index]}"></div>
                <span>{{status}}</span>
            </div>
        </div>
        <div class="schedule-info-bottom">
            <ScheduleHeader></ScheduleHeader>
            <ScheduleOverview v-for="em in employees" :name="em?.name" :professions="em?.professions"></ScheduleOverview>
        </div>
        
    </div>
</template>

<script setup>
import ScheduleHeader from './ScheduleHeader.vue';
import ScheduleOverview from './ScheduleOverview.vue';

defineProps({
    employees: Array,
    name: String,
    professions: Array
})

const statusList = ["Booked", "Absent", "Preliminary", "Available", "Free"]
const statusColors = ["#FF8000", "#800080", "#008080", "#FFD700", "#D9D9D9"]
</script>

<style scoped>
.schedule-top {
    display: flex;
    justify-content: end;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
}


.schedule-inner-info {
    display: flex;
    align-items: center;
    margin-inline: 0.6rem;
    font-size: small;
}

.schedule-top > div > div {
    border: 1px solid black;
    width: 14px;
    height: 14px;
    margin-right: 0.3rem;
}

.schedule-info-bottom {
     background-color: #F1F1F1;
}
</style>