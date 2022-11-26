const date = document.getElementById("time");
const currentDatetime = new Date().toISOString().slice(0, 19)

date.min = currentDatetime;

