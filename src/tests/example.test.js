import { MyString, MyDate } from "../types";

let ms = new MyString();

it("MyString", () => {
  expect(new MyString("qwerty").remove(0)).toEqual("werty");
  expect(new MyString("qwerty").remove(2)).toEqual("qwrty");
  expect(new MyString("qwerty").remove(10)).toEqual("qwerty");
  expect(new MyString("qwerty").remove(-4)).toEqual("qwerty");

  expect(new MyString("qwerty").insert(0, "X")).toEqual("Xwerty");
  expect(new MyString("qwerty").insert(2, "X")).toEqual("qwXrty");
  expect(new MyString("qwerty").insert(10, "X")).toEqual("qwertyX");
  expect(new MyString("qwerty").insert(-4, "X")).toEqual("Xqwerty");

  expect(new MyString("qwerty").trimSign()).toEqual("qwerty");
  expect(new MyString("qweeeerty").trimSign()).toEqual("qwerty");
  expect(new MyString("qweeertttty").trimSign()).toEqual("qwerty");
  expect(new MyString("qwe....rty").trimSign()).toEqual("qwe.rty");

  expect(new MyString("qwerty").toggle()).toEqual("QWERTY");
  expect(new MyString("QWERTY").toggle()).toEqual("qwerty");
  expect(new MyString("qweRTY").toggle()).toEqual("QWErty");

  expect(new MyString("qwerty").counter("e")).toEqual(1);
  expect(new MyString("apple").counter("p")).toEqual(2);
  expect(new MyString("avokado").counter("a")).toEqual(2);
});

it("MyDate", () => {
  expect(new MyDate(20, 5, 2056).isFuture()).toEqual(true);
  expect(new MyDate(20, 6, 1990).isFuture()).toEqual(false);

  expect(new MyDate(20, 6, 1990).isLeapYear()).toEqual(false);
  expect(new MyDate(20, 6, 2070).isLeapYear()).toEqual(true);

  expect(new MyDate(20, 6, 2020).nextDay()).toEqual("21/6/2020");
  expect(new MyDate(31, 1, 2020).nextDay()).toEqual("1/2/2020");
  expect(new MyDate(28, 2, 2020).nextDay()).toEqual("29/2/2020");
  expect(new MyDate(31, 12, 2020).nextDay()).toEqual("1/1/2021");
});
