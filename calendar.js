const dayTemplate = document.getElementById("day-template").content
const calendar = document.getElementById("calendar");
let populateCalendar = () => {
    generateDays(calendar,2,31)
}

let generateDays = (calendar, offset, days) => {
    let day;
    let lastRow = Math.floor((days + offset)/7) + 1
    let row;
    let col;
    let isLastRow;
    let secondLast = 7 - (days + offset)%7 -1
    let lastCols = []
    for (let i = 7-secondLast; i <= 7; i++) {
        lastCols.push(i);
    }

    for (let i = offset; i < days + offset; i++) {
        row = Math.floor(i/7)+1;
        col = i%7 +1;
        isLastRow = row === lastRow || row === lastRow-1 && lastCols.includes(col);
        day = dayTemplate.cloneNode(true);
        day.querySelector("div").className += ` row${row} col${col} day${i!==days+offset-1?i-offset+1:"-last"} ${isLastRow?"row-last":""}`
        day.querySelector("a").textContent = i - offset + 1;

        calendar.appendChild(day);
    }
}