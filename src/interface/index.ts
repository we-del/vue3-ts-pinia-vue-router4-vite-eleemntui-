/* 
 * 2022/7/4 19:16
 * author: xxx
 * @description: 用于定义全局接口
 */


export interface LoginReq {
    username: string,
    password: string
}

export interface RankData {
    no: number,
    name: string,
    money: string
}

export interface SearchWordData {
    word: string,
    count: number,
    user: number
}

export interface SellPercentData {
    name?: string,
    value?: number
}

// 限制添加用户请求的接口
export interface AddUserReqData{
    username:string,
    password:string,
    phone:string,
    email:string,
    role_id:string
}
// 限制更新用户请求的接口
export interface UpdateUserReqData{
    _id:string,
    username:string,
    phone:string,
    email:string,
    role_id:string
}

// 限制更新用户的接口
export interface UpdateRoleReq{
    _id:string,
    auth_name:string,
    menus:string[],
    auth_time:number
}