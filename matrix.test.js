const Matrix = require('./matrix.js');

test('add scalar to matrix', () => {
  let m = new Matrix(3, 3);
  m.data[0] = [1, 2, 3];
  m.data[1] = [4, 5, 6];
  m.data[2] = [7, 8, 9];
  m.add(2);
  expect(m).toEqual({
    rows: 3,
    cols: 3,
    data: [
      [3, 4, 5],
      [5, 7, 8],
      [9, 10, 11],
    ],
  });
});
