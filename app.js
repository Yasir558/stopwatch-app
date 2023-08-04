var minisec=0
var sec=0
var min=0

var miniheading=document.getElementById("minisec")
var secheading = document.getElementById("sec")
var minheading = document.getElementById("min")
var interval;

function value(){
minisec++
minheading.innerHTML=minisec

if(minisec >=100){
    sec++
    secheading.innerHTML=sec
    minisec=0
}

else if (sec >=60 ){
    min++
    minheading.innerHTML=min
    sec=0
}


}


function start(x){
    interval=setInterval(value,10)
    x.disabled = true


}

function pause(){

clearInterval(interval)
var button= document.getElementById("btn")
button.disabled=false


}


function reset(){

minisec=0
sec=0
min=0

minheading.innerHTML=minisec
secheading.innerHTML=sec
minheading.innerHTML=min





pause()







}



