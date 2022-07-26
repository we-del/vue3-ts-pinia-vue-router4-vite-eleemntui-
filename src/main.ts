import {createApp} from 'vue'
import App from '@/App.vue'
import {createPinia} from "pinia";
import router from "@/router";
import "@/mock"; // 引入 mockServer
import "@/api/home"; // 引入 ts测试接口
import "@/assets/reset.css";
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";

import "element-plus/es/components/message-box/style/css"; // 引入message-box 库

const app = createApp(App);
app.use(createPinia());
app.use(router);
// app.component('v-chart', ECharts)
app.mount('#app');
