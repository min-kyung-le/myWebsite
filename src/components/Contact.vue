<template>
	<div ref="target" class="box-snaps f-l">
		<sideMenu />
		<TransitionGroup tag="ul" name="fade" id="container" class="container">
			<div v-for="(item, idx) of items" class="item" :key="item">
				<a :id="'item' + idx" :data-replace="item" @click="clickCopy(item)"
					><span>{{ item }}</span></a
				>
			</div>
		</TransitionGroup>
		<span class="tooltip f-s">click!</span>
	</div>
</template>

<script>
import sideMenu from '@/layout/sideMenu.vue'
import { useToast } from 'vue-toastification'
import { gsap } from 'gsap'

const name = 'MinKyung Lee',
	email = 'minkyung1435@gmail.com',
	blog = 'https://blog.naver.com/iminlv752',
	createDate = '01073190067'

var getInitialItems = () => [name, email, blog, createDate]

export default {
	name: 'Contact',
	components: {
		sideMenu,
	},
	data() {
		return {
			items: getInitialItems(),
		}
	},
	methods: {
		clickCopy(copy) {
			const toast = useToast()
			if (copy.indexOf('blog') > -1) {
				window.open(copy, '', '_blank')
			} else {
				this.$copyText(copy)
				toast.success(copy + ' copy!')
			}
		},
		reset() {
			this.items = getInitialItems()
		},
		movedata() {
			this.items = [email, createDate, name, blog]
		},
		setTimeOutMove() {
			setTimeout(() => {
				this.movedata()
			}, 800)
			setTimeout(() => {
				this.reset()
			}, 1500)
		},
	},
	mounted() {
		this.setTimeOutMove()
		window.addEventListener('mousemove', e => {
			gsap.to('.tooltip', {
				opacity: 0,
				duration: 0.2,
				x: e.clientX + 5 + 'px',
				y: e.clientY + 5 + 'px',
				stagger: 0.15,
				ease: 'none',
			})
		})

		document.getElementById('container').addEventListener('mouseover', () => {
			gsap.to('.tooltip', {
				opacity: 1,
			})
		})
		document.getElementById('container').addEventListener('mouseout', () => {
			gsap.to('.tooltip', {
				opacity: 0,
			})
		})
	},
}
</script>

<style>
.tooltip {
	opacity: 0;
	position: absolute;
	top: 0;
	left: 0;
	padding: 4px 12px;
	color: var(--black);
	background-color: var(--light1);
	z-index: 1000;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-content: center;
	font-weight: 600;
}
.container {
	position: relative;
	padding: 0;
}

.item {
	width: 100%;
	margin-bottom: 18px;
	height: 80px;
}

a {
	overflow: hidden;
	position: relative;
	display: inline-block;
}

a::before,
a::after {
	content: '';
	position: absolute;
	width: 100%;
	left: 0;
}
a::before {
	height: 2px;
	bottom: 0;
	transform-origin: 100% 50%;
	transform: scaleY(0);
	transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}
a::after {
	content: attr(data-replace);
	height: 100%;
	top: 0;
	transform-origin: 100% 50%;
	transform: translate3d(0, 200%, 0);
	transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover::before {
	transform-origin: 0% 50%;
	transform: scaleY(1);
}
a:hover::after {
	transform: translate3d(0, 0, 0);
}

a span {
	display: inline-block;
	transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}

a:hover span {
	transform: translate3d(0, -200%, 0);
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
	position: absolute;
}
</style>
