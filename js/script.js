"use strict";

const changeBtnTxt = () => {
    const $btnTxt = document.querySelector(".js-btn-txt");
    const $btn = document.querySelector(".js-btn");
    const fortune = document.querySelector(".fortune");
    let array = ["大吉","中吉","吉","小吉","末吉","凶","大凶"];
    $btn.addEventListener("click", () => {
        if($btnTxt.innerText == "PUSH!!") {
            $btnTxt.innerText = "RETURN";
            let result = Math.floor(Math.random() * array.length);
            fortune.textContent = array[result];
        } else {
            $btnTxt.innerText = "PUSH!!";
            fortune.textContent = "あなたの運勢は？";
        }  
    });    
}
changeBtnTxt();