// ES6 export doest support work with JEST
const {generateText} = require('./util.js');

// JEST provides both test & expect
// test - testrunner lib
test('testing text',() =>{
    const text = generateText("Nikhil",25);

    // expect -  assertion library
    expect(text).toBe("Nikhil (25 years old)")
})
test('testing text',() =>{
    const text = generateText("",undefined);

    // expect -  assertion library
    expect(text).toBe(" (undefined years old)")
})