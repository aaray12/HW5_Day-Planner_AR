$(document).ready(function(){
//setting date on top of html
var date = document.querySelector("#currentDay");
function currentTime()  {
    date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
};
setInterval(currentTime, 1000);


// creating a for loop to build my planner between 9am-5pm
for (hour = 9; hour <= 17; hour++) {
 var myHour = hour - 9;

 // create a row for each hour
 var newRow = $("<div>");
 newRow.attr("class", "row row-style")

//add a col to the row for the time stamp
 var timeCol = $("<div>");
 timeCol.attr("class", "col-md-1 time-style")
// code to display text.
function currentHour(){ 
   
    if(hour>12){
        return hour-12;
     }
    else{
           return hour;
     }
}
var hourText = function getHourText(){

    var am = "am";
    var pm = "pm";

    if (hour>11){
        return currentHour() + pm;
    }
    else{
        return currentHour() + am;
    }
}
timeCol.text(hourText);
// create another colomn for user input & add attributes
var userCol = $("<input>");
userCol.attr("class", "col-lg-8")
userCol.attr("id", "-"+hour)
userCol.attr("name", "user-input")
userCol.attr("type", "text")
// create the last col for save button
var saveCol = $("<button>");
saveCol.attr("class", "col-md-2")
saveCol.text("Save");
saveCol.attr("id", hour)

//append rows and col's together
newRow.append(timeCol);
newRow.append(userCol);
newRow.append(saveCol);

//add the new row to the html doc
$("#myRows").append(newRow);
//fill input with saved user data
$("#-" + hour).val(localStorage.getItem(hour));



//add onclick event to submit button to save item.

$("#9").on("click", function (event){
    event.preventDefault();
    localStorage.setItem("9", $("#-9").val());
});
$("#10").on("click", function (event){
    event.preventDefault();
    localStorage.setItem("10", $("#-10").val());
});
$("#11").on("click", function (event){
    event.preventDefault();
    localStorage.setItem("11", $("#-11").val());
});
$("#12").on("click", function (event){
    event.preventDefault();
    localStorage.setItem("12", $("#-12").val());
});
$("#13").on("click", function (event){
    event.preventDefault();
    localStorage.setItem("13", $("#-13").val());
});
$("#14").on("click", function (event){
    event.preventDefault();
    localStorage.setItem("14", $("#-14").val());
});
$("#15").on("click", function (event){
    event.preventDefault();
    localStorage.setItem("15", $("#-15").val());
});
$("#16").on("click", function (event){
    event.preventDefault();
    localStorage.setItem("16", $("#-16").val());
});
$("#17").on("click", function (event){
    event.preventDefault();
    localStorage.setItem("17", $("#-17").val());
});

}
// set color switch on rows
function getColor(){
    var currentHour = moment().format("h");
    console.log(moment().format("h"))
    for (i = 9; i < 18; i++){
        if (i> currentHour){
        $("#-"+i).attr("style", "background-color: lightgreen")
    }
    else if ( i < currentHour){
        $("#-"+i).attr("style", "background-color: #ffcccb")
    }
    }
}
    
getColor();
})
