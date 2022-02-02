x = prompt('enter number')

function meaningF() {
    let F = 0
    if (x > 0) {
        F = 2 * Math.sin(x)
        console.log(F)
    }
    else {
        F = 6 - x
        console.log(F)
    }
}
meaningF()