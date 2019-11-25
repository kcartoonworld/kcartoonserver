const comicDao = require('../dao/comicDao');

async function getUserRankingService(){
    const userRankingData = await comicDao.selectComicGroupByUser();
    return userRankingData;
}

async function getComicRankingService(){
    const comicRankingData = await comicDao.selectComicGroupByComic();
    console.log(comicRankingData);
    return comicRankingData;
}

module.exports = {
    getUserRankingService,
    getComicRankingService
}