import request from './request';

// 添加文章
export async function addArticle(title, content,imgUrl) {
    const resp = await request().post("/api/article", { title, content,imgUrl });
    return resp;
}