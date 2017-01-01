'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'client.jsx'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		loaders: [
			{
				include: path.resolve(__dirname, 'src'),
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
			{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
			{
				test: /\.(png|jpg|gif)$/,
				loader: "file-loader?name=img/img-[hash:6].[ext]"
			},
		]
	},
	resolve: {
		extensions: [
			'',
			'.js',
			'.jsx'
		]
	}
};
