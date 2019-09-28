function one (){
	for (let i=1; i<=10; i++){
		console.log(i);
	}
}

function two(){
	for(let i=1; i<=100; i+=2){
		console.log(i);
	}
}

function three(){
	for (let i=1; i<=10; i++){
		console.log('7 * ' + i + ' = ' + i*7);
	}
}

function four(){
	for (let i=1; i<=10; i++){
		for (let j=1; j<=10; j++){
			console.log( i + ' * ' + j + ' = ' + j*i);
		}
	}
}

function five (){
	var sum = 0;
	for (let i=1; i<=10; i++){
		sum += i;
	}

	console.log(sum);
}

function six (){
	var factorial = 1;
	for (let i=1; i<=10; i++){
		factorial *= i;
	}

	console.log(factorial);
}

function seven (){
	var sum = 0;
	for (let i=10; i<30; i+=2){
		sum += i;
	}

	console.log(sum);
}

function eight (num){
	var c = num;
	var f = (num * (9/5)) + 32;
	console.log(c + '° celsius are ' + f + '° fahrenheit');
}

function nine(num){
	var f = num;
	var c = (num - 32) * (5/9);
	console.log(f + '° fahrenheit are ' + c + '° celsius');

}

function ten (arr){
	var sum = 0;
	for (let i=0; i<arr.length; i++){
		sum += arr[i];
	}

	console.log(sum);
}

function eleven (arr) {
	var average = 0;
	for (let i=0; i<arr.length; i++){
		average += arr[i];
	}

	console.log(average / arr.length);
}

function twelve (arr){
	for (let i=0; i<arr.length; i++){
		if (arr[i] < 0){
			arr.splice(i, 1);
			i--;
		}
	}

	console.log(arr);
}

function thirteen (arr){
	var best = 0;
	for (let i=0; i<arr.length; i++){
		if (i == 0 && arr[i] != NaN){
			best = arr[i];
		} else if (arr[i] > best){
			best = arr[i];
		} 
	}

	console.log(best);
}

