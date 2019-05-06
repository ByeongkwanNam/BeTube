# BeTube
cloning YouTube with Vanilla and NodeJS

## TIL

### 5월 5일 (일)
* babel: 최신 문법의 JS를 브라우저가 이해할 수 있는 구식 문법으로 바꿔주는 도구.
    1. `npm install @babel/node`: node.js에서 babel을 사용하는 것이므로 그에 맞는 babel 설치
    2. `npm install @babel/preset-env`: 적당한 수준에서 실험적인 babel 설치
    3. `.babelrc 파일`: {"presets": ["@babel/preset-env"]} 입력. babel이 어느 수준에서 번역해야할지 알려주는 세팅.
    4. `npm install @babel/core`: dependencies.
    5. `npm install nodemon -D`: 굳이 껐다 켜지 않아도 파일 저장 시 자동으로 서버 업데이트 되도록 도와주는 nodemon을 프로젝트에 필요한게 아니라 개발에 필요한 거니까 devDependencies로 설치. 
    6. `"start": "nodemon --exec babel-node index.js --delay 2"` 로 바꾸기
        * --delay 2 이유: 파일을 저장하면 nodemon이 babel이 코드 변환을 마치기 전에 서버를 재시작하고, 그 이후에 babel이 코드 변환한 후 두 번째로 재시작한다. 이걸 방지하기 위해 2초 후 재시작

### 5월 6일 (월)
* Milddleware: express에서 최종 결과 전에 존재하는 층들.
    1. `morgan`: logger
    2. `helmet`: for security
    3. `cookie-parser and body-parser`: to handle cookie and body way I want

* Router: Model에 따른 다양한 route 구성 가능.