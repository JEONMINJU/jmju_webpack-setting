import {test} from '../js/test';
// import '../scss/app.scss';
import webpackImage from '../images/webpack-test.jpeg';

window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector("#app");

    el.innerHTML = `
        <h1>${test(3,3)}TEST!!!</h1>
        
        <img src="${webpackImage}" alt="webpack" />
    `
})