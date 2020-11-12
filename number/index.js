for(let i = 0 ; i <= 20 ; i++) {
	if(i == 0) {
		continue;
	}

	let str = i + ' is ' + (i % 2 == 0 ? 'even' : 'odd') + ' number.';
	console.log(str);
}
