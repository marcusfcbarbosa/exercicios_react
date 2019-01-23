const webpack = require('webpack') //webpack executa em cima do node.js

//expoe um objeto que representa toda a configuração
module.exports ={
    entry: './ex/index.jsx',//a entrada é uma arquivo de extensao .jsx padrão do react
    output:{
        path: __dirname+ '/public',//onde sera gerada a saida do javascript (__dirname = diretorio local variavel de ambiente)
        filename: './bundle.js',//lembrando que pode ser qualquer nome

    },
    devServer:{
        port:8080,
        contentBase: './public',
    },
    module:{
        loaders:[{
            test: /.jsx?$/, //observe a extensao dos  arquivos react .jsx
            loader:'babel-loader',//para poder usar o import
            exclude:/node_modules/,
            query:{
                presets:['es2015','react']
            }

        }]
    }
}