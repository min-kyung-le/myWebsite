<template>
	<div class="large-font">
		<TransitionGroup tag="ul" name="fade" class="container">
			<div v-for="item in items" class="item" :key="item">
				{{ item }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script>
const name = 'MinKyung Lee',
	email = 'minkyung1435@gmail.com',
	blog = 'BLOG LINK',
	createDate = 'Made 2023'

var getInitialItems = () => [name, email, blog, createDate]

export default {
	name: 'Contact',
	data() {
		return {
			items: getInitialItems(),
		}
	},
	methods: {
		reset() {
			this.items = getInitialItems()
		},
		movedata() {
			this.items = [blog, name, createDate, email]
		},
	},
	mounted() {
		setTimeout(() => {
			this.movedata()
		}, 800)
		setTimeout(() => {
			this.reset()
		}, 1500)
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
