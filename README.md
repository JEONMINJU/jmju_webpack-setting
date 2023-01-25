# webpack 환경 설정

install => i
--save-dev => -D :개발용 설치(devDependencies)

npm i webpack-dev-server -D : 서버를 띄워 준다.

**[노드 제공 모듈]**
const path = require('path'); 노드에서 제공하는 모듈

# webpack 컴파일 방식
Internal(인터널)
- minicss를 따로 적용하기 전에는 웹페이지 내 head 태그안에 스타일태그로 적용되었다.
- use : ['style-loader','css-loader'] 

External(익스터널) 방식
- mini-css-extract-plugin : 별도의 css 파일을 번들링한다.

# webpack 정리
- 처음에는 하나의 js파일로 떨어진다.
- use : [MiniCssExtractPlugin.loader, 'css-loader'] 를 사용하면 
- js 와 css 파일을 분리하여 컴파일 가능

# css 컴파일
- 실제로 Sass를 css로 컴파일하는 것은 node-sass이다.
- style-loader, css-loader, sass-loader는 webpack 플러그인이다.

# Babel
- 최신 사양의 자바스크립트 코드를 IE 나 구형 브라우저에서도 동작하는 ES5 이하의 코드로 변환(트랜스파일링)할 수 있다.
- babel을 사용하려면, Babel 프리셋을 설치해야 한다.

- preset-env는 자동으로 옛날 브라우저들을 지원해준다.
- babel-loader는 바벨이랑 웹팩을 연결해준다.