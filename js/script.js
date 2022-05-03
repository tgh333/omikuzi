"use strict";

const changeBtnTxt = () => {
    const $btnTxt = document.querySelector(".js-btn-txt");
    const $btn = document.querySelector(".js-btn");
    $btn.addEventListener("click", () => {
        if($btnTxt.innerText == "PUSH!!") {
            $btnTxt.innerText = "STOP!!";
        } else {
            $btnTxt.innerText = "PUSH!!";
        }    
    });    
}
changeBtnTxt();