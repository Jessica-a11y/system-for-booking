<script setup>

</script>

<template>
  <div class="employee-overview">
    <img src="./assets/user.png" alt="User imag" />
    <div>
      <span class="employee-profession">Plumer</span><br>
      <span class="employee-name">Maria</span>
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
