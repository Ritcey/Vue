<template>
    <div>
        <h1>Profile Page</h1>
        <button @click="handleLogout">Logout</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleLogout() {
            localStorage.removeItem('token')
            this.$router.push('/login')
        }
    }
}
</script>