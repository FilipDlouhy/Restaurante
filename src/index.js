import loadMenu from './modules/menu';
import loadHome from './modules/home';

import loadContact from './modules/contact';
let homeBTN  = document.getElementById("home");
homeBTN.addEventListener("click",loadHome);
let menuBTN  = document.getElementById("menu");
menuBTN.addEventListener("click",loadMenu);
let contactBTN  = document.getElementById("contact");
contactBTN.addEventListener("click",loadContact);