import PaintBucket from '../components/tools/paint_bucket';

// *** PaintBucket.prototype.floodFill ***

test('Sould be an instance of function', () => {
  expect(PaintBucket.prototype.floodFill).toBeInstanceOf(Function);
});

// *** PaintBucket.prototype.hexToRgb ***

test('Sould be an instance of function', () => {
  expect(PaintBucket.prototype.hexToRgb).toBeInstanceOf(Function);
});

test('Length of returned array should be 3', () => {
  expect(PaintBucket.prototype.hexToRgb('#ffffff')).toHaveLength(3);
});

test('Should convert hex to array of red, green and blue components of color', () => {
  expect(PaintBucket.prototype.hexToRgb('#ffffff')).toEqual([255, 255, 255]);
});

test('Should convert hex to array of red, green and blue components of color', () => {
  expect(PaintBucket.prototype.hexToRgb('#ff4865')).toEqual([255, 72, 101]);
});

test('Should convert hex to array of red, green and blue components of color', () => {
  expect(PaintBucket.prototype.hexToRgb('#005783')).toEqual([0, 87, 131]);
});

// *** PaintBucket.prototype.handleEvent ***

test('Sould be an instance of function', () => {
  expect(PaintBucket.prototype.handleEvent).toBeInstanceOf(Function);
});