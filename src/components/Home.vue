<template>
	<div ref="target" class="large-font box-snaps">
		<div class="home-con">
			<div class="con typing-demo">{{ this.left }}</div>
			<div class="con typing-demo">{{ this.left }}</div>
			<div class="con typing-demo">{{ this.left }}</div>
		</div>
	</div>
</template>

<script>
const speed = 100
const delay = 600
let sleep = ms => new Promise(res => setTimeout(res, ms))

export default {
	props: {
		opacity: Number,
	},
	data() {
		return {
			sentence: 'Aron McGuire Design Director @2023',
			left: '',
			center: '',
			right: '',
		}
	},
	methods: {
		async typing(letters) {
			const letter = letters.split('')
			while (letter.length) {
				await sleep(speed)
				this.left += letter.shift()
			}
		},
	},
	watch: {
		opacity() {
			if (this.left.length == this.sentence.length) {
				this.left = ''
				setTimeout(this.typing(this.sentence), delay)
			}
		},
	},
	mounted() {
		// 초기 실행
		setTimeout(this.typing(this.sentence), delay)
	},
}
</script>

<style>
.home-con {
	display: flex;
	justify-content: space-evenly;
}
.con {
	width: 400px;
	padding-top: 110px;
}
</style>
