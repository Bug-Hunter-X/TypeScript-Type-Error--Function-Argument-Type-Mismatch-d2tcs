function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b; 
  } else if (typeof a === 'number' && typeof b === 'string') {
    return a + parseInt(b);
  } else {
    return parseInt(a) + b;
  }
}

let result1 = add(5, 10); // Correct: returns 15
let result2 = add("hello", " world"); // Correct: returns "hello world"
let result3 = add(5, "10"); //Correct: returns 15
let result4 = add("10", 5); //Correct: returns 15