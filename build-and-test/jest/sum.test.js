const sum = require('./sum');



// test('two', () => {
//     expect(2 + 2).toBe(4);
// });



// test('null', () => {
//     const n = null;
//     expect(n).toBeNull();
// });



// test('equals', () => {
//     const n = 5;
//     expect(n).toEqual(5);
// });



const preferredFoods = [
        "pizza",
        "brocccoli",
        "meat"
]

test('prefers pizza', () => {
    expect(preferredFoods).toContain("pizza");
});





// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });