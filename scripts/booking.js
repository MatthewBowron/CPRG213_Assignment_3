/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var cost_per_day = 35;
var num_days_selected = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var Mon = document.getElementById("monday");
Mon.addEventListener("click", selectDay);
var Tue = document.getElementById("tuesday");
Tue.addEventListener("click", selectDay);
var Wed = document.getElementById("wednesday");
Wed.addEventListener("click", selectDay);
var Thu = document.getElementById("thursday");
Thu.addEventListener("click", selectDay);
var Fri = document.getElementById("friday");
Fri.addEventListener("click", selectDay);

function selectDay(evt){
    var day = evt.currentTarget
    if (!day.classList.contains("clicked")){
        day.classList.add("clicked");
        num_days_selected += 1;
        calculate();
    }     
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
var clear = document.getElementById("clear-button");
clear.addEventListener("click", clearDays);

function clearDays(){
    Mon.classList.remove("clicked");
    Tue.classList.remove("clicked");
    Wed.classList.remove("clicked");
    Thu.classList.remove("clicked");
    Fri.classList.remove("clicked");
    num_days_selected = 0;
    calculate();
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var half = document.getElementById("half");
half.addEventListener("click", selectHalfDay);

function selectHalfDay(){
    full.classList.remove("clicked");
    half.classList.add("clicked");
    cost_per_day = 20;
    calculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var full = document.getElementById("full");
full.addEventListener("click", selectFullDay);

function selectFullDay(){
    half.classList.remove("clicked");
    full.classList.add("clicked");
    cost_per_day = 35;
    calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(){
    let costLabel = document.getElementById("calculated-cost");
    var cost = cost_per_day * num_days_selected;
    costLabel.innerHTML = String(cost);
}
