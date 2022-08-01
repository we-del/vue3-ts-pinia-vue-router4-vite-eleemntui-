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
import MerchandiseManage from "@/pages/merchandiseManage/MerchandiseManage.vue";
import CategoryManage from "@/pages/categoryManage/CategoryManage.vue";
import MerchandiseDetails from "@/pages/merchandiseManage/merchandiseDetails/MerchandiseDetails.vue";
import UpdateMerchandise from "@/pages/merchandiseManage/updateMerchandise/UpdateMerchandise.vue";


import {ROUTERS} from "@/config";

const {
    HOME,
    USER_MANAGE,
    MERCHANDISE_MANAGE,
    CATEGORY_MANAGE,
    SKU_MANAGE,
    SPU_MANAGE,
    MENU_MANAGE,
    PLATFORM_MANAGE,
    ROLE_MANAGE
} = ROUTERS;
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
    {
        name: "category",
        path: CATEGORY_MANAGE,
        component: CategoryManage
    },
    {
        name: "merchandise",
        path: MERCHANDISE_MANAGE,
        component: MerchandiseManage
    },
    {
        name: "merchandiseDetails",
        path: "/item/merchandise-details/:productId",
        component: MerchandiseDetails
    },
    {
        name: "merchandiseUpdate",
        path: "/item/merchandise-update/:productId",
        component: UpdateMerchandise
    },
    {
        name: "merchandiseAdd",
        path: "/item/add-merchandise",
        component: UpdateMerchandise
    }
];