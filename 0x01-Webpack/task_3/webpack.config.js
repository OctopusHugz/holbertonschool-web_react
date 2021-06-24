const path = require('path');

module.exports = {
	entry: './js/dashboard_main.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js'
	},
	mode: 'development',
	devServer: {
		contentBase: './public',
		compress: true,
		port: 8564,
	},
	devtool: 'inline-source-map',
	optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
	module: {
    rules: [
			{
				test: /\.css$/, use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						},
					},
				],
			}
    ],
	},
}
