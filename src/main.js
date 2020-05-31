import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDsSE5flX1DhIWXhe9snHOH4lK8URUmc3I",
  authDomain: "springboard-d1cfd.firebaseapp.com",
  databaseURL: "https://springboard-d1cfd.firebaseio.com",
  projectId: "springboard-d1cfd",
  storageBucket: "springboard-d1cfd.appspot.com",
  messagingSenderId: "31207559694",
  appId: "1:31207559694:web:d19828863ee6eb6b10e25f",
  measurementId: "G-V8LGGSGYY6"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
