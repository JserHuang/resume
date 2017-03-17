// import test from './test'
// test()

import Vue from 'vue'

let apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha='

let vm = new Vue({
	el: "#app",
	data: {
		branches: ['master', 'dev'],
		currentBranch: 'master',
		commits: null
	},
	watch: {
		currentBranch: 'getData'
	},
	created: function(){
		this.getData();
	},
	filters: {
		splitStr: function(v){
			return v.replace(/[T,Z]/g,' ');

		}
	},
	methods: {
		getData () {
			let self = this;

			var xmlHttp = new XMLHttpRequest();
			xmlHttp.open('GET',apiURL + this.currentBranch,true);
			xmlHttp.onload = function(){
				self.commits = JSON.parse(xmlHttp.responseText);
				console.log(this.commits);
			}
			xmlHttp.send();

		}
	}
});