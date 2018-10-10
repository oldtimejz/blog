<template>
    <div class="box">回复盒子组件
        <span class="close"></span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: #fff;   
}
.close{
    position:absolute;
     top: 0;
     right: 0;
     width: 40px;
     height: 40px;
     background: pink;
}
</style>
