<template>
    <div style="position: relative;">
        <img class="info-icon" :src="infoIcon" alt="Info" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
        <div v-if="showTooltip" class="info-tooltip">Detta är information om schemat.</div>
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
import infoIcon from '../assets/info.png'

import { ref } from 'vue'

const showTooltip = ref(false)

defineProps({
    employees: Array,
    name: String,
    professions: Array
})

const statusList = ["Booked", "Absent", "Preliminary", "Available", "Free"]
const statusColors = ["#FF8000", "#800080", "#008080", "#FFD700", "#D9D9D9"]
</script>

<style scoped>
.info-icon {
    position: absolute;
    right: 31%;
    width: 10px;
}

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
    border: 2px solid #E1E1E1;
    height: 800px;
    overflow-y: scroll;
}

.info-tooltip {
  position: absolute;
  top: 20px;
  right: 19%;
  background-color: #333;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
}
</style>