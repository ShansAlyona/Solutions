x1 = prompt('Введіть 1-у координату 1 - ї клітинки')
y1 = prompt('Введіть 2-у координату 1 - ї клітинки')

x2 = prompt('Введіть 1-у координату 2 - ї клітинки')
y2 = prompt('Введіть 2-у координату 2 - ї клітинки')



if ((Math.abs(x1 - x2) == 1) && (Math.abs(y1 - y2) == 2) | (Math.abs(x1 - x2) == 2) && (Math.abs(y1 - y2) == 1)) {
    alert('Кінь за 1 хід може перейти з одного поля на інше')
}
else {
    alert('Кінь за 1 хід НЕ може перейти з одного поля на інше')
}
