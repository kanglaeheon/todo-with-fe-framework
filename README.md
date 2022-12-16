# 개요

Redux, Styled-Component를 적용한 React Todo App입니다.
Commit convention, Github Project / Issues 연습을 위함입니다.

## Commit Convention

feat : 새로운 기능
fix : 버그 수정
build : 빌드 관련 파일 수정
chore : 그 외 자잘한 수정
ci : CI관련 설정 수정
docs : 문서 수정
style : 코드 스타일 혹은 포맷 등
refactor : 코드 리팩토링
test : 테스트 코드 수정

## json-server api

```
$ json-server --watch data.json --port 3001
```

### GET

[http://localhost:3001/todos][http://localhost:3001/todos]

```
[
    {
        "content": "잠 자기",
        "done": false,
        "date": "2022. 12. 13",
        "id": 1
    },
    {
        "content": "완료!!!!!!",
        "done": true,
        "date": "2022. 12. 13",
        "id": 2
    },
    {
        "content": "다 했따!",
        "done": false,
        "date": "2022. 12. 13",
        "id": 3
    },
    {
        "content": "정적 페이지 배포",
        "done": false,
        "date": "2022. 12. 13",
        "id": 4
    }
]
```
