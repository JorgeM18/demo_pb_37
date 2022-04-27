const { suma, resta, mult, div } = require('./index');

describe('Coder test package tests', () => {
  it('Should make all operations correctly', () => {
    expect(suma(5,5)).toBe(10);
    expect(resta(5,5)).toBe(0);
    expect(mult(5,5)).toBe(25);
    expect(div(5,5)).toBe(1);
  })
});