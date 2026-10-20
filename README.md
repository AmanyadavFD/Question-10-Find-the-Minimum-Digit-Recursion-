# Question 10 --- Find the Minimum Digit (Recursion)

## Problem

Given a positive integer `n`, write a recursive function `minDigit(n)`
that returns the smallest digit in the number.

### Examples

``` text
minDigit(58329) → 2
minDigit(7416)  → 1
minDigit(9285)  → 2
minDigit(555)   → 5
```

## Constraints

-   Use recursion only.
-   Do not use loops.
-   Do not convert the number to a string.
-   Do not use `Math.min()`.

## My Solution

``` javascript
function minDigit(n) {
    if (n === 0) return Infinity;

    const lastDigit = Math.floor(n % 10);
    const recursiveCall = minDigit(Math.floor(n / 10));

    if (lastDigit < recursiveCall) {
        return lastDigit;
    } else {
        return recursiveCall;
    }
}

console.log(minDigit(58329)); // 2
```

## How It Works

1.  `n % 10` extracts the last digit.
2.  `Math.floor(n / 10)` removes the last digit.
3.  The recursive call finds the minimum digit among the remaining
    digits.
4.  The function compares the last digit with the recursive result and
    returns the smaller one.
5.  When `n` becomes `0`, the base case returns `Infinity`, allowing the
    last remaining digit to be selected as the minimum.

## Dry Run: `minDigit(58329)`

  Call                  Last digit   Remaining number
  ------------------- ------------ ------------------
  `minDigit(58329)`              9               5832
  `minDigit(5832)`               2                583
  `minDigit(583)`                3                 58
  `minDigit(58)`                 8                  5
  `minDigit(5)`                  5                  0

The recursive calls return back up the call stack, comparing each digit
with the minimum found so far:

-   `minDigit(5)` returns `5`
-   `minDigit(58)` returns `5`
-   `minDigit(583)` returns `3`
-   `minDigit(5832)` returns `2`
-   `minDigit(58329)` returns `2`

**Final output:**

``` text
2
```

## Key Learning

This problem practices recursion, base cases, extracting digits with
`% 10`, removing digits with `Math.floor(n / 10)`, and comparing a
current value with a recursive result.

> Note: This solution follows the challenge's positive-integer
> constraint. Returning `Infinity` for `n === 0` is a sentinel base case
> that lets the final digit be compared normally.
