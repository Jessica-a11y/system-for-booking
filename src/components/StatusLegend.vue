<template>
    <div style="position: relative;">
        <img class="info-icon" :src="infoIcon" alt="Info" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
        <div v-if="showTooltip" class="schedule-tooltip">
            <div>
                <div :style = "{background : 'linear-gradient(to right, #FF8000 50%, #D9D9D9 50%)'}"></div>
                <span>50%</span>
                <div :style = "{backgroundColor : statusColors[0]}"></div>
                <span>100%</span>
            </div>
            <span>Halvdag</span><span>Heldag</span>
        </div>
        <div class="schedule-status-section">
            <div v-for="status, index in statusList" class="status-indicator">
                <div :style = "{backgroundColor : statusColors[index]}"></div>
                <span>{{status}}</span>
            </div>
        </div>
        <div class="employee-list-section">
            <WeekHeader></WeekHeader>
            <EmployeeRow v-for="em in employees" :name="em?.name" :professions="em?.professions"></EmployeeRow>
        </div>
    </div>
</template>

<script setup>
import WeekHeader from './WeekHeader.vue';
import EmployeeRow from './EmployeeRow.vue';
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
    right: 30.5%;
    width: 10px;
}

.schedule-status-section {
    display: flex;
    justify-content: end;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
}


.status-indicator {
    display: flex;
    align-items: center;
    margin-inline: 0.6rem;
    font-size: small;
}

.schedule-status-section > div > div {
    border: 1px solid black;
    width: 14px;
    height: 14px;
    margin-right: 0.3rem;
}

.employee-list-section {
    background-color: #F1F1F1;
    border: 2px solid #E1E1E1;
    height: 800px;
    overflow-y: scroll;
}

.schedule-tooltip {
  position: absolute;
  top: 20px;
  right: 19%;
  border: 1px solid black;
  background-color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
}

.schedule-tooltip > div {
    display: flex;
}

.schedule-tooltip > span {
    margin-inline: 0.3rem;
}

.schedule-tooltip > div > div{
    border: 1px solid black;
    width: 14px;
    height: 14px;
    margin-inline: 0.3rem;
}
</style>