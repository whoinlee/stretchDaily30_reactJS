import data from "../../data/courses.json";

//***********/
// https://jestjs.io/docs/expect
//***********/

//-- Number
const numItems = data.length;
describe('Number test', () => {
    test('Number of Items = 12', () => {
        expect(numItems).toBe(12);
    });

    test('Number of Items to be greater than or equal 12', () => {
        expect(numItems).toBeGreaterThanOrEqual(12);
    });
})

//-- String
const dataTest = data[0].title;
describe('String test', () => {
    test('There is a JS in this title', () => {
        expect(dataTest).toMatch(/JS/);
    });

    test('The title contains React', () => {
        expect(dataTest).toContain('React');
    });
})

//-- Arrays & Objects
const dataArr = ['React Native', 'React'];
describe('Arrays and Objects test', () => {
    test('The list of courses contains React Native and React', () => {
        expect(dataArr).toEqual(expect.arrayContaining(dataArr));
    });
    test('The list of follwing courses contains React Native and React', () => {
        expect(['React Native', 'React', "MeteorJS"]).toEqual(expect.arrayContaining(dataArr));
    });
    test('The first course to have a title property', () => {
        expect(data[0]).toHaveProperty('title');
    });
    test('The first course to have a view property with its value of 31,266', () => {
        expect(data[0]).toHaveProperty('views', '31,266');
    });
});

//-- Objects
// test('The first course to have a title property and the value of 31,266', () => {
//     expect(data[0]).toHaveProperty('title', '31,266');
// });  //FAIL
