function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  // 1. Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // 2. Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function!");
    }
    return namedFunction;
  }
  
  // 3. Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am an anonymous function!");
    };
  }
  
  // Test the functions
  receivesAFunction(() => console.log("Callback called!"));
  
  const namedFunc = returnsANamedFunction();
  namedFunc();
  
  const anonFunc = returnsAnAnonymousFunction();
  anonFunc();
  