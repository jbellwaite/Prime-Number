var isPrime = function(number) {
	for (i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
		}
	}
	return true;
}

var outputPrimes = function(highest) {
	var primes = [2];
	for (var i = 3; i <= highest; i++) {
    	console.log(i, isPrime(i));
	}
}
outputPrimes(29);
