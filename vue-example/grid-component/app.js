// import test from './test'
// test()

import Vue from "vue"

Vue.component("grid-item",{
	props: ["thead", "list", 'search'],
	template: "#grid-template",
	computed: {
		getData () {
			let arr = [];
			for(let el of this.list){
				if((el.name).search(this.search)!==-1 || (String(el.power)).search(this.search)!==-1){
					arr.push(el)
				}
			}
			return arr;
			
		}
	}
});

new Vue({
	el: "#app",
	data: {
		val: '',
		elem: ["name", "power"],
		dataList: [
	      	{ name: 'Chuck Norris', power: Infinity },
	      	{ name: 'Bruce Lee', power: 9000 },
	      	{ name: 'Jackie Chan', power: 7000 },
			{ name: 'Jet Li', power: 8000 }
	    ]
	}
})