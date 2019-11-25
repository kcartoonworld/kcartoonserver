const { response, errResponse } = require('../library/response');
const returnCode = require('../library/returnCode');

const rankingService = require('../service/rankingService');

async function getRanking(req, res){
    try {
        console.log('헤')
        let rankingData;
        if(req.query.sort == "user"){
            rankingData = await rankingService.getUserRankingService();
            response(res, returnCode.OK, '랭킹 성공', rankingData);
        } 
        else if (req.query.sort == "comic") {
            rankingData = await rankingService.getComicRankingService();
            response(res, returnCode.OK, '랭킹 성공', rankingData);
        } 
        else {
           console.log("쿼리 스트링 오류");
           errResponse(res, returnCode.BAD_REQUEST, '랭킹 실패'); 
        }
    } catch(error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

module.exports = {
    getRanking
}