//Block scope variables
var x = 'outer';
function test(inner) {
  if (inner) {
    var x = 'inner'; // scope whole function
    return x;
  }
  return x; // gets redefined because line 4 declaration is hoisted
}
console.log(test(false)); // undefined
console.log(test(true)); // inner



//Block-Scoped Functions
{
    function foo () { return 1; }
    console.log(foo() === 1);
   
    {
        function foo () { return 2; }
        console.log(foo() === 2);
    }

    console.log(foo() === 1);
}