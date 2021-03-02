const Model = require('../src/Models/Model')
const City = require('../src/Models/City')

test('Can create a model object', () => {
   let model = new Model();
   expect(model).toBeInstanceOf(Model);
});

test('Can create a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});

test('Can create a city object by factory', () => {
    let city = Model.create('City')
    expect(city).toBeInstanceOf(Model);
});

