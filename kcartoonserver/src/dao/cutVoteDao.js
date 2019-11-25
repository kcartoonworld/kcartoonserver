const mysql = require('../library/mysql');

async function selectCutVoteByUseridxComicidx(userIdx, comicIdx) {
    const selectQuery = `SELECT * FROM cutVote WHERE userIdx = ? AND comicIdx = ?`
    return await mysql.query(selectQuery, [userIdx, comicIdx]);
}

async function insertCutVote(userIdx, comicIdx, cutIdx) {
    const insertQuery = `INSERT INTO cutVote(userIdx, comicIdx, cutIdx) VALUES(?, ?, ?)`
    return await mysql.query(insertQuery, [userIdx, comicIdx, cutIdx]);
}

module.exports = {
    insertCutVote,
    selectCutVoteByUseridxComicidx
}