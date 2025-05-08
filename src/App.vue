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
  <div class="employee-overview">
    <EmployeeTag  v-for="em in employees" :employeeImg="employeeImg" :name="em.name" :professions="em.professions"></EmployeeTag>
  </div>

  <EmployeeCard :avatar="avatar" profession="Snickare" name="Joakim Ihlström" status="Bokad"
    date="2025-04-30 (Ons)" time="08.00–16.00" workType="Snickare" workplace="Mölndals Kommun -Byggplats A"
    contact="031-88 66 55" />
</template>

<style scoped>

</style>
