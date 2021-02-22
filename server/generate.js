var faker = require('faker');

var database = { todos: []};

for (var i = 1; i<= 3; i++) {
  database.todos.push({
    id: i,
    name: faker.lorem.words(2),
    status: faker.random.number(2),
    // price: faker.commerce.price(),
    // imageUrl: "https://source.unsplash.com/1600x900/?product",
    // quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));