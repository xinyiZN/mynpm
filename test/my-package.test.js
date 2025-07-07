const { sayHello } = require('../index');
test('says hello', () => {
  expect(sayHello('World')).toBe('Hello, World!');
});