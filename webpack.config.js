const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, './public/bundle'),
		filename: 'bundle.js'
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i, 
				loaders: [ 
					'file?hash=sha512&digest=hex&name=[hash].[ext]', 
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false' 
				] 
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
				template: './public/index.html'
			})
	]
}