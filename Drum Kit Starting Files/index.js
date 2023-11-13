let buttonLength = document.querySelectorAll(".drum")

for(let i=0; i<buttonLength.length; i++)
{
    buttonLength[i].addEventListener("click", function(){
        alert("I got licked");
    });

}   
// let i=0;

// document.querySelectorAll("button").addEventListener("click", function (){
//     alert("I got clicked")
// });
