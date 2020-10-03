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
 newRow.attr("class", "row")

//add a col to the row for the time stamp
 var timeCol = $("<div>");
 timeCol.attr("class", "col-md-1")
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
// create another colomn for user input
var userCol = $("<input>");
userCol.attr("class", "col-lg-10")
    //need to add class for styling and add input attr

// create the last col for save button
var saveCol = $("<button>");
saveCol.attr("class", "col-md-1")
saveCol.text("Save");
    //need to write code to make a button

//append rows and col's together
newRow.append(timeCol);
newRow.append(userCol);
newRow.append(saveCol);

//add the new row to the html doc
$("#myRows").append(newRow);

}
