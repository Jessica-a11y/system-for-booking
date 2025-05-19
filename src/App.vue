<script setup>
import EmployeeCard from './components/EmployeeCard.vue';
import avatar from './assets/cartoon-picture.png';
import LeftMenuSelector from './components/LeftMenuSelector.vue';
import CalendarLeftMenu from './components/CalendarLeftMenu.vue';
import StatusLegend from './components/StatusLegend.vue';
</script>

<script>
import EmployeeService from './services/EmployeeService';

export default {
  data() {
    return {
      employees: []
    }
  },
  created() {
    EmployeeService.getEmployees().then(em => this.employees = em)
  }
}
</script>

<template>
  <div class="header">
    <h1>Svenssons Hantverk AB</h1>
  </div>
  <div class="main">
    <div class="left-menu">
      <div class="booking-card">
        <EmployeeCard :avatar="avatar" profession="Carpenter" name="Joakim Ihlström" status="Booked"
          date="2025-04-30 (Wed)" time="08.00–16.00" workType="Carpenter" workplace="Mölndals Stad - Building Site A"
          contact="031-88 66 55" />
      </div>
      <div class="checkboxes-professions">
        <LeftMenuSelector />
      </div>
      <div class="calendar-overview">
        <CalendarLeftMenu />
      </div>
    </div>

  <div class="schedule-planner">
    <StatusLegend :employees="employees">
    </StatusLegend>
  </div>
</div>
</template>

<style scoped>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header {
  background-color: #434446;
  color: #CFCFCF;
  margin: 0;
}

h1 {
  margin: 0;
  font-size: large;
  padding-block: 0.7rem;
  padding-left: 1.5rem;
}

.main {
  display: grid;
  grid-template-columns: 1fr 5fr;
}

.left-menu {
  width: 100%;
  flex-direction: column;
  background-color: #F2F2F2;
  margin-right: 0.3rem;
}

.checkboxes-professions {
  margin-left: 3rem;
  margin-bottom: 1.5rem;
}

.booking-card {
  width: 10rem;
  margin: 1.4rem;
  margin-top: 4rem;
  border-radius: 0%;
  font-size: small;
}

  .schedule-planner {
    display: flex;
    flex-direction: column;
   
    margin-inline: 1rem;
    margin-top: 2rem;
  }
</style>

<!--  v-for="em in employees" -->