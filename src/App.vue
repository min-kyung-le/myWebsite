<template>
	<div id="drawing_line">
		<svg class="drawing_line_svg">
			<circle class="drawing_line_circle" cx="0" cy="0" r="4"></circle>
			<polyline class="drawing_line_polyline" points=""></polyline>
		</svg>
		<router-view v-slot="{ Component }">
			<component :is="Component" />
		</router-view>
	</div>
</template>

<script>
var total = 12
var gap = 30
var debounce_removeLine
var debounce_counter = 0

var polyline, polyPoints, circle, circleX, circleY, circleR

var points = []
var pointer = {
	x: window.innerWidth / 2,
	y: window.innerHeight / 2,
	tx: 0,
	ty: 0,
	dist: 0,
	scale: 1,
	speed: 2,
	circRadius: 4,
	updateCrds: function () {
		if (this.x != 0) {
			this.dist = Math.abs(this.x - this.tx + (this.y - this.ty))
			this.scale = Math.max(this.scale + ((100 - this.dist * 8) * 0.01 - this.scale) * 0.1, 0.25) // gt 0.25 = 4px
			this.tx += (this.x - this.tx) / this.speed
			this.ty += (this.y - this.ty) / this.speed
		}
	},
}

export default {
	name: 'App',
	mounted() {
		//마우스 효과
		polyline = document.querySelector('.drawing_line_polyline')
		polyPoints = polyline.getAttribute('points')
		circle = document.querySelector('.drawing_line_circle')
		circleX = circle.getAttribute('cx')
		circleY = circle.getAttribute('cy')
		circleR = circle.getAttribute('r')

		window.addEventListener('mousemove', this.fucMousemove)
		window.addEventListener('mousedown', this.fucMousedown)
		window.addEventListener('mouseup', this.fucMouseup)
	},
	methods: {
		drawLine() {
			pointer.updateCrds()

			points.push({
				x: pointer.tx,
				y: pointer.ty,
			})
			while (points.length > total) {
				points.shift()
				if (points.length > gap) {
					for (var i = 0; i < 5; i++) {
						points.shift()
					}
				}
			}
			var pointsArr = points.map(point => `${point.x},${point.y}`)
			polyPoints = pointsArr.join(' ')
			polyline.setAttribute('points', polyPoints)

			// circle
			circleX = pointer.x
			circleY = pointer.y
			circleR = pointer.scale * pointer.circRadius

			circle.setAttribute('cx', circleX)
			circle.setAttribute('cy', circleY)
			circle.setAttribute('r', circleR)

			if (debounce_counter > 0) {
				debounce_counter--
				requestAnimationFrame(this.drawLine)
			}
		},
		fucMousemove(e) {
			pointer.x = e.clientX
			pointer.y = e.clientY
			debounce_counter = 0
			this.drawLine()

			// debounce
			clearTimeout(debounce_removeLine)
			debounce_removeLine = setTimeout(() => {
				debounce_counter = 12
				this.drawLine()
			}, 80)
		},
		fucMousedown() {
			pointer.circRadius = 2
			this.drawLine()
		},
		fucMouseup() {
			pointer.circRadius = 4
			this.drawLine()
		},
	},
}
</script>

<style></style>
