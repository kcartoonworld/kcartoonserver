const { response, errResponse } = require('../library/response');
const returnCode = require('../library/returnCode');

const userService = require('../service/userService');

async function getUser(req, res) {
    try {
        const userData = await userService.getUser(req.headers.authorization);
        if(userData == -1) {
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');
        } else {
            console.log('개인 정보 성공');
            response(res, returnCode.OK, '개인 정보 성공', userData);
        }
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

async function putPassword(req, res) {
    try {
        const userData = await userService.putPassword(req.headers.authorization, req.body);
        if(userData == -1) {
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');
        } else if(userData == 0) {
            console.log('비밀번호 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '비밀번호 오류');
        } else {
            console.log('비밀번호 성공');
            response(res, returnCode.OK, '비밀번호 성공');
        }
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

async function getMyComic(req, res) {
    try {
        const userData = await userService.getMyComic(req.headers.authorization);
        if(userData == -1) {
            console.log('토큰 오류');
            errResponse(res, returnCode.UNAUTHORIZED, '토큰 오류');
        } else {
            console.log('내 작품 성공');
            response(res, returnCode.OK, '내 작품 성공', userData);
        }
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

module.exports = {
    getUser,
    putPassword,
    getMyComic
}