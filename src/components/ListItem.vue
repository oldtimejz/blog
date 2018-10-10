<template>
    <div class="item">
        <el-row>
            <el-col :span="4">
                <div class="grid-content">
                    <img src="../assets/logo.png" alt="" height="100" />
                </div>
            </el-col>
            <el-col :span="20">
                <div class="grid-content">
                    <div class="content">
                        <div class="content-title">
                            <span>javascript-- 基于jQuery的模仿移动端上拉加载更多控件</span>
                        </div>
                        <div class="content-desc">
                            摘要: 在video标签内添加control属性，就可以做到控制，但是在使用的时候无法拖动视频的进度，于是就做了一个自己的video样式 功能差不多相似。这是myVideo1.0版本 一下是样式,在video标签内添加control属性，就可以做到控制，但是在使用的时候无法拖动视频的进度，于是就做了一个自己的video样式 功能差不多相似。这是myVideo1.0版本 一下是样式
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.item{
    height: 100px;
    padding: 15px;
    text-align: left;
    background: rgba(255,255,255,0.8);
    border: 1px solid #ebeef5;
    border-radius: 5px;
    transition: all .2s ease;
    margin-bottom: 20px;
    
}
.item:hover{
    box-shadow: 2px 3px 4px #f2f2f2;
}
.content-title{
    line-height:32px;
    font-size: 22px;
    padding-bottom: 10px;
}
.content-desc{
    height: 49px;
    line-height: 27px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.el-row{
    height: 100%;
}
</style>
