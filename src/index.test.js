import { validateUsername } from "./index";

test("validateUsernameTest", () => {
  const expected = "+79270000000";

  const received = validateUsername("8 (927) 000-00-00");
  expect(received).toEqual(expected);
});

test("validateUsernameTest2", () => {
  const expected = "+860000000000";

  const received = validateUsername("+86 000 000 0000 ");
  expect(received).toEqual(expected);
});

test("validateUsernameTest3", () => {
  const expected = "+79270000000";

  const received = validateUsername("89270000000");
  expect(received).toEqual(expected);
});

test("validateUsernameTest4", () => {
  const expected = "+79270000000";

  const received = validateUsername("+79270000000");
  expect(received).toEqual(expected);
});