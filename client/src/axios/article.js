import request from './request';


export async function getRead(id,data) {
    const resp = await request().post(`/api/article/setRead/${id}`,data);
    return resp.data;
}