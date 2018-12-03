const path = require('path');

module.exports = {
    mode:'development',
    entry:{
        index:'./src/js/index'
    },
    output:{
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                   {loader:"babel-loader"}
                ]
             }
        ]
    }

}