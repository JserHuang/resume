module.exports = {
	entry: './app.js',
	watch: true,
	output: {
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['', '.js', '.styl'],
		alias: {
			"vue$": "vue/dist/vue.common.js"
		}
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: "babel-loader?presets[]=es2015&presets[]=react"
			},
			{
			    test: /\.styl$/,
			    loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
			},
			{ 
				test: /\.styl$/, 
				loader: 'style-loader!css-loader!stylus-loader' 
			}
		]
	},
	// stylus: [
	// 	var css = require('./style.styl');
	// ]
};