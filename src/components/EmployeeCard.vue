<template>
    <div class="employee-overview" v-for="em in employees">
    <img src="./assets/user.png" alt="User imag" />
    <div>
      <span class="employee-profession">{{ em.professions.join(' & ') }}</span><br>
      <span class="employee-name">{{ em.name }}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'EmployeeCard',
        props: {
            employee : {
                type: Object,
                required: true
            }
        }
    }

</script> 

<style>
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
