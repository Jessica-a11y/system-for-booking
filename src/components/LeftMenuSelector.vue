<template>
    <div class="checkBox-professions">
        <h3>Profession</h3>

        <div class="checkbox-item">
            <input type="checkbox" id="profession-choice1" value="Carpenter" v-model="professionChoices" />
            <label for="carpenter">Carpenter</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" id="profession-choice2" value="Painter" v-model="professionChoices" />
            <label for="painter">Painter</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" id="profession-choice3" value="Electrician" v-model="professionChoices" />
            <label for="electrician">Electrician</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" id="profession-choice4" value="Bricklayer" v-model="professionChoices" />
            <label for="bricklayer">Bricklayer</label>
        </div>
        <div class="checkbox-item">
            <input type="checkbox" id="profession-choice5" value="Plumber" v-model="professionChoices" />
            <label for="plumber">Plumber</label>
        </div>
    </div>

</template>

<script setup>

import { ref } from 'vue';
const professionChoices = ref([
    'Carpenter',
    'Painter'
]);

</script>

<style scoped>
h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-bottom: 0.2rem;
}

.checkBox-professions {
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
    gap: 0.3rem;
}

.checkbox-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
    color: #333333;
    font-weight:600;
}

input[type=checkbox] {
    accent-color: #E1E1E1;
}

input[type=checkbox]:checked::before {
    background-color: #E1E1E1;
}
</style>