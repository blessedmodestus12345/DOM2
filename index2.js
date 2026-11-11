 let buttons = document.querySelectorAll(".hide-btn");
 let buttons2 = document.querySelectorAll(".hide-btn2");
 let parag = document.querySelectorAll(".pg");
 let text = document.querySelectorAll(".text");


buttons.forEach(function (button,index) {

    button.addEventListener("click", function(){
        if(text[index].style.display === "none") {
            text[index].style.display = "block"
            buttons.textContent = "Hide";
        }else{
            text[index].style.display = "none";
             buttons[index].textContent = "Show";
        }      
    })
})
buttons2.forEach(function(button2, index2){
  button2.addEventListener("click", function(){
    parag[index2].textContent = "I was chnaged via Javascrpt";
  })
})
