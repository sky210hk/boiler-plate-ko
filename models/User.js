//몽구스 불러오기
const mongoose = require('mongoose')

//유저 스키마 생성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //공백제거(true)
        unique: 1 //이메일은 고유키
    },
    password: {
        type: String,
        minlength: 5 //최소 길이
    },
    lastname: {
        type: String,
        maxlength: 50 //최대 길이
    },
    role: { //유저 권한(관리자 or 일반유저)
        type: Number,
        default: 0 //설정하지 않으면 0(일반유저)
    },
    image: String,
    token: { //유효성 검사용
        type: String
    },
    tokenExp: { //토큰의 유효기간
        type: Number
    }
})
//모델로 감싸기
const User = mongoose.model('User', userSchema)

//모델을 다른 파일에서도 사용할 수 있게 하기
module.exports = {User}