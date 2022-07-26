<script lang="ts" setup>
import {provide,ref} from "vue";
import TestInject from "./TestInject.vue";

const count = ref(0);
provide("count",count);

const resetCount = ()=>{
  count.value = 0;
}
</script>

<template>
  <h1>当前计数为{{count}}</h1>
  <TestInject :reset="resetCount"/>
</template>


<style scoped lang="scss">

</style>
