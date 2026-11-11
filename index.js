 let buttons = document.querySelectorAll(".hide-btn");
 let buttons2 = document.querySelectorAll(".hide-btn2");
 let parag = document.querySelectorAll(".pg");
 let text = document.querySelectorAll(".text");


buttons.forEach(function (button,index) {

    button.addEventListener("click", function(){
        if(text[index].style.display === "none"){
            text[index].style.display = "block";
        }else{
            text[index].style.display = "none";
        }
        
    })
})

