module.exports = {
	entry: './main.js',
	watch: true,
	output: {
		filename: "bundle.js"
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.common.js",
			"app": './app.vue'
		}
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react'
			},
			{
			 	test: /\.vue$/,
			 	loader: 'vue'
			}
		]
	},
	vue: {
		loaders: {
			js: 'babel'
		}
	},
	babel: {
     	presets: ['es2015']
    }
};