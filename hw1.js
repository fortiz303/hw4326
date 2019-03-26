
let cities = ['SF','NYC','Denver'];

cities.push('LA');

cities.pop();

cities.shift();

cities.unshift('Chicago');

let citiesTogether= cities.join();

let bigCities = cities.slice();

let newCity = bigCities.push('Houston');

// console.log(bigCities[0]);

// Create a JavaScript function that is named arrayConcat(). This
// function has two parameters that will hold arrays. The function should
// combine these two arrays to make one array and then it should return
// this one array.

//create an array of shoes
let shoes = ['nike','jordans','adidas'];
//create an aray of sports
let sports = ['basketball','soccer','tennis'];

//create a function that will accept two parameters
function arrayConcat(array1,array2) {
  //now return
  return (array1 + array2)

}

//why does this return an undefined string at the end????? ASK EDUARDO
console.log(arrayConcat(shoes+ ',' + sports));
