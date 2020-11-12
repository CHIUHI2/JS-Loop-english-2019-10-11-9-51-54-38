var str = '';
for(let i = 1; i < 10 ; i++) {
	let tmpStr = '';

	for(let j = 1 ; j < i+1 ; j++) {
		tmpStr += (tmpStr == '' ? '' : ' ') + i + '*' + j + "=" + i*j;	
	}

	str += tmpStr + '\n';
}
console.log(str);
