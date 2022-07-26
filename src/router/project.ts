/* 
 * 2022/7/4 18:11
 * author: xxx
 * @description:
 */

import Login from "@/pages/login/Login.vue";
import Home from "@/pages/home/Home.vue";
import MenuManage from "@/pages/menuManage/MenuManage.vue";
import PlatformManage from "@/pages/platformManage/PlatformManage.vue";
import RoleManage from "@/pages/roleManage/RoleManage.vue";
import SkuManage from "@/pages/skuManage/SkuManage.vue";
import SpuManage from "@/pages/spuManage/SpuManage.vue";
import UserManage from "@/pages/userManage/UserManage.vue";

import {ROUTERS} from "@/config";

const {HOME, USER_MANAGE, SKU_MANAGE, SPU_MANAGE, MENU_MANAGE, PLATFORM_MANAGE, ROLE_MANAGE} = ROUTERS;
export default [
    {
        name: "login",
        path: "/login",
        component: Login
    },
    {
        name: "menuManage",
        path: MENU_MANAGE,
        component: MenuManage
    },
    {
        name: "platformManage",
        path: PLATFORM_MANAGE,
        component: PlatformManage
    },
    {
        name: "roleManage",
        path: ROLE_MANAGE,
        component: RoleManage
    },
    {
        name: "skuManage",
        path: SKU_MANAGE,
        component: SkuManage
    },
    {
        name: "spuManage",
        path: SPU_MANAGE,
        component: SpuManage
    },
    {
        name: "userManage",
        path: USER_MANAGE,
        component: UserManage
    },
    {
        name: "home",
        path: HOME,
        component: Home
    },
];