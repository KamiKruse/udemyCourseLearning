function refreshPage()
{
    window.location.reload();  
}

let myDiv = document.querySelector("#p1")
let secondDiv = document.querySelector("#p2")

let one = myDiv.querySelectorAll(".top-left, .top-center, .top-right, .center-left, .center-right, .bottom-left, .bottom-right, .bottom-center")

let oneP2 = secondDiv.querySelectorAll(".top-left, .top-center, .top-right, .center-left, .center-right, .bottom-left, .bottom-right, .bottom-center")

let two = myDiv.querySelectorAll(".top-left, .top-center, .center-left, .center, .center-right, .bottom-right, .bottom-center")

let twoP2 = secondDiv.querySelectorAll(".top-left, .top-center, .center-left, .center, .center-right, .bottom-right, .bottom-center")

let three = myDiv.querySelectorAll(".top-left, .top-center, .center-left, .center-right, .bottom-right, .bottom-center")

let threeP2 = secondDiv.querySelectorAll(".top-left, .top-center, .center-left, .center-right, .bottom-right, .bottom-center")

let four = myDiv.querySelectorAll(".top-center, .center-left, .center, .center-right, .bottom-center")

let fourP2 = secondDiv.querySelectorAll(".top-center, .center-left, .center, .center-right, .bottom-center")

let five = myDiv.querySelectorAll(".top-center, .center-left, .center-right, .bottom-center")

let fiveP2 = secondDiv.querySelectorAll(".top-center, .center-left, .center-right, .bottom-center")

let six = myDiv.querySelectorAll(" .top-center, .center, .bottom-center")

let sixP2 = secondDiv.querySelectorAll(" .top-center, .center, .bottom-center")

function rolldiceP1()
{

pOneDieRoll = Math.floor(Math.random() * 6)+1;
sessionStorage.setItem('pOneDieRoll', pOneDieRoll);
pOneDieRoll = parseInt(pOneDieRoll); 
console.log(pOneDieRoll);

   
   if(pOneDieRoll === 1)
   {
    one.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   else if(pOneDieRoll === 2)
   {
    two.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   else if(pOneDieRoll === 3)
   {
    three.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   else if(pOneDieRoll === 4)
   {
    four.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   else if(pOneDieRoll === 5)
   {
    five.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   else if(pOneDieRoll === 6)
   {
    six.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   return pOneDieRoll;
}

function rolldiceP2()
{
    pTwoDieRoll = Math.floor(Math.random() * 6)+1;
    sessionStorage.setItem('pTwoDieRoll', pTwoDieRoll);
    pTwoDieRoll = parseInt(pTwoDieRoll);  
    console.log(pTwoDieRoll);
    if(pTwoDieRoll === 1)
   {
    oneP2.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   else if(pTwoDieRoll === 2)
   {
    twoP2.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   else if(pTwoDieRoll === 3)
   {
    threeP2.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   else if(pTwoDieRoll === 4)
   {
    fourP2.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   else if(pTwoDieRoll === 5)
   {
    fiveP2.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   else if(pTwoDieRoll === 6)
   {
    sixP2.forEach((element)=>{
        element.style.visibility = "hidden"
    })
   }
   return pTwoDieRoll;
}

let outputOne = rolldiceP1();
let outputTwo = rolldiceP2();

document.querySelectorAll(".borderp1, .borderp2").forEach(element => {
    element.style.border = "none";
});
if(outputOne === outputTwo )
{
    document.querySelector("#sub-header").textContent = "Draw"
}
else if (outputOne > outputTwo)
{
    document.querySelector("#sub-header").textContent = "P1 Wins"
    document.querySelector(".borderp1").style.border = "2px solid"
}
else{

    document.querySelector("#sub-header").textContent = "P2 Wins"
    document.querySelector(".borderp2").style.border = "2px solid"
}
