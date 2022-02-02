x = prompt('enter an integer')

function meaningF() {
    let F = 0
    if (x <= 0) {
        F = - x
        console.log(F)
    }
    else {
        if ((x > 0) & (x < 2)) {
            F = x ** 2
            console.log(F)
        }
        else {
            F = 4
            console.log(F)
        }

    }
}
meaningF()