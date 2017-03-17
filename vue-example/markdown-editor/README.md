# 是一个 vue 的官方示例 [原地址](https://cn.vuejs.org/v2/examples/)

- 1.通过 webpack 的方式新建，并没有通过 脚手架。
```
	touch index.html app.js test.js webpack.config.js 
```
- 2.初始化
```
	#初始化后，自动生成 package.json 文件，用于添加一些依赖
	npm init
```
- 3.编写 webpak.config.js
```
module.exports = {
	entry: './app.js',
	output: {
		filename: "bundle.js"
	},
	resolve: {
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
			}
		]
	}
};
```
- 4.在 package.json 中添加依赖 dependencies
```
"dependencies": {
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",
    "stylus": "^0.54.5",
    "stylus-loader": "^2.5.0",
    "vue": "^2.1.8",
    "webpack": "^1.14.0"
  },
```
- 5.进入项目所在目录，安装依赖
```
	cd prj
	npm install
```