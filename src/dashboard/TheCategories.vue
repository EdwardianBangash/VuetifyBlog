<template>
    <div class="wrapper">
        <h2>Category List</h2>
        <table cellspacing="0" cellpadding="0">
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Action</th>
        </tr>
        <tbody>
            <tr v-for="cat in categories" :key="cat.id">
                <td>{{cat.id}}</td>
                <td>{{cat.category_name}}</td>
                <td>
                    <router-link class="btn btn-edit" :to="{name:'editCategory', params:{id:1}}">Edit</router-link>
                    <button class="btn btn-delete">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            categories: [
                {
                    id: 1,
                    category_name: 'Entertainment'
                },
                {
                    id: 2,
                    category_name: 'Sports'
                },
            ]
        }
    }
}
</script>

<style scoped>
</style>