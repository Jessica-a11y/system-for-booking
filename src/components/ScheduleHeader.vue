<template>
    <div class="schedule-header">
        <input  type="text" placeholder="Search.."/>
        <div class="schedule-header-dates">
            <h4>Week 20 (18/4-2/5)</h4>
            <div class="days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wen</span>
                <span>Thu</span>
                <span>Fri</span>
            </div>   
        </div>
        <div>hej</div>
        <div>hej</div>
        <div>hej</div>
    </div>
</template>

<script setup>
</script>

<style scope>
.schedule-header {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.schedule-header-dates > h4{
   text-align: center;
   margin-bottom: 0.5rem;
   margin-top: 1rem;
}

.days {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    padding-inline: 1.5rem;
}

.days > span {
    text-align: center;
}
</style>

<!-- This should make the input-element listen to "submit", doesn't work thougth.
     @keyup.enter="submit" -->