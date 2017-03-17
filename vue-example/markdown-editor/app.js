// import test from './test'
// test()

import Vue from 'vue'
import marked from 'marked'


let vm = new Vue({
	el: "#app",
	data: {
		content: '# hello world'
	},
	computed: {
		getMdContent () {
			return marked(this.content)
		}
	}
});