'use strict';

var assert = require('assert');
var isprime = require('./');
var primes = require('thousandprimes');
var notprimes = [
  22, 10, 20, 40, 10000,
];

primes.forEach(function(num){
  describe('isprime('+num+')', function(){
    it('finds that '+num+' is prime', function(){
      assert.equal(isprime(num), true);
    });
  });
});

notprimes.forEach(function(num){
  describe('isprime('+num+')', function(){
    it('finds that '+num+' is not prime', function(){
      assert.notEqual(isprime(num), true);
    });
  });
});
