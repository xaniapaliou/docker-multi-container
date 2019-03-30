const keys = require('./keys');
const redis = require('redis');

// Create an instance for redis
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

// @todo explain later
const sub = redisClient.duplicate();

/**
 * Fibonacci sequence recursive calculation
 */
function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}
// Watches redis for new indices.
// Pulls each new indice, calculates new value and put it back into redis
sub.on('message', (channel, message) => { 
    redisClient.hset('values', message, fib(parseInt(message)));
});

sub.subscribe('insert');
