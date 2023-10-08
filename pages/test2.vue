<template>

</template>

<script setup lang="ts">

onMounted(async()=>{
    let res = await FetchApi("/banner");
   console.log(res.metaData.message);
    
})

</script>