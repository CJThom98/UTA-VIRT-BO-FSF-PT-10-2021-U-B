// TODO: Add a comment describing what the `position` parameter means for this function.
// It's the value of the fibonacci sequence we want to return
const fibonacci = (position) => {
  // TODO: Add a comment describing the purpose of this conditional statement.
  // If value is 1 or 0, return the position until a number is greater than 2 
  if (position < 2) {
    return position;
  }

  // TODO: Add a comment describing the purpose of this return statement.
  // Adding both fibonacci values together but each fidonacci has a different value subtracted from it
  return fibonacci(position - 1) + fibonacci(position - 2);
};

// TODO: What will this return?
// 34
console.log(fibonacci(31));