N = prompt('Enter iteger positive number')

let F1 = 1
let F2 = 1
let F = 0


while (F <= N) {
    F = F2 + F1

    F2 = F1
    F1 = F

}

console.log(F)


