const path = require('path');

module.exports = {
    mode: 'development',
    entry : {
        main : ['./src/dist/js/app.js', './src/dist/scss/app.scss']
    },
    output : {
        path: path.resolve('./src/assets'),
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
                        }
                    }
                ]
            }
        ]
    }
}