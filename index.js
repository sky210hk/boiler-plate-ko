//백엔드의 시작점(노드 app 실행)
const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./models/User");

//bodyParser : 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 함
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());

//몽구스(몽고DB와 express.js를 연결해주는 객체지향 라이브러리)
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')) //연결 된 경우
  .catch(err => console.log(err)) //에러가 발생한 경우

app.get('/', (req, res) => res.send('Hello World! 안녕하세요 반갑습니다.'))

app.post('/register', (req, res) => {

  //** 회원 가입을 위한 Route
  
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 DB에 넣어준다.  
  const user = new User(req.body)
  //정보가 userModel에 저장
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
  


})

app.listen(port, () => console.log(`Example app listening on port ${port}`))

