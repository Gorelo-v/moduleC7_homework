import {sum} from '../../utils/index';
// const sum = require('./index.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe("test sum" , () =>{
  it ("adds 1 + 2 to equal 3", () =>{
  const result = sum(1,2);
  expect(result).toBe(3)
  }),
  it ("adds 3 + 1 to equal 3", () =>{
    const result = sum(3,1);
    expect(result).toBe(4)
    });
});

describe("test sum2" , () =>{
  it ("adds 1 + 2 to equal 3", () =>{
  const result = sum(1,2);
  expect(result).toBe(3)
  }),
  xit ("adds 3 + 1 to equal 3", () =>{
    const result = sum(3,1);
    expect(result).toBe(4)
    });
});