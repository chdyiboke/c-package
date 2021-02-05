const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "umd"),
    filename: 'umd.js',
    // library: "umd",
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: 'babel-loader', // TODO：import 找不着
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['js'],
    // alias: { 
    //   React: path.resolve(__dirname, './node_modules/react/'),
    //   ReactDOM: path.resolve(__dirname, './node_modules/react-dom/')
    // }
  }
  
};
