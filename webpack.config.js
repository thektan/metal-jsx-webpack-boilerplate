const path = require('path');

module.exports = {
	entry: './src/components/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'metal-jsx']
				}
			},
			{
				test: /\.(sass|scss)$/,
				loader: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
};