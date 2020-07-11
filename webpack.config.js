const path = require('path')
module.exports = {
  mode:'development',
  resolveLoader: {
    modules:['node_modules','./loaders']
  },
  module:{
    rules:[{
      test: /\.js/,
      use: [{
        loader: 'replaceLoader'
      },{
        loader: 'repalceLoaderAsync',
        options:{
          name: 'liugezhou'
        }
      }]
    }]
  },
  entry:{
    main:'./src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js'
  }
}