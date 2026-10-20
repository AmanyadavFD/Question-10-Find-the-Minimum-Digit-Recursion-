
/*
Let's go! 🔥 You're ready for the next recursion challenge. We'll continue one question at a time, and I won't give you the solution unless you ask.

# Question 10 — Find the Minimum Digit 🟡

Given a positive integer `n`, write a recursive function that returns the smallest digit in that number.

For example:

```
function minDigit(n) {
    // Your code
}

console.log(minDigit(58329));
```

Expected output:

```
2
```

Because the digits are `5, 8, 3, 2, 9`, and the smallest is `2`.

Another example:

```
minDigit(7416) → 1
minDigit(9285) → 2
minDigit(555)  → 5
```

### Your constraints

- Use recursion only.
- No loops.
- Don't convert the number to a string.
- Don't use `Math.min()`.

### Hints to get started

You already know how to extract the last digit:

```
let lastDigit = n % 10;
```

And how to remove it:

```
Math.floor(n / 10)
```

Think about the pattern you used in `maxDigit()`:

1. What should your base case return?
2. How do you get the minimum digit from the remaining number?
3. How do you compare the current digit with the recursive result?

Your turn: Write `minDigit()` and send me your code. I'll review your attempt and give you hints if you get stuck.

*/

function minDigit(n) {
    // Your code
    if(n === 0) return Infinity;
    let lastDigit = Math.floor(n%10);
    let recursiveCall = minDigit(Math.floor(n/10));
    if(lastDigit < recursiveCall){
        return lastDigit
    }else{
        return  recursiveCall
    }
}

console.log(minDigit(58329));