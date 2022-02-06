P = prompt('Введіть процент від 0 до 50')

let S = 10
let k = 1
let distance = 10

while (S <= 200) {
    k = k + 1
    distance = distance + distance * P / 100
    S = S + distance

}
console.log(k, S)