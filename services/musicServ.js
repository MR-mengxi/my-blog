const Music = require("../models/music");

// 查询所有的歌曲
exports.getMusic = async function(){
    const result =  await Music.findAll();
    return JSON.parse(JSON.stringify(result));
}

// 添加歌曲
exports.addMusic = async function (musicObj){
    const ins =  await Music.create(musicObj);
    return ins.toJSON();
}

// 根据id删除歌曲
exports.deleteMusic = async function (id){
    return await Music.destroy({
        where:{
            id
        }
    })
}