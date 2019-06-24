//global variables go here
let billInput;
let tipInput;
let splitInput;
let calculatedTip;
let calculatedTotal;
let calculatedSplit;
let splitTip;

//get input from form and store data in corresponding variables
$("#submit").on("click" ,function go (){
    event.preventDefault();
    $("#tip-display").empty();
    $("#total-display").empty();
    $("#split-display").empty();
    let billInput = parseFloat($("#bill-input").val().trim());
    let tipInput = parseFloat($("#tip-input").val().trim()/100); //divided by 100 to turn tip input into percentage
    let splitInput = parseFloat($("#split-input").val().trim());
    //handle invalid entries
    //conditional for...
         
    if (billInput <= 0){        //if any of the entries are 0
        console.log("bill input invalid");
        $(".modal").modal();     //then exit the loop and pop up a message
        $("#bill").text("Please refine your search");
        return;
    }if (tipInput <= 0){
        console.log("tip input invalid");
        $(".modal").modal();
        $("#tip").text("Please refine your search");
        return;
    }if (splitInput <= 0){
        console.log("split input invalid");
        $(".modal").modal();
        $("#split").text("Please refine your search");
        return;
    } else {
        //empty display divs each click
        $("#bill-input").val("");
        $("#tip-input").val("");
        $("#split-input").val("");
        //now for calculations
        //multiply the total bill by the tip amount,the total is the tip amount, store this in a variable
        let calculatedTip = billInput * tipInput;
        //append the tip amount to the corresponding div
        $("#tip-display").append("<h6>Tip This Much: "+ "$"+calculatedTip.toFixed(2) + "</h6>");
        //take the total bill amount and add the tip amount, store this in a variable
        let calculatedTotal = calculatedTip + billInput;
        //append the total amount to the corresponding div
        $("#total-display").append("<h6>Here's Your Bill Total:"+ "$"+calculatedTotal.toFixed(2) + "</h6>");
        //if the bill is being split more than 1 way,
        if (splitInput > 1){
            //divide the total amount by the split number,this is the amount per person
            let calculatedSplit = calculatedTotal / splitInput;
            let splitTip = calculatedTip / splitInput;
            //append this per person amount to the corresponding div
            $("#split-tip-display").append("<h6>Each Person Leaves $" + splitTip.toFixed(2) + " in tips </h6>")
            $("#split-total-display").append("<h6>Each person pays $" + calculatedSplit.toFixed(2) + " total </h6>");
        }
    }
})
