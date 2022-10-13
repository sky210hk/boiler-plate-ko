//백엔드의 시작점(노드 app 실행)
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World! 안녕하세요'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))

//몽구스(몽고DB와 express.js를 연결해주는 객체지향 라이브러리)
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sky210hk:rlagusrl1!@boiler-plate.rruzz63.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')) //연결 된 경우
  .catch(err => console.log(err)) //에러가 발생한 경우

