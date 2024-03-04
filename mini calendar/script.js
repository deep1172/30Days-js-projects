
const date =document.getElementById("date");
const day =document.getElementById("day");
const month =document.getElementById("month");
const year =document.getElementById("year");
const hour =document.getElementById("hr");
const min =document.getElementById("min");
const sec =document.getElementById("sec");


const weekDays =["Sunday", "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const allMonths =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// console.log(today);
function updateClock(){
const today = new Date();
date.innerHTML = (today.getDate()<10 ? "0": "") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
hour.innerHTML = (today.getHours()<10 ? "0": "") + today.getHours(); 
min.innerHTML = (today.getMinutes()<10 ? "0": "") + today.getMinutes();
sec.innerHTML = (today.getSeconds()<10 ? "0": "") + today.getSeconds();


var timeString = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementsByClassName("clock")[0].innerHTML = timeString;

}
setInterval(updateClock, 1000);
     updateClock();

