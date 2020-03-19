import functions from "./component/functions";

test("functions(2 + 2) 等于 4", () => {
  expect(functions.sum(2, 2)).toBe(4);
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("对象相等", () => {
  expect({ obj: 1 }).toMatchObject({ obj: 1 });
});

test("大于3", () => {
  expect(4).toBeGreaterThan(3);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer"
];

test("the shopping list has beer on it", () => {
  expect(shoppingList).toContain("beer");
  expect(new Set(shoppingList)).toContain("beer");
});
function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);
});

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);
test("调用了两次", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
  // 第一次调用函数时的第一个参数是 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 第二次调用函数时的第一个参数是 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // 第一次函数调用的返回值是 42
  expect(mockCallback.mock.results[0].value).toBe(42);
});
