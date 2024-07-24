import { expect, test } from 'vitest';
import { greet } from '.';

test('greet', () => {
  expect(greet()).toBe('Hello, World!');
});
