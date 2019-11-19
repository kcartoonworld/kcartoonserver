const userDao = require('../dao/userDao')

async function postSignup(userData) {
    console.log(userData.nickname);
    if (userData.email == undefined ||
        userData.password == undefined ||
        userData.nickname == undefined) {
        return -1;
    }

    const existedUser = await userDao.selectUserByEmail(userData.email);
    if(existedUser.length > 0) {
        console.log('아이디 중복');
        return 0;
    } else {
        const enrollUser = await userDao.insertUser(userData);
        return enrollUser;
    }
    
    
}

module.exports = {
    postSignup
}