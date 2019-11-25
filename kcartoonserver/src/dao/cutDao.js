const mysql = require('../library/mysql');

async function insertCut(userIdx, comicIdx) {
    const insertQuery = `INSERT INTO cut(userIdx, comicIdx) VALUES (?, ?)`;
    return await mysql.query(insertQuery, [userIdx, comicIdx]);
}

async function insertCutUrlByUrl(url, cutIdx) {
    const insertQuery = `INSERT INTO cutImg(cutImgUrl, cutIdx) VALUES (?, ?)`;
    return await mysql.query(insertQuery,[url, cutIdx]);
}

async function selectCutByComicIdxStateOne(comicIdx) {
    const selectQuery = `SELECT cutImgUrl AS cutImg FROM cut LEFT JOIN cutImg ON cut.cutIdx = cutImg.cutIdx 
    WHERE cut.cutState = 1 AND comicIdx = ? ORDER BY cut.cutIdx ASC`
    return await mysql.query(selectQuery, [comicIdx]);

}

module.exports = {
    insertCutUrlByUrl,
    insertCut,
    selectCutByComicIdxStateOne
}