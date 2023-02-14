<template>
	<div class="large-font">
		<span>{{ contents }}</span>
		<div v-for="item in items" class="item" :key="item">{{ item.num }} : {{ item.title }}</div>
	</div>
</template>

<script>
import axios from 'axios'

const api = '/api'

export default {
	data() {
		return {
			contents: '여기는 홈화면입니다~ 아뭐쓰지',
			items: [],
		}
	},
	mounted() {
		axios.get(api + '/item/test_data').then(res => {
			console.log('성공')
			console.log(res)
			this.items = res.data
		})
	},
}
</script>

<style></style>
