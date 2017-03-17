<template>
  <div>
  	<topbar/>
    <mainbody/>
  </div>
</template>

<script>
import topbar from './components/topbar.vue'
import mainbody from './components/body.vue'

export default {
  name: 'app',
  data: function () {
    return {
      text: '你好'
    }
  },
  components: { topbar,mainbody }
}
</script>

<style lang="stylus">
	h1
		color: red
</style>