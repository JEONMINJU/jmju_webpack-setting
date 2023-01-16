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