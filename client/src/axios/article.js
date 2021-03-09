import request from './request';

export async function getArticle(page = 1, limit = 5) {
    const resp = await request().get("/api/article", {
        params: {
            page,
            limit
        }
    });
    return resp.data;
}

export async function getArticleInfo(id){
    const resp = await request().get(`/api/article/${id}`);
    return resp.data;
}


export async function getRead(id, data) {
    const resp = await request().post(`/api/article/setRead/${id}`, data);
    return resp.data;
}

export async function getLike(id, data) {
    const resp = await request().post(`/api/article/setRead/${id}`, data);
    return resp.data;
}