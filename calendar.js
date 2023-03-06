const dayTemplate = document.getElementById("day-template").content
const calendar = document.getElementById("calendar");
const now = new Date();
const numCells = 6*7;
let populateCalendar = () => {
    generateDays(calendar,now.getMonth())
}

let generateDays = (calendar, month) => {
    let day;
    let row;
    let col;
    let currDays = [];
    let days = new Date(now.getFullYear(), month+1,0).getDate()
    let offset = new Date(now.getFullYear(), month).getDay()
    for (let i = offset; i < days + offset; i++) {
        currDays.push(i)
    }
    let dayIds = getMonth(month)

    for (let i = 0; i < numCells; i++) {
        row = Math.floor(i/7)+1;
        col = i%7 +1;
        day = dayTemplate.cloneNode(true);
        day.querySelector("div").className += ` row${row} col${col} ${row===6?"row-last":""} ${!currDays.includes(i)?"not-curr":""}`
        day.getElementById("dayNum").textContent = dayIds[i].split("-")[2]
        day.querySelector("div").id = dayIds[i];

        calendar.appendChild(day);
    }
}

let getMonth = (month) => {
    let dayIds = []
    let date = new Date(now.getFullYear(),month)
    let lastMonth = new Date(now.getFullYear(),month,0)
    let lastMonthEnd = lastMonth.getDate()
    let monthEnd = new Date(now.getFullYear(),month+1,0).getDate()
    let weekday = date.getDay()

    let lastMonthYear = lastMonth.getFullYear();
    for (let i = weekday-1; i >= 0; i--) {
        dayIds.push(`${lastMonthYear}-${month-1}-${lastMonthEnd-i}`)
    }
    let year = now.getFullYear();
    for (let i = weekday; i < monthEnd + weekday; i++) {
        dayIds.push(`${year}-${month}-${i - weekday+1}`)
    }
    let nextMonth = new Date(now.getFullYear(),month,monthEnd+1)
    let nextMonthYear = nextMonth.getFullYear()
    let nextMonthMonth = nextMonth.getMonth()
    let t = 1;
    for (let i = weekday + monthEnd; i < numCells; i++) {
        dayIds.push(`${nextMonthYear}-${nextMonthMonth}-${t++}`)
    }
    return dayIds
}