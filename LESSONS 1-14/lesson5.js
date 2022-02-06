//Завдання 1
// var i = 1;
// while (i <= 100) {
//     document.write(i + '<br>');
//     i++;
// }

//Завдання 2
// var i = 11;
// while (i <= 33) {
//     document.write(i + '<br>');
//     i++;
// }

//Завдання 3
// var i = 0;
// while (i <= 100) {
//     if (i % 2 == 0) {
//         document.write(i + '<br>');
//         i++;
//     }
//     else {
//         i++
//     }

// }

//Завдання 4
// var i = 1
// var S = 0
// while (i <= 100) {
//     S = S + i
//     i++

// }
// alert(S)

//Завдання 5
// let arr = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>')

// }

//Завдання 6
// let arr = [1, 2, 3, 4, 5]
// let result = 0
// for (let i = 0; i < arr.length; i++) {
//     result = result + arr[i]

// }
// document.write('Suma elementov masiva = ', result + '<br>')

//Завдання 7
// var obj = { green: 'зеленый', red: 'красный', blue: 'голубой' }
// for (key in obj) {
//     // document.write(key + '  <br>')
//     alert(key)
//     // document.write(obj[key] + '<br>')
//     alert(obj[key])
// }

//Завдання 8
// var obj = { Коля: 200, Вася: 300, Петя: 400 };
// for (key in obj) {
//     document.write(key + ' - zarplata ' + obj[key] + 'dolarov' + '<br>')

// }

//Завдання 9
// var arr = [2, 5, 9, 15, 0, 4]
// for (let i = 0; i <= arr.length; i++) {
//     if ((arr[i] > 3) && (arr[i] < 10)) {
//         document.write(arr[i] + '  <br> ')
//     }
// }

//Завдання 10
// let Suma = 0
// var arr = [2, 5, -9, 15, 0, -4, 1, 7, -3, -11]
// for (let i = 0; i <= arr.length; i++) {
//     if ((arr[i] > 0)) {
//         Suma = Suma + arr[i]

//     }
// }
// document.write(Suma + '  <br> ')

// Завдання 11
// var arr = [1, 2, 5, 9, 4, 13, 4, 10]
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] == 4) {
//         document.write('Exist' + '<br>')
//         break
//     }
// }
// Завдання 12
// var arr = [10, 20, 30, 50, 235, 3000]

// for (let i = 0; i < arr.length; i++) {
//     let num = String(arr[i]);
//     let char = num[0];
//     if (char == 1 || char == 2 || char == 5) {
//         console.log(num);
//     }
// }

// Завдання 13
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < arr.length; i++) {
//     document.write('- ' + arr[i])
// }

// Завдання 14
// var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// for (let i = 0; i <= arr.length - 3; i++) {
//     document.write(arr[i] + ' ')
// }
// for (let i = 5; i <= arr.length - 1; i++) {
//     document.write('<strong>' + arr[i] + '</strong> ')
// }

// Завдання 15
// var arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// day = prompt('Enter number of today')

// for (let i = 0; i <= arr.length - 1; i++) {
//     if (i == (day - 1)) {
//         document.write('<i>' + arr[i] + '</i> ')
//     }
//     else {

//         document.write(arr[i] + ' ')
//     }
// }

// Завдання 16
let n = 1000
let num = 0
while (n > 50) {
    num = num + 1
    n = n / 2

}
alert(num)
