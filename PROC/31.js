
function IsPalindrome(K) {
	if (String(K) == String(K).split("").reverse().join(""))
		return true;
	return false;
}

let k = [1234, 3241, 1221, 2332, 2323, 5454, 456654, 45654, 1, 12];
let count = 0;
for (let i = 0; i < 10; i++) {
	if (IsPalindrome(k[i])) {
		document.write(k[i] + ' - паліндром<br>');
		count++;
	}
}
document.write('<br>В послідовності ' + count + ' чисел є паліндромами.<br>');
