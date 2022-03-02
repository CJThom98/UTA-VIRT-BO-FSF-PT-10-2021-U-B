// TODO: Complete the 'counter' function below.
function counter(a) {
    let numOne = a;
    return {
        hiddenCount: function(b) {
            let numTwo = b;
            return count ++;
        }
    };
}

const newCount = counter(5);

const notherCounter = counter(2);

console.log('here is new count', newCount.increment(3));
console.log('nother count', notherCounter.increment(2));

// Displays an interactive list of the properties of the specified JavaScript object
console.dir(counter);

module.exports = counter;
