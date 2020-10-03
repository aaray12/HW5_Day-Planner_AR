//setting date on top of html
var date = document.querySelector("#currentDay");
function currentTime()  {
    date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
};
setInterval(currentTime, 1000);


// creating a for loop to build my planner between 9am-5pm
for (let hour = 9; hour <= 17; hour++) {
 var myIndex = hour - 9;
 var newRow = $("<div>")
}
