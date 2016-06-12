module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  }
};
