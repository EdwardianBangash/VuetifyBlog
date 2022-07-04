<template>
    <div class="navbar-wrapper">
        <h2 href="/">Vuetifyblog</h2>
        <ul>
            <li><a href="">Entertainment</a></li>
            <li><a href="">Sports</a></li>
            <li><a href="">Technology</a></li>
            <li><a href="">Showbiz</a></li>
            <li><a href="">Inventions</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    .navbar-wrapper {
        display: flex;
        justify-content: space-between;
    }

    ul{
        list-style-type: none;
        text-align: right;
    }

    li{
        display: inline;
    }

    a{
        text-decoration: none;
        padding: 10px;
        color: #000;
        font-size: 1em;
    }


</style>