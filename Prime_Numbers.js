let a, b, i, j, flag; 
a = 2 
b = 11 
for (i = a; i <= b; i++) { 
	if (i == 1 || i == 0) 
		continue; 
	flag = 1; 
	for (j = 2; j <= i / 2; ++j) { 
		if (i % j == 0) { 
			flag = 0; 
			break; 
		} 
	} 
	if (flag == 1) 
		console.log(i); 
}


/* output

2
3
5
7
11
*/
