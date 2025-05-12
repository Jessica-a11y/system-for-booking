<template>
  <div class="calendar-menu">
    <v-calendar is-expanded color="blue" show-weeknumbers :attributes="attrs" 
    locale="en-EN"
    first-day-of-week="2"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const attrs = ref([
  {
    key: 'today',
    highlight: {
      fillMode: 'solid',
      color: '#4682B4',
    },
    dates: new Date(),
  },
])

</script>

<style scoped>

.calendar-menu {
  padding: 1rem;
  background-color: #F2F2F2;
}

h2 {
  margin-bottom: 1rem;
}

:deep(.vc-container) {
  background-color: #F2F2F2;
  border: none;
  box-shadow: none;
}

:deep(.vc-title) {
  font-family: sans-serif;
}

:deep(.vc-weekday) {
  font-family: sans-serif;
  color: #333333;
}

:deep(.vc-nav-arrow) {
  color: #333333;
}

:deep(.vc-nav-arrow svg) {
  fill:#333333;
}

 /*Hide Saturday and Sundays */
 
:deep(.vc-weeks .vc-weekday:nth-child(7)),
:deep(.vc-weeks .vc-weekday:nth-child(8)),
:deep(.vc-weeks .vc-day:nth-child(7)),
:deep(.vc-weeks .vc-day:nth-child(8)) {
  color: #F2F2F2;
}

</style>