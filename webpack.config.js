module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/], 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        },
        resolve: {
          extensions: [".jsx", ".js"]
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js', 
    path: __dirname + '/client/dist' 
  }
};