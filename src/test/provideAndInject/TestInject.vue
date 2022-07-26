<script lang="ts" setup>
import {inject, onMounted,defineProps} from "vue";
defineProps<{reset(c?:number):void}>();
let count: any = inject("count");

console.log(count);
const randomChange = () => {
  count.value += (Math.floor(Math.random() * 100));
}
</script>

<template>
  <button @click="count++">+1</button>
  <button @click="randomChange">random</button>
  <button @click="reset">reset</button>
</template>


<style scoped lang="scss">

</style>
