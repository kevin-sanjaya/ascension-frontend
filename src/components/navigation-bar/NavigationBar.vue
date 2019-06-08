<template>
<div id="nav">
    <nav class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse">
            <div class="navbar-nav">
                <router-link to="/">Home</router-link>
                <router-link to="/schedules">Schedules</router-link>
                <router-link to="/results">Results</router-link>
                <router-link to="/divisions">Divisions</router-link>
            </div>
        </div>
    </nav>
</div>
</template>

<style scoped>
#nav {
    background-color: #11171a;
    border-bottom: 4px solid #faa61a;
}

#nav a {
    font-weight: bold;
    color: #f4f5f6;
    margin: 5%;
    text-decoration: none;
    font-size: 20px;
}

#nav a.router-link-exact-active {
    border-bottom: 2px solid #faa61a;
}
</style>

<script>
export default {
  name: 'NavigationBar',
};
</script>
