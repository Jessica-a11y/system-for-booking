<template>
    <div class="schedule-top-bar">
        <div class="search-container">
            <img :src="searchLogo" alt="search logo">
            <input  type="text" placeholder="Search for personnel"/>
        </div>
        
        <div class="weekday-header" v-for="week in weekdays">
            <h4>{{ week }}</h4>
            <div class="days-list">
                <span v-for="day in days">{{ day }}</span>
            </div>   
        </div>
    </div>
</template>

<script setup>
import searchLogo from '../assets/magnifying-glass.png'

const weekdays = ["Week 18 (18/4-2/5)", "Week 19 (5/5-9/5)", "Week 20 (12/5-16/5)", "Week 21 (19/5-23/5)"]
const days = ["Mon", "Tue", "Wen", "Thu", "Fri"]
</script>

<style scope>
.schedule-top-bar {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.search-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-container > input {
    background-color: #F1F1F1;
    border: none;
}

.search-container > img {
    height: 16px;
    margin-right: 0.4rem;
}

.weekday-header > h4{
   text-align: center;
   margin-bottom: 0.5rem;
   margin-top: 1rem;
}

.days-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    padding-inline: 1.5rem;
}

.days-list > span {
    text-align: center;
}
</style>
