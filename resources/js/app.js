// window.Vue = require('vue');
require("./bootstrap");
import Vue from "vue";
import router from "./routes/index";
import App from "./components/App.vue";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import Axios from 'axios';

Axios.defaults.baseURL = "http://localhost:8000/api"

const app = new Vue({
    el: "#app",
    components: {
        App
    },
    router
});