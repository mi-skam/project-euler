let dividableBy3or5 = x => x % 3 == 0 || x % 5 == 0;
let sum = (a, b) => a + b;

function multiplesOf3and5(number) {
    return Array.from({ length: number }, (_, index) => index)
        .filter(dividableBy3or5)
        .reduce(sum);

}

console.log(multiplesOf3and5(10));
