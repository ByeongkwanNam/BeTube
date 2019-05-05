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
    6. `"start": "nodemon --exec babel-node index.js"` 로 바꾸기.