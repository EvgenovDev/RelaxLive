(()=>{"use strict";((e,t)=>{const n=document.querySelectorAll(".header-contacts__phone-number"),c=document.querySelector(".header-contacts__arrow");try{if(!n.length||!c)throw Error("Классы телефона или стрелки переданы не верно");c.addEventListener("click",(e=>{n[1].classList.toggle("header-contacts__phone-number-accord--active"),c.classList.toggle("header-accord-arrow-active")}))}catch(e){console.log(e.message)}})(),(e=>{const t=document.querySelector(`.${e}`),n=document.querySelector(".popup-dialog-menu"),c=document.querySelector(".menu__icon"),o=(e,t)=>{let n=t(e);document.getElementById(n).scrollIntoView({behavior:"smooth"})},a=e=>{let t=e.getAttribute("href");return t.slice(1,t.length)};document.addEventListener("click",(e=>{var t;e.target.closest(".button-footer")&&(e.preventDefault(),o(e.target,a),n.classList.contains("popup-menu-dialog--active--big")&&n.classList.remove("popup-menu-dialog--active--big")),t=e,document.documentElement.clientWidth>576&&t.target===c?n.classList.add("popup-menu-dialog--active--big"):document.documentElement.clientWidth<576&&t.target===c&&n.classList.add("popup-menu-dialog--active--small")})),t.addEventListener("click",(e=>{(e.target.classList.contains("close-menu")||!e.target.closest(".popup-menu-main")||e.target.classList.contains("menu-link"))&&document.documentElement.clientWidth>576?(n.classList.remove("popup-menu-dialog--active--big"),e.target.classList.contains("menu-link")&&(e.preventDefault(),o(e.target,a))):(e.target.classList.contains("close-menu")||!e.target.closest(".popup-menu-main")||e.target.classList.contains("menu-link"))&&document.documentElement.clientWidth<576&&(n.classList.remove("popup-menu-dialog--active--small"),e.target.classList.contains("menu-link")&&(e.preventDefault(),o(e.target,a)))}))})("popup-menu"),(e=>{const t=document.querySelectorAll(`.${e}>input`);try{if(!t.length)throw Error("Блоков с телефонами не существует");t.forEach((e=>{e.setAttribute("placeholder","+7 (ddd) ddd-dd-dd"),e.addEventListener("focus",(t=>{e.value="+7 ("})),e.addEventListener("input",(t=>{e.value="+7 ("+e.value.replace(/[^\d]/gi,"")}))}))}catch(e){console.log(e.message)}})("feedback__input")})();