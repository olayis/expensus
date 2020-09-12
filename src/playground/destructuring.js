// Object Destructuring


// const person = {    
//     age: 20,
//     location: {
//         city: 'Lagos',
//         temp: 27        
//     }
// };

// const { name = 'Anonymous', age } = person;

// const { city, temp: temperature } = person.location;

// console.log(`${name} is ${age} years old. He lives in ${city} which is ${temperature} degrees hot.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);


// Array Destructuring


// const address = ['1 Ultimate Street', 'Torotoro', 'Ogun', '10001'];
// const [street, city = 'Magboro'] = address;
// console.log(`You live in ${street}, ${city}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.7 5'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} is ${mediumPrice}`);
