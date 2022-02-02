year = prompt('Enter number of year')

function daysYear() {
    let days = 0
    if ((year % 4 == 0)) {
        if (!(year % 25 == 0)) {
            days = 366
        }
        else {
            if (year % 400 == 0) {
                days = 366
            }
            else {
                days = 365
            }

        }
    }
    else {
        days = 365
    }

    console.log(days)
}

daysYear()
