let buttonLength = document.querySelectorAll(".drum")

for(let i=0; i<buttonLength.length; i++)
{
    buttonLength[i].addEventListener("click", function(){
        // let audio = new Audio("sounds/tom-1.mp3")
        // audio.play();
        this.style.color = "white"
    });

}   
// let i=0;

// document.querySelectorAll("button").addEventListener("click", function (){
//     alert("I got clicked")
// });
