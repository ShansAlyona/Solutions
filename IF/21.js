x = prompt('enter the abscissa point')
y = prompt('enter the ordinate of the point')

console.log(x, y)

function tochka() {

    if (x == 0) {
        if (y == 0) {

            console.log('0')
        }
        else {
            console.log('2')
        }

    }
    else {
        if (y == 0) {
            console.log('1')
        }
        else {
            console.log('3')
        }
    }

}

tochka()