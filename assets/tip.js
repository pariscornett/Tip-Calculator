//global variables go here
let billInput;
let tipInput;
let splitInput;
let calculatedTip;
let calculatedTotal;
let calculatedSplit;

//hide div for split display until split more than one way
$("#split-display").hide();
//get input from form and store data in corresponding variables
$("#submit").on("click" ,function(){
    event.preventDefault();
    //empty display divs each click
    $("#tip-display").empty();
    $("#total-display").empty();
    $("#split-display").empty();
    let billInput = parseFloat($("#bill-input").val().trim());
    let tipInput = parseFloat($("#tip-input").val().trim()/100); //divided by 100 to turn tip input into percentage
    let splitInput = parseFloat($("#split-input").val().trim());
    $("#bill-input").val("");
    $("#tip-input").val("");
    $("#split-input").val("");
    console.log(billInput);
    console.log(tipInput);
    console.log(splitInput);
    //now for calculations
    //multiply the total bill by the tip amount,the total is the tip amount, store this in a variable
    let calculatedTip = billInput * tipInput;
    console.log("This is the calculated tip: " + calculatedTip);
    //append the tip amount to the corresponding div
    $("#tip-display").append("<h6>Tip This Much: "+ "$"+calculatedTip + "</h6>");
    //take the total bill amount and add the tip amount, store this in a variable
    let calculatedTotal = calculatedTip + billInput;
    console.log( "This is the calculated total: " + calculatedTotal);
    //append the total amount to the corresponding div
    $("#total-display").append("<h6>Here's Your Bill Total:"+ "$"+calculatedTotal + "</h6>");
    //if the bill is being split more than 1 way,
    if (splitInput > 1){
        //divide the total amount by the split number,this is the amount per person
        let calculatedSplit = calculatedTotal / splitInput;
        console.log("This is the cost per person:" + calculatedSplit);
        //append this per person amount to the corresponding div
        $("#split-display").show();
        $("#split-display").append("<h6>Each Person Pays: "+"$"+calculatedSplit);
    }
        
});

   
   
 
