a = prompt('Enter the first number')
b = prompt('Enter the second number')
c = prompt('Enter the third number')

array = []
array.push(a)
array.push(b)
array.push(c)
for (let index = 0; index < 3; index++) {
    console.log(array[index])

}

function compare() {
    if (array[0] == array[1]) {
        if (array[0] == array[2]) {
            console.log('All numbers are the same')
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
            if (array[1] == array[2]) {
                console.log('Порядковий номер - 1')
            }
            else {
                console.log('All numbers are different')
            }

        }
    }
}

compare()