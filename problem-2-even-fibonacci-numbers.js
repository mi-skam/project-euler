let fibo = (n, cache) => {
	// memoization
	cache = cache || {};
	if (cache[n]) return cache[n];

	// base
	if (n < 2) return n;

	// recursion
	return cache[n] = fibo(n - 2, cache) + fibo(n - 1, cache);
};


let fiboSmallerThan = (max) => {
	let counter = 0;
	let result = [];
	while (true) {
		let current = fibo(counter);
		if (current <= max) {
			result.push(current);
			counter += 1;
		} else return result;
	}
};

let isEven = n => n % 2 == 0;
let sum = (result, n) => result + n;


let fiboEvenSum = (n) => {
	return fiboSmallerThan(n)
		.filter(isEven)
		.reduce(sum, 0);
};

console.log(fiboEvenSum(10000));