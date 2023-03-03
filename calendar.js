const dayTemplate = document.getElementById("day-template").content
const calendar = document.getElementById("calendar");
let populateCalendar = () => {
    generateDays(calendar,3,31)
}

let generateDays = (calendar, offset, days) => {
    let day;
    let row;
    let col;
    let currDays = [];
    for (let i = offset; i < days + offset; i++) {
        currDays.push(i)
    }

    for (let i = 0; i < 6*7; i++) {
        row = Math.floor(i/7)+1;
        col = i%7 +1;
        day = dayTemplate.cloneNode(true);
        day.querySelector("div").className += ` row${row} col${col} ${row===6?"row-last":""} ${!currDays.includes(i)?"not-curr":""}`
        if(currDays.includes(i)){
            day.querySelector("a").textContent = i - offset + 1;
        }

        calendar.appendChild(day);
    }
}