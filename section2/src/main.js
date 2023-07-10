import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

app.provide('app-message', 'app message 입니다.');
// 모든 컴포넌트에서 접근하고 싶은 객체를 넣을때
app.config.globalProperties.msg = 'hello';
app.provide('msg', 'hello msg');
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
