const mysql = require('../library/mysql');

async function selectComicByIdx(comicIdx) {
    const selectQuery = `SELECT * FROM comic WHERE comicIdx = ?`;
    return await mysql.query(selectQuery, [comicIdx]);

}

async function selectComicGroupByUser() {
    const selectQuery = `SELECT user.userNickName AS nickname, SUM(comicIndex) AS comicCount, cutImg.cutImgUrl AS capitalImg FROM comic 
    LEFT JOIN user ON user.userIdx = comic.userIdx
    LEFT JOIN cut ON cut.userIdx = user.userIdx
    LEFT JOIN cutImg ON cut.cutIdx = cutImg.cutIdx
    GROUP BY comic.userIdx ORDER BY comicCount DESC LIMIT 5 `
    return await mysql.query(selectQuery);
}

async function selectComicGroupByComic() {
    const selectQuery = `SELECT comic.comicName, comic.comicIndex AS inquery, cutImg.cutImgUrl AS capitalImg FROM comic
    LEFT JOIN cut ON comic.comicIdx = cut.comicIdx
    LEFT JOIN cutImg ON cut.cutIdx = cutImg.cutIdx 
    GROUP BY comic.comicName ORDER BY inquery DESC LIMIT 5`;
    return await mysql.query(selectQuery);
}

async function insertComic(title, userIdx, url){
    const insertQuery = `INSERT INTO comic(comicName, userIdx, comicThumbnailImg) VALUES (?, ?, ?)`;
    return await mysql.query(insertQuery, [title, userIdx, url]);
}

async function selectMainComic() {
    const selectQuery = `SELECT * FROM comic ORDER BY comicIdx DESC LIMIT 9`
    return await mysql.query(selectQuery);
}

module.exports = {
    selectComicByIdx,
    selectComicGroupByUser,
    selectComicGroupByComic,
    insertComic,
    selectMainComic
}