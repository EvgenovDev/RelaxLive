(()=>{"use strict";const e=({classPopup:e,otherItemsClass:t,activeClass:o,closeClass:l,modalClass:r})=>{const s=document.querySelector(`.${e}`),a=document.querySelectorAll(`.${t}`);try{if(!s||!a.length)throw Error("Классы переданы неверно,либо не существуют");a.forEach((e=>{e.addEventListener("click",(e=>{s.classList.add(o)}))})),s.addEventListener("click",(e=>{!e.target.classList.contains(l)&&e.target.closest(`.${r}`)||s.classList.remove(o)}))}catch(e){console.log(e.message)}};((e,t)=>{const o=document.querySelectorAll(".header-contacts__phone-number"),l=document.querySelector(".header-contacts__arrow");try{if(!o.length||!l)throw Error("Классы телефона или стрелки переданы не верно");l.addEventListener("click",(e=>{o[1].classList.toggle("header-contacts__phone-number-accord--active"),l.classList.toggle("header-accord-arrow-active")}))}catch(e){console.log(e.message)}})(),(e=>{const t=document.querySelector(`.${e}`),o=document.querySelector(".popup-dialog-menu"),l=document.querySelector(".menu__icon"),r=(e,t)=>{let o=t(e);document.getElementById(o).scrollIntoView({behavior:"smooth"})},s=e=>{let t=e.getAttribute("href");return t.slice(1,t.length)};document.addEventListener("click",(e=>{var t;e.target.closest(".button-footer")&&(e.preventDefault(),r(e.target,s),o.classList.contains("popup-menu-dialog--active--big")&&o.classList.remove("popup-menu-dialog--active--big")),t=e,document.documentElement.clientWidth>576&&t.target===l?o.classList.add("popup-menu-dialog--active--big"):document.documentElement.clientWidth<576&&t.target===l&&o.classList.add("popup-menu-dialog--active--small")})),t.addEventListener("click",(e=>{(e.target.classList.contains("close-menu")||!e.target.closest(".popup-menu-main")||e.target.classList.contains("menu-link"))&&document.documentElement.clientWidth>576?(o.classList.remove("popup-menu-dialog--active--big"),e.target.classList.contains("menu-link")&&!e.target.classList.contains("no-overflow")&&(e.preventDefault(),r(e.target,s))):(e.target.classList.contains("close-menu")||!e.target.closest(".popup-menu-main")||e.target.classList.contains("menu-link"))&&document.documentElement.clientWidth<576&&(o.classList.remove("popup-menu-dialog--active--small"),e.target.classList.contains("menu-link")&&!e.target.classList.contains("no-overflow")&&(e.preventDefault(),r(e.target,s)))}))})("popup-menu"),(e=>{const t=document.querySelectorAll(`.${e}>input`),o=document.querySelectorAll("form>label>.feedback-block__form-input_phone");function l(e){let t="+7 (___) ___-__-__",o=0,l=t.replace(/\D/g,""),r=this.value.replace(/\D/g,"");l.length>=r.length&&(r=l),this.value=t.replace(/./g,(function(e){return/[_\d]/.test(e)&&o<r.length?r.charAt(o++):o>=r.length?"":e})),"blur"==e.type?2==this.value.length&&(this.value=""):function(e,t){if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){let o=t.createTextRange();o.collapse(!0),o.moveEnd("character",e),o.moveStart("character",e),o.select()}}(this.value.length,this)}try{if(!t.length||!o.length)throw Error("Блоков с телефонами не существует");t.forEach((e=>{e.setAttribute("placeholder","+7 (___) ___-__-__"),e.addEventListener("input",l,!1),e.addEventListener("focus",l,!1),e.addEventListener("blur",l,!1)})),o.forEach((e=>{e.setAttribute("placeholder","+7 (___) ___-__-__"),e.addEventListener("input",l,!1),e.addEventListener("focus",l,!1),e.addEventListener("blur",l,!1)}))}catch(e){console.log(e.message)}})("feedback__input"),(e=>{const t=document.querySelectorAll("form");try{if(!t)throw Error("Ни одной формы не существует");t.forEach((o=>{let l=o.querySelector(".checkbox__input");const r=o.querySelector(".checkbox__label");o.addEventListener("click",(s=>{if(s.target==r)r.classList.contains("fail__checkbox")&&r.classList.remove("fail__checkbox");else if(s.target==o.querySelectorAll("input")[0])o.querySelectorAll("input")[0].classList.remove("fail__input");else if(s.target==o.querySelectorAll("input")[1])o.querySelectorAll("input")[1].classList.remove("fail__input");else if(s.target==o.querySelector("button")){s.preventDefault();let r=(e=>{let t=!1;if(e.classList.contains("feedback__form"))return!(""==e.querySelector("input").value&&e.querySelector("input").value.length<18)&&{tel:e.querySelector("input").value};if(e.classList.contains("feedback-block__form")){for(let o=0;o<e.querySelectorAll("input").length;o++)""==e.querySelectorAll("input")[o]&&(e.querySelectorAll("input")[o].classList.add("fail__input"),t=!0),e.querySelectorAll("input")[1].value.length<18&&(e.querySelectorAll("input")[1].classList.add("fail__input"),t=!0),e.querySelectorAll("input")[0].value.length<2&&(e.querySelectorAll("input")[0].classList.add("fail__input"),t=!0);return!t&&{name:e.querySelectorAll("input")[0].value,tel:e.querySelectorAll("input")[1].value}}})(o);l.checked&&r?(({data:o,url:l,method:r,header:s})=>{fetch(l,{method:r,headers:s,body:JSON.stringify(o)}).then((e=>e.json())).then((e=>{console.log(e)})).then((()=>{(e=>{const t=document.querySelector(`.${e}`);try{if(!t)throw Error("Неправильный класс модалки спасибо");t.classList.add("popup-thank--active")}catch(e){console.log(e.message)}})(e)})).then((()=>{setTimeout((()=>{document.querySelector(`.${e}`).classList.remove("popup-thank--active")}),3e3)})).then((()=>{t.forEach((e=>{e.querySelectorAll("input").forEach((e=>{e.value=""}))})),document.querySelectorAll(".checkbox>input").forEach((e=>{e.checked=!1}))})).catch((e=>{console.log(e.message)}))})({data:r,method:"POST",header:{"Content-Type":"application/json;charset=utf-8"},url:"https://jsonplaceholder.typicode.com/posts"}):o.querySelectorAll(".checkbox__label").forEach((e=>{e.classList.add("fail__checkbox")}))}}))}))}catch(e){console.log(e.message)}})("popup-thank"),e({classPopup:"popup-consultation",otherItemsClass:"button_wide",activeClass:"popup-consultation--active",closeClass:"close-consultation",modalClass:"feedback-wrap"}),e({classPopup:"popup-privacy",otherItemsClass:"link-privacy",activeClass:"popup-privacy--active",closeClass:"close-privacy",modalClass:"popup-dialog-privacy"}),e({classPopup:"popup-repair-types",otherItemsClass:"no-overflow",activeClass:"popup-repair-types--active",closeClass:"close",modalClass:"popup-dialog-repair-types"}),e({classPopup:"popup-repair-types",otherItemsClass:"link-list-repair",activeClass:"popup-repair-types--active",closeClass:"close",modalClass:"popup-dialog-repair-types"}),e({classPopup:"popup-portfolio",otherItemsClass:"portfolio-slider__slide-frame",activeClass:"popup-portfolio--active",closeClass:"close",modalClass:"popup-dialog-portfolio"}),(()=>{const e=e=>{document.querySelector(e).innerHTML=""};(()=>{const t=document.querySelector(".popup-repair-types-content-table"),o=t.querySelector(".popup-repair-types-content-table__list"),l=document.querySelectorAll(".popup-repair-types-nav__item")[1],r=t.querySelectorAll("tbody>.mobile-row")[1];document.addEventListener("click",(s=>{(s.target.classList.contains("no-overflow")||s.target==document.querySelectorAll(".link-list-repair>a")[1])&&document.querySelector(".popup-repair-types--active")&&(e(".nav-list-popup-repair"),("http://localhost:3000/api/items",fetch("http://localhost:3000/api/items")).then((e=>e.json())).then((s=>{let a=[];if(s[0]){let e=s[0].name;a=s.filter((t=>{if(t.type!=e)return e=t.type,t.type}))}(({array:e,button:t,parentClass:o})=>{let l=document.querySelector(o);try{if(!e.length)throw Error("Данные с сервера получены не верно, либо данных нет");for(let o=0;o<e.length;o++){const r=t.cloneNode(!0);r.textContent=e[o].type,l.append(r)}}catch(e){console.log(e.message)}})({array:a,button:l,parentClass:".nav-list-popup-repair"}),(({data:t,parentTable:o,table:l,tr:r})=>{try{t.forEach((e=>{if("Потолок: Демонтажные работы"==t.type){let t=r.cloneNode(!0),o=l.cloneNode();t.querySelector(".repair-types-name").textContent=e.name,t.querySelectorAll(".repair-types-value")[0].textContent=e.units,t.querySelectorAll(".repair-types-value")[1].textContent=`${e.cost}руб.`,o.append(t)}})),document.querySelectorAll(".popup-repair-types-nav__item").forEach((s=>{s.addEventListener("click",(a=>{document.getElementById("switch-inner").textContent=s.textContent,e(".popup-repair-types-content-table");let c=l.cloneNode();o.append(c),t.forEach((e=>{if(s.textContent==e.type){let t=r.cloneNode(!0);t.querySelector(".repair-types-name").textContent=e.name,t.querySelectorAll(".repair-types-value")[0].textContent=e.units,t.querySelectorAll(".repair-types-value")[1].textContent=`${e.cost}руб.`,c.append(t)}}))}))}))}catch(e){console.log(e.message)}})({data:s,table:o,tr:r,parentTable:t})})).catch((e=>console.log(e.message))))}))})()})(),(e=>{const t=document.querySelector(`.${e}`),o=t.querySelectorAll(".slider-arrow"),l=t.querySelectorAll(".portfolio-slider__slide");let r=t.querySelector(".portfolio-slider"),s=0;try{function e(e,t){let o=!1;return function(){o||(e.apply(this,arguments),o=!0,setTimeout((()=>{o=!1}),t))}}function a(){t.querySelectorAll(".portfolio-slider__slide").forEach((e=>{e.classList.contains("portfolio-slide--active")&&e.classList.remove("portfolio-slide--active")})),s++,document.documentElement.clientWidth>1024?(0!=s&&2!=s&&(document.getElementById("portfolio-arrow_right").classList.contains("arrow-hidden")&&document.getElementById("portfolio-arrow_right").classList.remove("arrow-hidden"),document.getElementById("portfolio-arrow_left").classList.contains("arrow-hidden")&&document.getElementById("portfolio-arrow_left").classList.remove("arrow-hidden")),2===s&&document.getElementById("portfolio-arrow_right").classList.add("arrow-hidden"),setTimeout((()=>{r.innerHTML="",r.append(l[s]),r.append(l[s+1]),r.append(l[s+2]),r.querySelectorAll(".portfolio-slider__slide").forEach((e=>{e.classList.add("portfolio-slide--active")}))}),1e3)):document.documentElement.clientWidth>575&&document.documentElement.clientWidth<=1024&&(0!=s&&3!=s&&(document.getElementById("portfolio-arrow_right").classList.contains("arrow-hidden")&&document.getElementById("portfolio-arrow_right").classList.remove("arrow-hidden"),document.getElementById("portfolio-arrow_left").classList.contains("arrow-hidden")&&document.getElementById("portfolio-arrow_left").classList.remove("arrow-hidden")),3===s&&document.getElementById("portfolio-arrow_right").classList.add("arrow-hidden"),setTimeout((()=>{r.innerHTML="",r.append(l[s]),r.append(l[s+1]),r.querySelectorAll(".portfolio-slider__slide").forEach((e=>{e.classList.add("portfolio-slide--active")}))}),1e3))}function c(){t.querySelectorAll(".portfolio-slider__slide").forEach((e=>{e.classList.contains("portfolio-slide--active")&&e.classList.remove("portfolio-slide--active")})),s--,document.documentElement.clientWidth>1024?(0!=s&&2!=s&&(document.getElementById("portfolio-arrow_right").classList.contains("arrow-hidden")&&document.getElementById("portfolio-arrow_right").classList.remove("arrow-hidden"),document.getElementById("portfolio-arrow_left").classList.contains("arrow-hidden")&&document.getElementById("portfolio-arrow_left").classList.remove("arrow-hidden")),0===s&&document.getElementById("portfolio-arrow_left").classList.add("arrow-hidden"),setTimeout((()=>{r.innerHTML="",r.append(l[s]),r.append(l[s+1]),r.append(l[s+2]),r.querySelectorAll(".portfolio-slider__slide").forEach((e=>{e.classList.add("portfolio-slide--active")}))}),1e3)):document.documentElement.clientWidth>575&&document.documentElement.clientWidth<=1024&&(0!=s&&3!=s&&(document.getElementById("portfolio-arrow_right").classList.contains("arrow-hidden")&&document.getElementById("portfolio-arrow_right").classList.remove("arrow-hidden"),document.getElementById("portfolio-arrow_left").classList.contains("arrow-hidden")&&document.getElementById("portfolio-arrow_left").classList.remove("arrow-hidden")),0===s&&document.getElementById("portfolio-arrow_left").classList.add("arrow-hidden"),setTimeout((()=>{r.innerHTML="",r.append(l[s]),r.append(l[s+1]),r.querySelectorAll(".portfolio-slider__slide").forEach((e=>{e.classList.add("portfolio-slide--active")}))}),1e3))}if(!t)throw Error("Класс слайдера передан не верно");a=e(a,2e3),c=e(c,2e3),o.forEach((e=>{e.addEventListener("click",(e=>{e.target.closest(".slider-arrow_right-portfolio")?a():e.target.closest(".slider-arrow_left-portfolio")&&c()}))}))}catch(e){console.log(e.message)}})("portfolio-slider-wrap"),(({elemsClass:e,activeClass:t})=>{document.querySelectorAll(`.${e}`).forEach((o=>{o.addEventListener("click",(o=>{o.target.closest(`.${e}`)&&!o.target.classList.contains(t)?o.target.classList.add(t):o.target.classList.remove(t)}))}))})({elemsClass:"accordion>ul>li",activeClass:"msg-active"})})();