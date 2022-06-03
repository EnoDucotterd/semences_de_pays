var buttonhistory = document.querySelector(".more-contact")
var documentation1 = document.querySelector(".location")
var open = function(){
  documentation1.classList.toggle("is-open")
}
buttonhistory.addEventListener("click",open)