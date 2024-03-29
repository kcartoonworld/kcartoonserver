const cutDao = require('../dao/cutDao');
const userDao = require('../dao/userDao');
const comicDao = require('../dao/comicDao');
const cutVoteDao = require('../dao/cutVoteDao');

const { verify } = require('../library/jwt');

async function getComic() {
    let comicArray = [];
    const comicResult = await comicDao.selectMainComic();
    await Promise.all(comicResult.map(async (comicData) => {
        const userData = await userDao.selectUserByIdx(comicData.userIdx);
        let invertedData = {
            comicIdx : comicData.comicIdx,
            comicName : comicData.comicName,
            comicArtist : userData.userNickname,
            comicInqury : comicData.comicIndex,
            comicImg : comicData.comicThumbnailImg
        }
        comicArray.push(invertedData);
    }))
    return comicArray;
}

async function postComic(thumbnailUrl, bodyUrl, title, userToken) {
    const userIdx = await verify(userToken);
    if(userIdx == -2 || userIdx == -3){
        return 0;
    }
    const userData = await userDao.selectUserByIdx(userIdx.idx.userIdx);
    if(userData.length != 1){
        return 0;
    } else {
        const newComicData = await comicDao.insertComic(title, userIdx.idx.userIdx, thumbnailUrl);
        const newCutData = await cutDao.insertCut(userIdx.idx.userIdx, newComicData.insertId);
        await cutDao.insertCutUrlByUrl(bodyUrl, newCutData.insertId);
        return 1;
    }
}

async function postCut(url, userToken, comicIdx) {
    const userIdx = await verify(userToken);
    if(userIdx == -2 || userIdx == -3){
        return 0;
    }
    const userData = await userDao.selectUserByIdx(userIdx.idx.userIdx);
    const comicData = await comicDao.selectComicByIdx(comicIdx);
    if(userData.length != 1){
        return 0;
    } else if(comicData.length != 1) {
        return -1;
    } else {
        const newCutData = await cutDao.insertCut(userIdx.idx.userIdx, comicIdx);
        await cutDao.insertCutUrlByUrl(url, newCutData.insertId);
        return 1;
    }
}

async function getComicDetail(comicIdx) {
    await comicDao.updateComicInquery(comicIdx);
    const comicData = await comicDao.selectComicByIdx(comicIdx);
    if(comicData.length == 0) {
        return -1;
    } else {
        const cutData = await cutDao.selectCutByComicIdxStateOne(comicIdx);
        return cutData;
    }
}

async function getCutVoteList(token, comicIdx) {
    const verifyedData = verify(token);
    if(verifyedData < 0) {
        return 0;
    } else {
        const comicData = await comicDao.selectComicByIdx(comicIdx);
        if(comicData.length == 0) {
            return -1;
        }
        const newCutData = await cutDao.selectNewCutListByComicIdx(comicIdx);
        return newCutData;
    }
}

async function postCutVote(token, comicIdx, cutIdx) {
    const verifyedData = verify(token);
    if(verifyedData < 0) {
        return 0;
    } else {
        const comicData = await comicDao.selectComicByIdx(comicIdx);
        if(comicData.length == 0) {
            return -1;
        }
        const userIdx = verifyedData.idx.userIdx;
        const checkVote = await cutVoteDao.selectCutVoteByUseridxComicidx(userIdx, comicIdx);
        if(checkVote.length > 0) {
            return -2;
        }
        
        const resultData = await cutVoteDao.insertCutVote(userIdx, comicIdx, cutIdx);
        await cutDao.updateCutVote(cutIdx);
        return resultData;
    }
}

module.exports = {
    postCut,
    postComic,
    getComic,
    getComicDetail,
    getCutVoteList,
    postCutVote
}