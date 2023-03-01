import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router'
import VueGoodTablePlugin from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import VueClipboard from 'vue-clipboard2'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
	position: 'top-center',
	timeout: 2000,
	closeOnClick: true,
	pauseOnFocusLoss: true,
	pauseOnHover: false,
	draggable: true,
	draggablePercent: 0.6,
	showCloseButtonOnHover: true,
	hideProgressBar: true,
	closeButton: 'button',
	icon: true,
	rtl: false,
	transition: 'Vue-Toastification__fade',
	maxToasts: 16,
	newestOnTop: true,
}

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(VueGoodTablePlugin)
app.use(VueClipboard)
app.use(Toast, options)
