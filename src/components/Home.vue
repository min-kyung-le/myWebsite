<template>
	<div ref="target" class="large-font">
		<div class="holster">
			<div class="box-snaps-wrap">
				<perfect-scrollbar>
					<div ref="app1" class="home-con box-snaps">
						<div class="con typing-demo">{{ this.left }}</div>
						<div class="con typing-demo">{{ this.left }}</div>
						<div class="con typing-demo">{{ this.left }}</div>
					</div>
					<Home2 ref="app2"></Home2>
					<Home3 ref="app3"></Home3>
					<Home4 ref="app4"></Home4>
				</perfect-scrollbar>
			</div>
		</div>
	</div>
</template>

<script>
const speed = 100
const delay = 600
let sleep = ms => new Promise(res => setTimeout(res, ms))

import Home2 from '@/components/Home2.vue'
import Home3 from '@/components/Home3.vue'
import Home4 from '@/components/Home4.vue'
export default {
	components: {
		Home2,
		Home3,
		Home4,
	},
	data() {
		return {
			sentence: 'Aron McGuire Design Director @2023',
			left: '',
			center: '',
			right: '',
			opacity: 0,
			setOpacity: 0,
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
		// 섹션마다 스크롤

		this.$nextTick(() => {
			let observer = new IntersectionObserver(e => {
				e.forEach(div => {
					if (div.isIntersecting) {
						this.setOpacity = 1
						div.target.style.opacity = this.setOpacity
					} else {
						this.setOpacity = 0
						div.target.style.opacity = this.setOpacity
					}
					this.opacity = this.setOpacity
				})
			})
			observer.observe(this.$refs.app1)
			observer.observe(this.$refs.app2.$refs.target)
			observer.observe(this.$refs.app3.$refs.target)
			observer.observe(this.$refs.app4.$refs.target)
		})
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
