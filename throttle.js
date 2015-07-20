function createThrottle() {
  // your code
}

function testThrottle(throttle) {
  settimeout(function() {
    throttle(1);
  }, 0);
  
  settimeout(function() {
    throttle(2);
  }, 200); 
  
  settimeout(function() {
    throttle(3);
  }, 1100);
  
  settimeout(function() {
    throttle(4);
  }, 2300);
}