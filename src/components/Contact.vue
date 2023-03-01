<template>
	<div ref="target" class="box-snaps large-font">
		<sideMenu />
		<TransitionGroup tag="ul" name="fade" class="container">
			<div @click="clickCopy(item)" v-for="item in items" class="item" :key="item">
				{{ item }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script>
import sideMenu from '@/layout/sideMenu.vue'
import { useToast } from 'vue-toastification'

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
			toast.success(copy + ' copy!')
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
	},
}
</script>

<style>
.large-font {
	font-size: 4.5rem;
}
.container {
	position: relative;
	padding: 0;
}

.item {
	width: 100%;
	margin-bottom: 10px;
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
