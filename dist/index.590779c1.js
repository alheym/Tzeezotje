new Swiper(".swiperText",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:800});function e(e,t){const c=document.querySelector(e),o=document.querySelector(t);c.classList.remove("active"),o.classList.remove("active")}function t(t,c,o){const n=document.querySelectorAll(t),r=document.querySelector(c);n.forEach((e=>{e.addEventListener("click",(()=>function(e,t){const c=document.querySelector(e),o=document.querySelector(t);c.classList.add("active"),o.classList.add("active")}(c,o)))})),r.addEventListener("click",(t=>{""==t.target.getAttribute("data-close")&&e(c,o)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&r.classList.contains("active")&&e(c,o)}))}function c(e,t,c){const o=document.querySelector(e),n=document.querySelector(t),r=document.querySelector(c);o.addEventListener("click",(o=>{!function(e,t,c){const o=document.querySelector(e),n=document.querySelector(t),r=document.querySelector(c);n.classList.toggle("active"),o.classList.toggle("active"),r.classList.toggle("active")}(e,t,c)})),document.addEventListener("click",(e=>{n.classList.contains("active")&&e.target===r&&(n.classList.remove("active"),r.classList.remove("active"),o.classList.remove("active"))}))}window.addEventListener("DOMContentLoaded",(()=>{const o=document.querySelector(".reserve");t("[data-modal]",".modal",".overlay"),c(".hamburger",".navigation",".overlay"),o.submit((function(t){return t.preventDefault(),$.ajax({type:"POST",url:"mailer/smart.php",data:$(this).serialize()}).done((function(){$(this).find("input").val(""),e(".modal",".overlay"),$("form").trigger("reset")})),!1}))}));
//# sourceMappingURL=index.590779c1.js.map
