const path = require('path');
const HTMLWebpackPlagin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    resolve:{
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    mode: NODE_ENV || 'development',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module:
    {
        rules:[
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.(c|sa|sc)ss?$/,
                use: [
                    'style-loader', 
                    { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
                    {
                        loader: 'css-loader',
                        options:
                        {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                auto: /\.module\.\w+$/i
                            }
                        }
                    },
                    'sass-loader',                    
                ],
            }
        ]
    },
    plugins:
    [
        new HTMLWebpackPlagin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    devServer:
    {
        port: 3001,
        open: true,
        hot: true,
    },
    devtool: 'source-map'
}