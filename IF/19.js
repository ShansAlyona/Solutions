a = prompt('Enter the first number')
b = prompt('Enter the second number')
c = prompt('Enter the third number')
d = prompt('Enter the fourth number')

array = []
array.push(a)
array.push(b)
array.push(c)
array.push(d)
for (let index = 0; index < 4; index++) {
    console.log(array[index])

}

function compare() {
    if (array[0] == array[1]) {
        if (array[0] == array[2]) {
            console.log('Порядковий номер - 4')
        }
        else {
            console.log('Порядковий номер - 3')
        }

    }
    else {
        if (array[0] == array[2]) {
            console.log('Порядковий номер - 2')
        }
        else {
            console.log('Порядковий номер - 1')
        }
    }

}


compare()