x = prompt('enter an integer')

function meaningF() {
    let F = 0
    if ((x > 2) | (x < -2)) {
        F = 2 * x
        console.log(F)
    }
    else {
        F = - (3 * x)
        console.log(F)
    }
}
meaningF()