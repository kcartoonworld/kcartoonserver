const userDao = require('../dao/userDao');
const cutDao = require('../dao/cutDao');

const { verify } = require('../library/jwt');

async function getUser(token){
    const verifiedToken = verify(token);
    if(verifiedToken < 0) {
        return -1;
    }
    const userIdx = verifiedToken.idx.userIdx;
    const userData = await userDao.selectUserByIdx(userIdx);
    const invertedData = {
        userEmail : userData[0].userEmail,
        userNickname : userData[0].userNickname
    }
    return invertedData;
}

async function putPassword(token, body) {
    const verifiedToken = verify(token);
    if(verifiedToken < 0) {
        return -1;
    }
    const userIdx = verifiedToken.idx.userIdx;
    const userData = await userDao.selectUserByIdx(userIdx);
    if(userData[0].userPassword != body.expassword) {
        return 0;
    }
    const resultData = await userDao.updateUserPassword(userIdx, body.password);
    return resultData;
}

async function getMyComic(token) {
    const verifiedToken = verify(token);
    if(verifiedToken < 0) {
        return -1;
    }
    const userIdx = verifiedToken.idx.userIdx;
    const cutData = await cutDao.selectCutListByUseridx(userIdx);

    return cutData;

}

module.exports = {
    getUser,
    putPassword,
    getMyComic
}