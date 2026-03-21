<template>
  <el-empty>
    <template #description>
      <span style="color: #626262">去搞点数据吧！</span>
    </template>
    <el-button type="primary" description="暂无数据" @click="goToTemplate">去创建</el-button>
  </el-empty>
</template>
<script setup lang="ts">
let router = useRouter()
// 去创建模板
let goToTemplate = () => {
  router.push({
    path: '/template'
  })
}
</script>
<style scoped lang="scss"></style>
