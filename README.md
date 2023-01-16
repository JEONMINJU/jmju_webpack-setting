# webpack 환경 설정

install => i
--save-dev => -D :개발용 설치(devDependencies)

npm i webpack-dev-server -D : 서버를 띄워 준다.

const path = require('path'); 노드에서 제공하는 모듈

Internal(인터널)
- minicss를 따로 적용하기 전에는 웹페이지 내 head 태그안에 스타일태그로 적용되었다.
use : ['style-loader','css-loader'] 

External(익스터널) 방식
- mini-css-extract-plugin