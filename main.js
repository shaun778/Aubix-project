let tabs = document.querySelector(".tabs");
let tabHeader = tabs.querySelector(".tab-header");
let tabBody = tabs.querySelector(".tab-body");
let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

for(let i=0;i<tabHeaderNodes.length;i++){
    tabHeaderNodes[i].addEventListener("click",function(){
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderNodes[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyNodes[i].classList.add("active");
    });
}
let tabs02 = document.querySelector(".tabs02");
let tabHeader02 = tabs02.querySelector(".tab-header02");
let tabBody02 = tabs02.querySelector(".tab-body02");
let tabHeader02Nodes = tabs02.querySelectorAll(".tab-header02 > div");
let tabBody02Nodes = tabs02.querySelectorAll(".tab-body02 > div");

for(let i=0;i<tabHeader02Nodes.length;i++){
    tabHeader02Nodes[i].addEventListener("click",function(){
    tabHeader02.querySelector(".active02").classList.remove("active02");
    tabHeader02Nodes[i].classList.add("active02");
    tabBody02.querySelector(".active02").classList.remove("active02");
    tabBody02Nodes[i].classList.add("active02");
    });
}