/* 
 * 2022/7/4 19:10
 * author: xxx
 * @description:
 */
import axios from "axios";
// @ts-ignore
import Qs from "qs";
import {ElMessage} from "element-plus";

const ajax = axios.create();


// 此token用于临时开发(获得接口权限)，在项目完成后，新增token验证功能，以处理此问题
const token = "atguigu_eyJhbGciO" +
    "iJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGNhMzk3MmQ" +
    "3MjZhNGEyNGNjYWU3YyIsImlhdCI6MTY1ODM5MDY4OCwiZXhwIjoxNjU4" +
    "OTk1NDg4fQ.Rwv5g21VE6_dr6NmcUIWgWfuVPc996RvejKeMM_zy1g";
ajax.interceptors.request.use((config) => {
    let {method, data} = config;
    if (method?.toLocaleUpperCase() === "POST") {
        config.data = Qs.stringify(data);
    }
    // @ts-ignore    增加token , 在项目完成后,对用户token存储做一个细化
    config.headers.Authorization = token;
    return config;
})
ajax.interceptors.response.use((val) => {
    return val;
}, (err) => {
    console.log(err);
    ElMessage.warning("网络异常稍后再试");
    return new Promise(() => {
    });
});
export default ajax;
