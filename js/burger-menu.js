import{toggleClasses}from"./util.js";const burgerButton=document.querySelector(".main-header__menu-toggler"),navigation=document.querySelector(".main-header__nav-wrapper"),initBurgerButton=()=>{burgerButton?.addEventListener("click",(()=>{toggleClasses(burgerButton,"main-header__menu-toggler--burger","main-header__menu-toggler--cross"),toggleClasses(navigation,"main-header__nav-wrapper--closed","main-header__nav-wrapper--opened")}))};export{initBurgerButton};