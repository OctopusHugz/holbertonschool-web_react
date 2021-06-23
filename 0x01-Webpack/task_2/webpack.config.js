const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminJpegtran = require('imagemin-jpegtran');

module.exports = {
	entry: './js/dashboard_main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	mode: 'production',
	module: {
    rules: [
			{
				test: /\.css$/, use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				type: 'asset/resource',
			},
    ],
	},
	plugins: [
		new ImageminPlugin({
      plugins: [
        imageminJpegtran({
          quality: 50,
          progressive: true,
        })
      ]
    })
  ],
}
