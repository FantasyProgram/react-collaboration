
import  path ,{dirname}from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.bundle.js'
    },
     devServer: {
        static: './dist',
        port: 6969,
        open:true,
        hot:true,
    },

        module:{
            rules:[
                {
                    test:/\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use:{
                        loader:'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            sourceType: 'unambiguous', // <--- safe for mixed environments
                        }
                    }
                },
            ]
        },
    plugins :[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }

}