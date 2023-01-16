const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry : {
        main : ['./src/dist/js/app.js', './src/dist/scss/app.scss']
    },
    output : {
        path: path.resolve(__dirname, './src/assets'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test : /\.(css|scss|sass)$/,
                use : ['style-loader','css-loader']
            },
            {
                test : /\.(png|jpg|gif|jpeg|eot|ttf|woff|woff2|svg)$/,
                use : [
                    {
                        loader : 'file-loader',
                        options : {
                            publicPath: '../assets', // 컴파일 후 assets에 떨어진 이미지 호출하도록 상대경로 설정
                            name : '[name].[ext]?[hash]' // 결과물이 원본 파일 이름과 동일하게 떨어지도록
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 이전 빌드 파일들 모두 삭제 시켜줌(최신만 남기고 알아서 정리해줌)
    ]
}