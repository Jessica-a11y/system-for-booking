<script>
  import EmployeeService from './services/EmployeeService';
  import EmployeeTag from './components/EmployeeTag.vue';
  import employeeImg from './assets/user.png';


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

<script setup>
import EmployeeCard from './components/EmployeeCard.vue';
import avatar from './assets/cartoon-picture.png';

</script>

<template>
  <div class="header">
    <h1>Svenssons Hantverk AB</h1>
  </div>
  <div class="main">
  <div>
    <EmployeeCard :avatar="avatar" profession="Snickare" name="Joakim Ihlström" status="Bokad"
      date="2025-04-30 (Ons)" time="08.00–16.00" workType="Snickare" workplace="Mölndals Kommun -Byggplats A"
      contact="031-88 66 55" />
  </div>
  <div>
    <EmployeeTag  v-for="em in employees" :employeeImg="employeeImg" :name="em.name" :professions="em.professions"></EmployeeTag>
  </div>
</div>
  
</template>

<style scoped>
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header{
    background-color: #434446;
    color:#CFCFCF;
    margin: 0;
}

h1 {
    margin:0;
    font-size: large;
    padding-block: 0.7rem;
    padding-left: 1.5rem;
}

.main{
  display: grid;
  grid-template-columns: 1fr 5fr;
}

</style>
