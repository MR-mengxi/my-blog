import request from './request';

export async function add(data) {
    const resp = await request().post("/api/comment/addComment", data);
    return resp.data;
}

export async function list(data) {
    const resp = await request().post("/api/comment", data);
    return resp.data;
}