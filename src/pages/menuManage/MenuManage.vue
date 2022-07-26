<script lang="ts" setup>
import Layout from "@/layout/Layout.vue";
import Slider from "@/components/Slider.vue";
import NavHeader from "@/components/NavHeader.vue";
import {ROUTERS} from "@/config";

const {MENU_MANAGE, AUTH_MANAGE} = ROUTERS;
</script>

<template>
  <Layout>
    <template v-slot:slider>
      <Slider :page="MENU_MANAGE" :default-spread="[AUTH_MANAGE]"/>
    </template>
    <template v-slot:header>
      <NavHeader>
        <template v-slot:title>
          <div class="title">菜单管理</div>
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
