import './app.css'
import AppNico from './Nico.svelte'

const app = new AppNico({
  target: document.getElementById('app')
})

export default app
