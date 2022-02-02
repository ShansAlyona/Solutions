x = prompt('enter the abscissa of the point other than 0')
y = prompt('enter the ordinate of the point other than 0')

function coordinateQuarter() {

    if (x > 0) {
        if (y > 0) {
            console.log('coordinate quarter 1')
        }
        else {
            console.log('coordinate quarter 4')
        }

    }
    else {
        if (y > 0) {
            console.log('coordinate quarter 2')
        }
        else {
            console.log('coordinate quarter 3')
        }
    }
}

coordinateQuarter()