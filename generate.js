if (localStorage.getItem('data') === null) {
    let data = [];

    // fill data with random 'name', 'age' and 'parent', but 'parent' have 10% chance to be null
    for (let i = 0; i < 10; i++) {
        data.push({
            name: faker.name.findName(),
            age: faker.random.number({ min: 1, max: 100 }),
            parent: ''
        });
    }

    // get name from data
    let names = data.map(item => item.name);

    // fill data with random 'name', 'age' and 'parent' but the 'parent' is from the 'data'
    for (let i = 0; i < 150; i++) {
        data.push({
            name: faker.name.findName(),
            age: faker.random.number({ min: 1, max: 100 }),
            // random parent from names
            parent: faker.random.arrayElement(names)
        });
    }

    localStorage.setItem('data', JSON.stringify(data));
}