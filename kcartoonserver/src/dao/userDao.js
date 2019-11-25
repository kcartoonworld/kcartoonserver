const mysql = require('../library/mysql');

async function selectUserByEmailAndPw(userData){
    const selectQuery = `SELECT userIdx FROM user WHERE userEmail = ? AND userPassword = ?`;
    return await mysql.query(selectQuery, [userData.email, userData.password]);
}

async function selectUserByEmail(userEmail){
    const selectQuery = `SELECT * FROM user WHERE userEmail = ?`;
    return await mysql.query(selectQuery, [userEmail]);
}

async function insertUser(userData){
    const insertQuery = `INSERT INTO user(userEmail, userPassword, userNickname) VALUES (?, ?, ?)`;
    return await mysql.query(insertQuery, [userData.email, userData.password, userData.nickname]);
}

async function selectUserByIdx(userIdx){
    const selectQuery = `SELECT * FROM user WHERE userIdx = ?`;
    return await mysql.query(selectQuery, [userIdx]);
}


module.exports = {
    selectUserByEmailAndPw,
    selectUserByEmail,
    insertUser,
    selectUserByIdx
}