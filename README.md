## Webpack 이란 ?
- Webpack = 모듈 번들링이라고 한다.
- html 파일에 들어가는 자바스크립트 파일들을 하나의 자바스크립트 파일로 만들어주는 방식을 모듈 번들링이라고 한다.
- 쉽게 말하면, 필요한 다수의 자바스크립트 파일을 하나의 자바 스크립트 파일로 만들어 주는 것을 Webpack 이라고 한다.

### 사용 이유
- 옛날에는 페이지마다 새로운 html을 요청해서뿌려 주는 방식이였다면, 요새는 SPA 하나의 html 페이지에 여러개의 자바스크립트 파일들이 포함한다. 연관 되어 있는 자바스크립트 종송석 있는 파일들을 하나의 파일로 묶어줘서 관리하기 편하다.
- 파일을 컴파일 할 때, 여러 모듈들의 파일을 읽어오는데 시간이 오래 걸린다. 그 부분을 해결하기 위해 여러 파일을 하나의 파일로 번들링 해준다.
- 하나의 자바스크립트 파일로 만들어서 웹페이지 성능 최적화 해준다.

## Babel 이란 ?
- 최신 ES6버전을 구 버전인 ES5로 변환해준다.

### Babel 사용 이유
- 최신 업데이트 중에 ES6버전은 큰 업데이트 부분을 차지한다.
크게 일어난 만큼 ES6를 지원해주는 브라우저가 있다. 그 중에서는 지금까지는 크롬, 사파이, 파이어폭스(98%)와 같은 에버그린 브라우저는 최신 업데이트 버전으로 지원을 해준다.
하지만 인터넷 익스플로러11을 사용하는 비율도 11% 정도나 되는데 지원을 하지 않는다. 그러므로 아직 구 버전을 사용하는 ES5버전으로 바꿔주어야 한다.
- 그래서 개발환경을 설정할 때, webpack이랑 babel로 기초 환경 설정을 잡고 개발을 해야 한다.

## 출처
- [https://github.com/haeyonghahn/react/tree/master/project-ex05](https://github.com/haeyonghahn/react/tree/master/project-ex05)
- [https://github.com/haeyonghahn/react/tree/master/project-ex06](https://github.com/haeyonghahn/react/tree/master/project-ex06)
- https://velog.io/@yon3115/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%ED%95%84%EC%88%98-Webpack%EC%9D%B4%EB%9E%80
- https://www.youtube.com/watch?v=rbmUFHZt3sg
