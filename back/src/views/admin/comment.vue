<template>
    <div class="comment">
       <h2 class="tit">评论列表</h2>

        <mavon-editor :ishljs="true" :subfield="false" />
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.comment{
    .tit{
        font-size: 18px;
        font-weight: 400;
        color:#0084ff ;
        border-left: 2px solid #0084ff;
        margin: 20px 0 30px;
        padding-left: 16px;
    }
}
</style>