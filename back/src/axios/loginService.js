import request from './request';

// 登录
export async function login(loginId, loginPwd) {
    const resp = await request().post("/api/admin/login", { loginId, loginPwd });
    return resp.data;
}

// 注销
export function loginOut() {
    localStorage.removeItem("token");
}

