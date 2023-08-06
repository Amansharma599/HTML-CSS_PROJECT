// Getting the html tags

const decrementBtn = document.getElementById("decrementBtn");
const displayValue = document.getElementById("displayValue");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

// For Decrement button click

decrementBtn.addEventListener("click" , () => {
    const value = Number(displayValue.innerText);
    if(value > 0){
        displayValue.innerText = value - 1;
    } else{
        alert("Negative value is not allowed")
    }
});


// For Increment button click

incrementBtn.addEventListener("click", () => {
   const value = Number(displayValue.innerText);
   if( value >= 10){
    alert("10+ values are not allowed")
   } else{
    displayValue.innerText = value + 1;
    
   }
})

resetBtn.addEventListener("click" , () =>{
    displayValue.innerText = 0;
})