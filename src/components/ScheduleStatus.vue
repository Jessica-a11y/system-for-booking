<template>
    <div class="status-bar">
        <button :style = "{ backgroundColor: color }"></button>
        <button :style = "{ backgroundColor: color }"></button>
        <button :style = "{ backgroundColor: color }"></button>
        <button :style = "{ backgroundColor: color }"></button>
        <button class="fifty"></button>
    </div>
</template>

<script setup>
defineProps({
  status: String
})

let colorArray = ["#FF8000", "#800080", "#008080", "#FFD700"]
  function setColor() {
    return colorArray[Math.floor(Math.random() * colorArray.length)]
  } 
  let color = setColor()

  /* function checkPercentage() {
    if(percentage === '100') {
      return 
    } else if(percentage === '50'){
      return
    } else {
      return 
    }
  } */

  function checkstatus(status) {
    const color = ""
    switch(status) {
      case 'Booked':
        return color = '#FF8000'
        break
      case 'Absent':
        return color = '#800080'
        break
      case 'Preliminary':
        return color = '#008080'
        break
      default:
        return color = '#FFD700'
    }
  }
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

.fifty {
  background: linear-gradient(to right, #FF8000 50%, #FFFFFF 50%);
}
</style>