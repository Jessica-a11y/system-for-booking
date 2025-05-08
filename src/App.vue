<script>
import EmployeeService from './components/EmployeeService';

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
  <div class="employee-overview" v-for="em in employees">
    <img src="./assets/user.png" alt="User imag" />
    <div>
      <span class="employee-profession">{{ em.professions.join(' & ') }}</span><br>
      <span class="employee-name">{{ em.name }}</span>
    </div>
  </div>

  <EmployeeCard :avatar="avatar" profession="Snickare" name="Joakim Ihlström" status="Bokad"
    date="2025-04-30 (Ons)" time="08.00–16.00" workType="Snickare" workplace="Mölndals Kommun -Byggplats A"
    contact="031-88 66 55" />
</template>

<style scoped>
.employee-overview {
  display: flex;
  align-items: center;
  border: 1px solid black;
}

.employee-overview>img {
  width: 34px;
  height: 34px;
  margin-inline: 0.5rem;
}

.employee-profession {
  font-size: small;
}

.employee-name {
  font-weight: bold;
}
</style>
