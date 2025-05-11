<template>
    <div>
        <button :style = "{ backgroundColor: color }"></button>
        <button></button>
        <button></button>
        <button></button>
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
button{
  background-color: #FF8000;
  border: none;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>