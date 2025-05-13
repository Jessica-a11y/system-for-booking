<template>
    <div>
        <div class="schedule-info">
            <div v-for="status, index in statusList" class="schedule-inner-info">
                <div :style = "{backgroundColor : statusColors[index]}"></div>
                <span>{{status}}</span>
            </div>
        </div>
        <ScheduleHeader></ScheduleHeader>
    </div>
</template>

<script setup>
import ScheduleHeader from './ScheduleHeader.vue';

const statusList = ["Booked", "Absent", "Preliminary", "Available", "Free"]
const statusColors = ["#FF8000", "#800080", "#008080", "#FFD700", "#D9D9D9"]
</script>

<style scoped>
.schedule-info {
    display: flex;
    justify-content: end;
}


.schedule-inner-info {
    display: flex;
    align-items: center;
    margin-inline: 0.6rem;
    font-size: small;
}

.schedule-info > div > div {
    border: 1px solid black;
    width: 14px;
    height: 14px;
    margin-right: 0.3rem;
}
</style>