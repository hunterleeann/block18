const { concatOdds, multiplication } = "./index.js";
//const multiplication = "./index.js";

test("testing concatOdds", () => {
  expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toBe([
    -1, 1, 3, 9, 15,
  ]);
});

test("testing concatOdds test 2", () => {
  expect(concatOdds([3, 7, 4], [9, 3, 11, 1, 4, 15, 13, 6, 9, 8, 8])).toBe([
    1, 3, 3, 7, 9, 13, 15,
  ]);
});

test("testing concatOdds test 3", () => {
  expect(concatOdds([5, 5, 4, 4, 8], [1, 15, 48, 39, 75])).toBe([
    1, 5, 5, 15, 39, 75,
  ]);
});

test("testing 2*35", () => {
  expect(multiplication(2, 35)).toBe(70);
});

test("testing 2*50", () => {
  expect(multiplication(2, 50)).toBe(100);
});

test("testing 3*9", () => {
  expect(multiplication(3, 9)).toBe(27);
});

/* Funtional tests: 

1. if cart is empty and client tries to check out, result should display "cart is empty. Add items to checkout" 
2. if user is logged in, prompt should ask if card information and shipping information should be saved after added. 
3. If user is checking out as a guest there should not be any option to save payment and shipping information.
*/
