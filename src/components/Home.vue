<template>
	<div ref="target" class="large-font box-snaps">
		<div class="home-con">
			<div ref="l1" class="con typing-demo">{{ this.left }}</div>
			<div class="con typing-demo">{{ this.center }}</div>
			<div class="con typing-demo">{{ this.right }}</div>
		</div>
	</div>
</template>

<script>
let letters = `Aron
			McGuire
			Design
			Director
			@2023`

// 글자 입력 속도
const speed = 100
let i = 0
let l1Text

// 타이핑 효과
const typing = async () => {
	const letter = letters[i].split('')

	while (letter.length) {
		await wait(speed)
		l1Text.innerHTML += letter.shift()
	}

	// 잠시 대기
	await wait(800)

	// 지우는 효과
	remove()
}

// 글자 지우는 효과
const remove = async () => {
	const letter = letters[i].split('')

	while (letter.length) {
		await wait(speed)

		letter.pop()
		l1Text.innerHTML = letter.join('')
	}

	// 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
	i = !letters[i + 1] ? 0 : i + 1
	typing()
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
	return new Promise(res => setTimeout(res, ms))
}

export default {
	data() {
		return {}
	},
	computed: {
		left() {
			return letters
		},
		center() {
			let data = `Aron
			McGuire
			Design
			Director
			@2023`
			return data
		},
		right() {
			let data = `Aron
			McGuire
			Design
			Director
			@2023`
			return data
		},
	},
	mounted() {
		l1Text = this.$refs.l1
		// 초기 실행
		setTimeout(typing, 1500)
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
