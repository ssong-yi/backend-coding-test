# 백엔드 코딩 테스트

## 실행 방법
1. .env 세팅
```bash
PORT=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=

SECRET=
EXPIRES_IN=
```
2. 위 설정에 맞는 DB 생성
3. Installation

```bash
$ npm install
```


4. Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

### 사용 기술
- typescript
- node
- nest.js
- graphql
- typeorm
- postgresql

### 회고
기존의 사용했던 기술 스택과 전혀 다른 기술을 사용하여 프로젝트를 진행하였기 때문에, 초반에 어려움이 많았습니다. 다행히 nest.js의 공식 문서에서 많은 도움을 받을 수 있었습니다. `postgresql`의 경우, 이전에 사용해본 경험이 있었기 때문에 pgAdmin을 사용해 db의 데이터를 확인하며 진행하였습니다.
가장 인상깊었던 기술은 하나의 endpoint로 모든 요청을 처리할 수 있는 `graphql`이었습니다. 이번 과제를 통해 `nest.js`와 `graphql`에 대해서 이해하고 사용해볼 수 있었고, 이후에 다시 한 번 사용해 볼 생각입니다.
