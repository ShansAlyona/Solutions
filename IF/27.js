x = prompt('enter an integer')

function meaningF() {
    let F = 0
    if (x < 0) {
        F = 0
        console.log(F)
    }
    else {
        if (Math.trunc(x) % 2 == 0) {
            F = 1
            console.log(F)
        }
        else {
            F = -1
            console.log(F)
        }

    }
}
meaningF()