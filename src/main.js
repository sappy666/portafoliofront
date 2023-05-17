import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// /* Bootstrap CSS , JS*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'


// /* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* import specific icons */
// import { fas } from '@fortawesome/free-solid-svg-icons'

// /* add icons to the library */
// library.add(fas)

createApp(App).use(store).use(router).mount('#app')
