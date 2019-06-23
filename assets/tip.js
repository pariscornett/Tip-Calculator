//global variables go here
let billInput = 0;
let tipInput = 0;
let splitInput = 0;
let calculatedTip;
let calculatedTotal;
let calculatedSplit;



//get input from form and store data in corresponding variables
$("#submit").on("click" ,function(){
    event.preventDefault();
    let billInput = $("#bill-input").val().trim();
    let tipInput = $("#tip-input").val().trim();
    let splitInput = $("#split-input").val().trim();
    console.log(billInput);
    console.log(tipInput);
    console.log(splitInput);
});


//function to calculate tip
    //take the total bill amount
    //take the desired tip amount and convert this to a decimal (move decimal point two spaces to the left)
    //multiply the total bill by the tip amount
    //the total is the tip amount, store this in a variable
    //append the tip amount to the corresponding div
    //take the total bill amount and add the tip amount
    //the total is the total amount, store this in a variable
    //append the total amount to the corresponding div
    //if the bill is being split more than 1 way,
        //divide the total amount by the split number
        //this is the amount per person
        //append this per person amount to the corresponding div