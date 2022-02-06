
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

let N = 31
if (isSimple(N))
	document.write('Просте число');
else
	document.write('Складене число');


