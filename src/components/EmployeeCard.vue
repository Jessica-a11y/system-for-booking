<template>
    <div class="booking-card">
        <div class="header">
            <img :src="avatar" alt="User pic" class="avatar" />
            <div class="title">
                <div class="profession">{{ profession }}</div>
                <div class="name">{{ name }}</div>
            </div>
        </div>

        <div class="status">
            <span class="status-icon"></span>
            <span class="status-text">{{ status }}</span>
        </div>

        <div class="date">
            {{ date }}
            </div>
            <div class="time">
            {{ time }}
        </div>

        <div class="info">
            <div>Type of work: {{ workType }} </div>
            <div>Workplace: <br /> {{ workplace }}</div>
            <div>Contact: {{ contact }}</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    employeeImage: String,
    profession: String,
    name: String,
    status: String,
    date: String,
    time: String,
    workType: String,
    workplace: String,
    contact: String,
    avatar: String,
})
</script>

<style scoped>
.booking-card {
    width: 220px;
    padding: 1rem;
    background: #E1E1E1;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
}

.header {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}

.avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 0.5rem;
}

.title .profession {
    font-size: 12px;
    color: gray;
}

.title .name {
    font-weight: bold;
}

.status {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
}

.status-icon {
    width: 17px;
    height: 17px;
    background-color: #FF8000;
    margin-right: 0.5rem;
}

.time {
    font-weight: bold;
    margin-bottom: 0.5rem;
    }

.info {
    line-height: 1.4;
}
</style>
>>>>>>> main
