<template>
    <div class="status-bar">
        <button :style = "{ backgroundColor: color }"></button>
        <button :style = "{ backgroundColor: color }"></button>
        <button :style = "{ backgroundColor: color }"></button>
        <button :style = "{ backgroundColor: color }"></button>
        <button :style = "{ backgroundColor: color }"></button>
    </div>
</template>

<script setup>

let colorArray = ["#FF8000", "#800080", "#008080", "#FFD700"]
  function setColor() {
    return colorArray[Math.floor(Math.random() * colorArray.length)]
  } 
  let color = setColor()
</script>

<style scoped>
.status-bar {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-inline: 1.5rem;
  place-items: center;
}

button{
  background-color: #FF8000;
  border: none;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  height: 23px;
  width: 23px;
}
</style>