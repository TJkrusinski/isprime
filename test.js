'use strict';

var assert = require('assert');
var isprime = require('./');
var primes = require('thousandprimes');

primes.forEach(function(num){
  describe('isprime('+num+')', function(){
    it('finds if '+num+' is prime', function(){
      assert.equal(isprime(num), true);
    });
  });
});
