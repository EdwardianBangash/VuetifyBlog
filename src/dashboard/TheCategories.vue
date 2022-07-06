<template>
    <table>
        <tr>
            <th>#</th>
            <th>Name</th>
        </tr>
        <tbody>
            <tr v-for="cat in categories" :key="cat.id">
                <td>{{cat.id}}</td>
                <td>{{cat.category_name}}</td>
                <td>
                    <router-link :to="{name:'editCategory', params:{id:1}}">Edit</router-link>
                    <button>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
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