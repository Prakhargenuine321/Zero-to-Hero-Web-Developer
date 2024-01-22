var btn = document.querySelector("button");
var a = document.querySelector(".nav");
var flag = 0;
btn.addEventListener("click" , function(){
    if(flag==0){
        a.style.backgroundColor = "black";
        flag = 1;
    }
    else{
        a.style.backgroundColor = "var(--primary-color)";
        flag = 0;
    }
})

var home = document.querySelector(".home");
home.addEventListener("mouseover" , function(){
    home.style.backgroundColor = "black",
    home.style.color = "white"
})
home.addEventListener("mouseout" , function(){
    home.style.backgroundColor = "#fff",
    home.style.color = "black"
})
home.addEventListener("mouseover" , function(){
    btn.style.backgroundColor = "green",
    btn.style.color = "white"
})
home.addEventListener("mouseout" , function(){
    btn.style.backgroundColor = "rgb(117, 195, 251)",
    btn.style.color = "rgb(23, 70, 146)"
})