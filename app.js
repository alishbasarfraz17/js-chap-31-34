// TASK # 1

var date =  new Date()
document.write(date)

// TASK # 2


var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = new Date().getMonth();
alert(months[currentMonth]);

// TASK # 3

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay = new Date().getDay();
alert(days[currentDay].substring(0, 3));


// TASK # 4 

var day = prompt(" what day is today ? ") ;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay = days[new Date().getDay()];

if ( day===currentDay){
if (day === "saturday" || day === "sunday") {
  alert("it's a Fun Day") ;
}else{
    alert("It must be a busy day") ;
}
}


// TASK # 5


var date = new Date();
var dayOfMonth = date.getDate();

if (dayOfMonth < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
}

// TASK # 7 


let currentTime = new Date();
let hours = currentTime.getHours();

if (hours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}