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

async function selectNewCutListByComicIdx(comicIdx) {
    const selectQuery = `SELECT cut.cutIdx, user.userNickname AS cutArtist, cutImg.cutImgUrl AS cutImg 
    FROM cut LEFT JOIN user ON user.userIdx = cut.userIdx
    LEFT JOIN cutImg ON cutImg.cutIdx = cut.cutIdx WHERE comicIdx = ? AND cutState = 0`
    return await mysql.query(selectQuery, [comicIdx]);
}

async function updateCutVote(cutIdx) {
    const updateQuery = `UPDATE cut SET cutVote = cutVote + 1 WHERE cutIdx = ?`
    return await mysql.query(updateQuery, [cutIdx]);
}

async function selectCutListByUseridx(userIdx) {
    const selectQuery = `SELECT cut.cutIdx, cutImg.cutImgUrl FROM cut LEFT JOIN cutImg ON cut.cutIdx = cutImg.cutIdx
    WHERE cut.userIdx = ?`;
    return await mysql.query(selectQuery, [userIdx]);
}

module.exports = {
    insertCutUrlByUrl,
    insertCut,
    selectCutByComicIdxStateOne,
    selectNewCutListByComicIdx,
    updateCutVote,
    selectCutListByUseridx
}