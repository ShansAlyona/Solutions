N = prompt('Enter integer positive number')

let F1 = 1
let F2 = 1
let F = 0
let result = false

while (F < N) {
    F = F2 + F1
    F2 = F1
    F1 = F
    if (N == F) {
        result = true

    }
    else {
        result = false

    }
}
console.log(result)

