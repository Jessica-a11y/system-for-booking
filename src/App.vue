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

<template>
  <div class="employee-overview" v-for="em in employees">
    <img src="./assets/user.png" alt="User imag" />
    <div>
      <span class="employee-profession">{{ em.professions.join(' & ') }}</span><br>
      <span class="employee-name">{{ em.name }}</span>
    </div>
  </div>
</template>

<style scoped>

.employee-overview {
    display: flex;
    align-items: center;
    border: 1px solid black;
}

.employee-overview > img {
    width: 34px;
    height: 34px;
    margin-inline: 0.5rem;
}

.employee-profession {
    font-size:small;
}
.employee-name {
    font-weight: bold;
}</style>
