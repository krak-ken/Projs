const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		chunkFilename: '[id].js',
		publicPath: ''
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules'
			},
			{
				test: /^((?!index).*\.css)$/,
				exclude: '/node_modules',
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules:{
								mode: 'local',
								localIdentName: '[name]__[local]__[hash:base64:5]'
							} 
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								autoprefixer({
									"browsers": [
									    "last 2 version",
									    "> 1%",
									    "not dead"
									]
								})
							]
						}
					}
				]
			},
			// {
			// 	test: /index\.css$/,
			// 	exclude: '/node_modules',
			// 	use: [
			// 		'style-loader',
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				importLoaders: 1,
			// 			}
			// 		},
			// 		{
			// 			loader: 'postcss-loader',
			// 			options: {
			// 				ident: 'postcss',
			// 				plugins: () => [
			// 					autoprefixer({
			// 						"browsers": [
			// 						    "last 2 version",
			// 						    "> 1%",
			// 						    "not dead"
			// 						]
			// 					})
			// 				]
			// 			}
			// 		}
			// 	]
			// },
			{
				test: /\.(png|jpe?g|gif)$/,
				loader: 'url-loader?limit=8192&name=images/[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]	
}