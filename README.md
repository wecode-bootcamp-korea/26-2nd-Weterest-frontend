# 🌟 PROJECT_WINTEREST | 윈터레스트

사진공유 플랫폼 [핀터레스트](https://www.pinterest.com/) 클로닝 프로젝트

- 시연 영상 [링크](https://drive.google.com/file/d/1OeR-_FTH9cSdoDQzxY83fJlY1tcdrh7Q/view?usp=sharing)
- 배포한 웹사이트 [링크](http://wecode26winterestproject.s3-website.ap-northeast-2.amazonaws.com/)

## 👫 팀원

- Front-end : 김유신, 임연수, 전창민
- Back-end : 권상현, 장재원

## 개발 기간

- 기간: 2021년 11월 15일 ~ 2021년 11월 26일(12일간)

## 적용 기술

- Front-end: JavaScript, React, React Hook, Redux, HTML, Styled-Component, AWS S3
- Back-end: Django, Python, MySQL, jwt, bcrypt, AWS EC2, AWS RDS, AWS S3, Docker
- 협업툴: Trello, Slack, Notion, Github, dbdiagram, postman

## 개발방향

WINTEREST UI/UX

1. 카카오 소셜 로그인 서비스를 제공합니다.
2. 사진들을 매직그리드 및 무한스크롤 기능을 통해 제공합니다.
3. WINTEREST 회원이 본인 로컬에 있는 사진을 저장하면 마이페이지에 등록합니다.
4. 원하는 카테고리를 검색하면 해당 사진들을 제공합니다.

WINTEREST API

1. WINTEREST에 게시된 Pin 리스트 및 상세정보를 제공합니다.
2. WINTEREST 회원이 Pin 등록, Pin 저장, 댓글을 제공합니다.
3. WINTEREST에 등록된 Pin을 제목, 태그별로 검색하여 관련된 Pin 리스트를 한눈에 볼 수 있습니다.

## 구현 기능 및 개인 역할

> **김유신**

- useNavgate()와 query string을 활용한 검색 기능 구현
- URL.createObjectURL()을 이용한 upload file 미리보기 구현
- formData를 이용하여 업로드 데이터 전송

> **임연수**

- 메인, 상세, 검색 페이지에서 사용할 매직 그리드, 무한 스크롤
- 마이 페이지에 사용한 일반 그리드 및 매직 그리드
- Pin 저장 저장 취소 기능
- 리덕스를 활용한 프로필 정보 전역화 및 다크모드 구현
- AWS S3를 이용한 프론트 배포

> **전창민**

- RestApi를 활용한 카카오 소셜로그인 서비스 구현
- Hook 기능을 활용한 로그인 페이지 구현

## 결과물

로그인 페이지

![_main_Winterest_0](https://user-images.githubusercontent.com/22067260/143684011-969b553e-8d5e-440f-a180-11d0b11b6539.gif)

카카오 로그인

![_main_Winterest_1](https://user-images.githubusercontent.com/22067260/143684026-a6b479d7-4c06-4ea4-8ec3-2ea44ac93f84.gif)

메인 페이지

![_main_Winterest_2](https://user-images.githubusercontent.com/22067260/143684435-6ef21dd7-b8e6-4cfb-9fa6-112c4c33393f.gif)

상세 페이지

![_main_Winterest_3](https://user-images.githubusercontent.com/22067260/143684288-d7e92edf-a708-42ea-92be-5321ecd9bfa4.gif)


검색 페이지

![_main_Winterest_4](https://user-images.githubusercontent.com/22067260/143684292-1125acdb-b792-4ac6-8a25-24712565a310.gif)


업로드 미리보기

![_main_Winterest_5](https://user-images.githubusercontent.com/22067260/143684062-efc312dc-5db4-418a-995a-45e1b87f0fb0.gif)

마이 페이지 1 업로드한 이미지 확인

![_main_Winterest_6](https://user-images.githubusercontent.com/22067260/143684082-10f83baf-ab26-4775-8750-4fb44e423420.gif)

마이 페이지 2 저장한 핀 확인

![_main_Winterest_7](https://user-images.githubusercontent.com/22067260/143684094-4b96db50-b56e-4e86-954a-f4cc1fceb76e.gif)

다크 모드 

![winterest_darkmode](https://user-images.githubusercontent.com/22067260/143766048-f1133154-cdb4-4aa8-9382-54291f8310bf.gif)

## 소감 및 후기

> **김유신** : 팀원들 모두 고생 많으셨고, 잘 해주셔서 감사했습니다. 배포까지 할 수 있어서 좋았습니다.

> **임연수** : 담백했습니다. 메인, 상세, 검색, 마이 페이지에서 공통적으로 활용할 매직 그리드 컴포넌트화를 진행하면서 다른 개발자들이 사용하기 편리한 코드가 무엇일까에 대한 생각을 많이 했습니다. 리베이스를 이용한 깃허브 활용을 할 수 있어서 유익했습니다.(리베이스를 잘못해서 2번 날려먹었지만 되살리는 법을 찾았습니다:)

> **전창민** : 카카오 소셜로그인 기능구현을 할 수 있어서 좋았습니다. 그리고 팀원들 모두 각자 맡은 부분을 너무 잘해줘서 좋은 결과물을 만들 수 있었습니다!

## 레퍼런스

- 이 프로젝트는 <u>[핀터레스트](https://www.pinterest.com/)</u> 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
