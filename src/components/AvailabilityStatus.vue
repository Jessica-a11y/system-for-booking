<template>
    <div class="weekday-status-bar">
      <button v-for="day in weekdays" :style="{ backgroundColor: color}" :class="day" @mouseenter="handleMouseEnter(day)" @mouseleave="handleMouseLeave(day)"></button>
    </div>

    <div v-if="showWeekdayPlan"  class="weekday-details">
      <div class="weekday-details-images">
        <img src="../assets/Icon_edit.png" alt="Edit icon">
        <img src="../assets/Group 363.png" alt="Group">
      </div>
      <div class="weekday-details-info">
        <button style="background-color: #FF8000;"></button>
        <div class="schedule-details">
          <p>Mölndals kommun</p>
          <span>Tisdag, den 30 april 8:30-16:00</span>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showWeekdayPlan = ref(false)
let colorArray = ['#FF8000', '#800080', '#008080', '#FFD700']
const color = colorArray[Math.floor(Math.random() * colorArray.length)]
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri']

function handleMouseEnter(day) {
  if (day === 'wed') {
    showWeekdayPlan.value = true
  }
}

function handleMouseLeave(day) {
  if (day === 'wed') {
    showWeekdayPlan.value = false
  }
}
</script>

<style scoped>
.weekday-status-bar {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-inline: 1.5rem;
  place-items: center;
}

button{
  background-color: #FF8000;
  border: none;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  height: 23px;
  width: 23px;
}

.weekday-details {
  position: absolute;
  top: 20px;
  right: 60%;
  border: 1px solid black;
  background-color: white;
  padding: 13px 24px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 1000;
}

.weekday-details-images {
  display: flex;
  justify-content: end;
}

.weekday-details-images > img{
  height: 10px;
  margin-left: 1rem;
}

.weekday-details-info {
  display: flex;
  align-items: center;
  padding-block: 0.6rem;
}

.schedule-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0.7rem;
}

.schedule-details > p {
  margin: 0;
  padding: 0;
  font-size: 14px;
}

.schedule-details > span {
  font-size: 10px;
}
</style>