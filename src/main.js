import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
import MyButton from './components/MyButton.vue'

let container = document.getElementById("my-vue-button-container");
debugger
if (!container) {
  container = document.createElement("div");
  container.id = "my-vue-button-container";
  document.body.appendChild(container);
}

createApp(MyButton).mount(container)
