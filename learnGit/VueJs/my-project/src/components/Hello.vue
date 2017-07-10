<template>
	<div class = "hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'hello',
		data() {
			return {
				msg: '欢迎来到英雄联盟！'
			}
		}
	}
</script>