<template>
    <div class="status-bar">
      <button v-for="day in weekdays" :style="{ backgroundColor: color}" :class="day" @mouseenter="handleMouseEnter(day)" @mouseleave="handleMouseLeave(day)"></button>
    </div>
    <div v-if="showWeekdayPlan" class="info-weekday-plan">
      Tips
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showWeekdayPlan = ref(false)
let colorArray = ['#FF8000', '#800080', '#008080', '#FFD700']
let color = colorArray[Math.floor(Math.random() * colorArray.length)]
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
.status-bar {
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

.info-weekday-plan {
  position: absolute;
  top: 20px;
  right: 60%;
  border: 1px solid black;
  background-color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
}
</style>