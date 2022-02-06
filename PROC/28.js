let count = 0
for (let j = 0; j < 10; j++) {
    n = prompt('Enter the number')
    if (isSimple(n)) {
        count = count + 1
    }

}
alert(count)

function isSimple(n) {
    let flag = true;
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}