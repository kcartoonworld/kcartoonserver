# Mobile Programming Project 카툰월드

> 2019 / 2학기 국민대학교 모바일 프로그래밍 서버 레파지토리
>
> 이어 만드는 나만의 웹툰 플랫폼

![node_badge](https://img.shields.io/badge/node-%3E%3D%208.0.0-green)
![issue_badge](https://img.shields.io/github/issues/JeonHa/JeonHa-Server)
![license_badge](https://img.shields.io/github/license/JeonHa/JeonHa-Server)
![npm_bedge](https://img.shields.io/badge/npm-v6.10.1-blue)

* 프로젝트 기간: 2019.11.10 ~ 2019.11.26
* [API 문서](https://github.com/kcartoonworld/kcartoonserver/wiki) 




## 프로젝트 설명

사람들의 순발력을 유머로
사람들의 순발력을 스토리로

사람들의 순발력을 살린 만화 플랫폼 ‘**카툰월드**’입니다. 



## Workflow


![workflow](https://user-images.githubusercontent.com/30704569/69640366-8e377680-10a1-11ea-88d9-b5dfc684fc9d.png)




## Architecture

![architecture](https://user-images.githubusercontent.com/30704569/69640437-b030f900-10a1-11ea-9dcb-487420e0019b.png)



## DB ERD

![ERD](https://github.com/JeonHa/JeonHa-Server/blob/master/public/images/ERD.png)



## Depenedncy

```json
{
  "dependencies": {
    "cookie-parser": "~1.4.3",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "express": "~4.16.0",
    "http-errors": "~1.6.2",
    "jade": "~1.11.0",
    "jsonwebtoken": "^8.5.1",
    "morgan": "~1.9.0",
    "promise-mysql": "^4.1.0"
  }
}
```





## 시작하기

소스 코드는 MAC OS + Windows10 + Visiau Studio Code + Node v11.6.0 + NPM v6.10.1환경에서 제작되었습니다.

* Node.js의 Async/Await 도구를 사용해 (Promise) 비동기 제어를 하고 있습니다.



#### 설치하기

* `nodejs`와 `npm`을 을치합니다. (설치 방법 :  [nodejs.org](https://nodejs.org/) 를 참고)
* Node.js 10 LTS 버전을 설치합니다.
* 실행에 필요한 의존성을 설치합니다.

```
npm install
```



#### 실행하기

```
npm start
```

> localhost:1810으로 접속 가능합니다.



## 배포

* [AWS EC2](https://aws.amazon.com/ko/ec2/?sc_channel=PS&sc_campaign=acquisition_KR&sc_publisher=google&sc_medium=english_ec2_b&sc_content=ec2_e&sc_detail=awsec2&sc_category=ec2&sc_segment=177228231544&sc_matchtype=e&sc_country=KR&s_kwcid=AL!4422!3!177228231544!e!!g!!awsec2&ef_id=WkRozwAAAnO-lPWy:20180412120123:s) - 클라우드 환경 컴퓨팅 시스템
* [AWS RDS](https://aws.amazon.com/ko/rds/) - 클라우드 환경 데이터베이스 관리 시스템
* [AWS S3](https://aws.amazon.com/ko/s3/?sc_channel=PS&sc_campaign=acquisition_KR&sc_publisher=google&sc_medium=english_s3_b&sc_content=s3_e&sc_detail=awss3&sc_category=s3&sc_segment=177211245240&sc_matchtype=e&sc_country=KR&s_kwcid=AL!4422!3!177211245240!e!!g!!awss3&ef_id=WkRozwAAAnO-lPWy:20180412120059:s) - 클라우드 환경 데이터 저장소



## 사용된 도구 

* [Node.js](https://nodejs.org/ko/) - Chrome V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임
* [Express.js](http://expressjs.com/ko/) - Node.js 웹 애플리케이션 프레임워크
* [NPM](https://rometools.github.io/rome/) - 자바 스크립트 패키지 관리자
* [PM2](http://pm2.keymetrics.io/) - Express 앱용 프로세스 관리자
* [vscode](https://code.visualstudio.com/) - 편집기
* [Mysql](https://www.mysql.com/) - DataBase



## 개발자
* [이상윤](https://github.com/syndersonLEE)

[기여자 목록](https://github.com/kcartoonworld/kcartoonserver/graphs/contributors)을 확인하여 이 프로젝트에 참가하신 분들을 보실 수 있습니다.



## 카툰월드서버의 연관 프로젝트

* [Android](https://github.com/kcartoonworld/cartoon)
