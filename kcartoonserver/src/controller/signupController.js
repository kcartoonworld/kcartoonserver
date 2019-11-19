const { response, errResponse } = require('../library/response');
const returnCode = require('../library/returnCode');
const { sign, verify } = require('../library/jwt');

const signupService = require('../service/signupService');

async function postSignup(req, res){
    try {
        const user = await signupService.postSignup(req.body);

        if(user == 0) {
            errResponse(res, returnCode.BAD_REQUEST, '아이디 중복');
        } else if(user == -1){
            errResponse(res, returnCode.BAD_REQUEST, '회원가입 정보 미기입');
        } else {
            console.log(user);
            response(res, returnCode.OK, '회원가입 성공', { token : sign(user.insertId) });
        }

    } catch (error) {
        console.log(error.message);
        errResponse(res, returnCode.INTERNAL_SERVER_ERROR, '서버 오류');
    }
}

module.exports = {
    postSignup
}