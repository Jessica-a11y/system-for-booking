<template>
    <div class="calendar-menu">
      <v-calendar
        is-expanded
        color="blue"
        :attributes="attrs"
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
        color: '#3b82f6',
      },
      dates: new Date(),
    },
  ])
  </script>
  
  <style scoped>
  .calendar-menu {
    padding: 1rem;
    background-color: #f7f7f7;
  }
  
  h2 {
    margin-bottom: 1rem;
  }
  </style>