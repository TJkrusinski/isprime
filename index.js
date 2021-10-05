'use strict';

/**
 *	Find is num is prime
 *	@param {Number} num
 */
module.exports = function(num) {
  if (num == 0) return false;
  if (num == 1) return false;
  num += 2;

  var upper = Math.sqrt(num);
  var sieve = Array(num).fill(true);
  
  for (var i = 2; i <= num; i++) {
    if (sieve[i]) {
      for (var j = i * i; j < num; j += i) {
        sieve[j] = false;
      };
    };
  };

  return sieve[num-2];
};
