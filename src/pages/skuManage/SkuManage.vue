<script lang="ts" setup>
import Layout from "@/layout/Layout.vue";
import Slider from "@/components/Slider.vue";
import NavHeader from "@/components/NavHeader.vue";
import {ROUTERS} from "@/config";

const {SKU_MANAGE, MERCHANT_MANAGE} = ROUTERS;
</script>

<template>
  <Layout>
    <template v-slot:slider>
      <Slider :page="SKU_MANAGE" :default-spread="[MERCHANT_MANAGE]"/>
    </template>
    <template v-slot:header>
      <NavHeader>
        <template v-slot:title>
          <div class="title">Sku管理</div>
        </template>
      </NavHeader>
    </template>
    <template v-slot:content>
      我是内容
    </template>
  </Layout>
</template>


<style scoped lang="scss">

</style>
