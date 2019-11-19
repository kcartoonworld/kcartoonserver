const { response, errResponse } = require('../library/response');
const returnCode = require('../library/returnCode');
const { sign, verify } = require('../library/jwt');

const loginService = require('../service/loginService');

async function postLogin(req, res) {
    try {
        const userIdx = await loginService.postLogin(req.body);
        if(!userIdx){
            console.log('로그인 실패');
            errResponse(res, returnCode.UNAUTHORIZED, '로그인 실패');
        } else {
            console.log(userIdx);
            response(res, returnCode.OK, '로그인 성공', {token : sign( userIdx )});
        }     
    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

module.exports = {
    postLogin
}