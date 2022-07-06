<template>
    <div class="navbar">
        <ul>
            <li><router-link to="/dashboard/categories">Categories</router-link></li>
            <li><router-link to="/dashboard/blogs">Blogs</router-link></li>
        </ul>
    </div>
    <div class="card">
        <div class="title">Categories</div>
        <div class="total">10</div>
    </div>
    <div class="card">
        <div class="title">Blogs</div>
        <div class="total">10</div>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'DashboardHomeView',
}
</script>