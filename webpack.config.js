const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode : 'development', 
    entry : path.resolve(__dirname,'src/index.js'),
    output : {
        filename : '[name].js',
        path : path.resolve(__dirname, 'dist'), 
        clean : true, 
    },
    devtool : 'inline-source-map', 
    devServer : {
        static: './dist', 
        client : {
            overlay : {
                warnings : false, 
                errors : true, 
            }
        }
    }, 
    module : {
        rules : [
            {
                test : /\.css$/i,
                use : ['style-loader', 'css-loader'], 
            }, 
            {
                test : /\.(png|svg|jpg|jpeg|gif)$/i,
                type : 'asset/resource'
            }, 
            {
                test : /\.(woff|woff2|eot|tff|otf)$/i,
                type : 'asset/resource',
            },
        ]
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, 'src/template/index.html'), 
        }), 
    ]
}
