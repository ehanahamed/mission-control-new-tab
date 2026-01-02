function getOrdinalDate(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const timeDiff = date.getTime() - startOfYear.getTime();
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;
}
function daysInYear(year) {
  if ((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
    return 366; // Leap year
  } else {
    return 365; // Common year
  }
}
function getWeekNum(d) {
    let date = new Date(d);
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year and week number.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4th is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}
function daysInMonth(d) {
    const year = d.getFullYear();
    // getMonth() is 0-based (0 = January), so we must add 1
    const nextMonth = d.getMonth() + 1;
    // 0th date of month is previous month's last date
    return new Date(year, nextMonth, 0).getDate(); 
}
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const today = new Date();

document.getElementById("weekday").innerText = weekdays[today.getDay()];
document.getElementById("month-name").innerText = months[today.getMonth()];
document.getElementById("month-name2").innerText = months[today.getMonth()];
document.getElementById("day").innerText = today.getDate();
if (today.getDate() < 10) {

    document.getElementById("day-zero").innerText = "0";
} else {
    document.getElementById("day-zero").innerText = "";
}
document.getElementById("year").innerText = today.getFullYear();

const ordinalDate = getOrdinalDate(today);
document.getElementById("ordinal-date").innerText = ordinalDate;
if (ordinalDate < 10) {
    document.getElementById("ordinal-date-zero").innerText = "00";
} else if (ordinalDate < 100) {
    document.getElementById("ordinal-date-zero").innerText = "0";
} else {
    document.getElementById("ordinal-date-zero").innerText = "";
}
document.getElementById("total-days-in-year").innerText = daysInYear(today.getFullYear());

const weekNum = getWeekNum(today);
document.getElementById("week-num").innerText = weekNum;
if (weekNum < 10) {
    document.getElementById("week-num-zero").innerText = "0";
} else {
    document.getElementById("week-num-zero").innerText = "";
}

const month = today.getMonth() + 1;
document.getElementById("month").innerText = month;
if (month < 10) {
    document.getElementById("month-zero").innerText = "0";
} else {
    document.getElementById("month-zero").innerText = "";
}

document.getElementById("day-of-month").innerText = today.getDate();
if (today.getDate() < 10) {
    document.getElementById("day-of-month-zero").innerText = "0";
} else {
    document.getElementById("day-of-month-zero").innerText = "";
}
document.getElementById("total-days-in-month").innerText = daysInMonth(today);
