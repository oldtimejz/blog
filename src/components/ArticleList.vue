<template>
    <div>
        <ListItem v-for="i in 10" :key='i'></ListItem>

        <div class="pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="30">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import ListItem from './ListItem.vue'
export default {
    data () {
        return{}
    },
    components:{
        ListItem,
    }
}
</script>
<style scoped>
.pagination{
    height: 100px;
}
</style>
