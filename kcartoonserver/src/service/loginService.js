const userDao = require('../dao/userDao')

async function postLogin(userData) {
    const userIdx = await userDao.selectUserByEmailAndPw(userData);
    console.log(userIdx);
    if(userIdx.length == 0){
        return undefined;
    } else {
        return userIdx[0];
    }
}

module.exports = {
    postLogin
}