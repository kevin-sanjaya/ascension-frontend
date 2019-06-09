<template>
<div id="nav">
    <nav>
        <div class="navbar-nav">
            <router-link to="/">Home</router-link>
            <router-link to="/schedules">Schedules</router-link>
            <router-link to="/results">Results</router-link>
            <router-link to="/divisions">Divisions</router-link>
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
    margin: 1%;
    text-decoration: none;
    font-size: 1vw;
}

#nav a.router-link-exact-active {
    border-bottom: 2px solid #faa61a;
}

.navbar-nav {
    display: flex;
    flex-direction: row;
    margin-left: 1%;
}

@media (max-width: 1024px) {
    #nav a {
        font-size: 10.24px;
    }
}
</style>

<script>
export default {
  name: 'NavigationBar',
};
</script>
