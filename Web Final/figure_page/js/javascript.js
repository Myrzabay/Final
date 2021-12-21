

var te = 0;
function pluse(){
    te += 1;
    document.getElementById("number").value = te;
}
function minuse(){
    if(te != 0){
    te -= 1;
    document.getElementById("number").value = te;
    }
}
function show(){
    document.querySelector(".black-panel").classList.add("show-panel");
    document.querySelector(".images-box").classList.add("show");
    document.body.style="overflow-y: hidden;";
}
function closee(){
    document.querySelector(".black-panel").classList.remove("show-panel");
    document.querySelector(".images-box").classList.remove("show");
    document.body.style="";
}

function showcart(){
   
    document.querySelector(".cart-box").classList.add("show");
    document.querySelector(".none-panel").style="visibility: unset;";
    document.querySelector(".cart").onclick = function(){closecart()};
    
}
function closecart(){
   
    document.querySelector(".cart-box").classList.remove("show");
    document.querySelector(".cart").onclick = function(){showcart()};
    document.querySelector(".none-panel").style="";
}

function open_nav(){
    document.querySelector(".menu-left").classList.add("open-nav");
    document.querySelector(".dark-panel-2").classList.add("show");
    document.body.style="overflow-y: hidden;";
}
function close_nav(){
    document.querySelector(".menu-left").classList.remove("open-nav");
    document.querySelector(".dark-panel-2").classList.remove("show");
    document.body.style="";
}
var mahsol = {
    aks:1,tedad:0
};




function AddToCart(){
    var tedad_input = document.getElementById("number").value;
    if(tedad_input != 0){
    mahsol.tedad += Number(tedad_input);
te = 0;
    document.getElementById("number").value = te;
    document.querySelector(".sms").classList.add("ani");
function remove(){
    document.querySelector(".sms").classList.remove("ani");
}
    setTimeout(remove,4000);
}
}
function del(){
    mahsol.tedad -= 1;
}
let check = ()=>{
if(mahsol.tedad == 0){
    document.querySelector(".cart-empty").classList.remove("display-none");
    document.getElementById("boz-1").classList.add("display-none");
    document.querySelector(".show-tedad-top-cart").innerHTML = ""
    
}
else if(mahsol.tedad > 0){
    document.querySelector(".cart-empty").classList.add("display-none");
    document.getElementById("boz-1").classList.remove("display-none");
    document.getElementById("tedad-m").innerHTML = mahsol.tedad;
    document.querySelector(".sun-je").innerHTML = (10000 * mahsol.tedad) +'.00';
    document.querySelector(".show-tedad-top-cart").innerHTML = mahsol.tedad;
    
}
}
setInterval(check,100);
