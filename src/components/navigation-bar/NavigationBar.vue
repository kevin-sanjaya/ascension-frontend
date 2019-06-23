<template>
<div id="nav">
    <nav>
        <ul class="animation navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/schedules">Schedules</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/results">Results</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/divisions">Divisions</router-link>
            </li>
        </ul>
    </nav>

</div>
</template>

<style scoped>
#nav {
    background-color: black;
    border-bottom: 4px solid #faa61a;
}

.navbar-nav {
    display: flex;
    flex-direction: row;
}

.nav-item {
    padding: 1em 1em;
}

.nav-item a {
    font-weight: bold;
    color: #f4f5f6;
    text-decoration: none;
    padding: 10px 10px;
    position: relative;
    font-size: 1vw;
    z-index: 0;
    border-bottom: 2px solid black;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

#nav a.router-link-exact-active {
    border-bottom: 2px solid #faa61a;
}

.animation a:after {
    position: absolute;
    left: 0px;
    width: 100%;
    height: 2px;
    background: #faa61a;
    content: "";
    opacity: 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.animation a:after {
    bottom: -2px;
    transform: translateY(-10px);
}

.animation a:hover:after {
    opacity: 1;
    transform: translateY(0px);
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
