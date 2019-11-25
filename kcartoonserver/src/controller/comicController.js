const { response, errResponse } = require('../library/response');
const returnCode = require('../library/returnCode');

const comicService = require('../service/comicService');

async function getComicDetail(req, res) {
    try {
        const inputResult = await comicService.getComicDetail(req.params.comicIdx);
        if (inputResult == -1){
            console.log('만화 선택 오류');
            errResponse(res, returnCode.BAD_REQUEST, '만화 선택 오류');
        } else {
            response(res, returnCode.OK, '만화 보기 성공', inputResult);
        }
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

async function getComic(req, res){
    try {
        const comicData = await comicService.getComic();
        response(res, returnCode.OK, '메인페이지 성공', comicData);
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

async function postComic(req, res) {
    try {
        const inputResult = await comicService.postComic(req.files.img[0].location, req.files.cutImg[0].location, req.body.title, req.headers.authorization);
        if(inputResult == 0){
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');    
        }  else {
            response(res, returnCode.OK, '만화 업로드 성공');
        }
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

async function postCut(req, res) {
    try {
        const inputResult = await comicService.postCut(req.file.location, req.headers.authorization, req.params.comicIdx);
        if(inputResult == 0){
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');    
        } else if (inputResult == -1){
            console.log('만화 선택 오류');
            errResponse(res, returnCode.BAD_REQUEST, '만화 선택 오류');
        } else {
            response(res, returnCode.OK, '만화 업로드 성공', { url : req.file.location });
        }
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

module.exports = {
    postCut,
    postComic,
    getComic,
    getComicDetail
}