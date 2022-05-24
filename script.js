// 1. Do the below programs in anonymous function & IIFE.

// A.Print odd numbers in an array(Anonymous Function)

var odd = function (a) {
    var c = [];
    for (var i = 0; i <= a.length; i++) {
        if (a[i] % 2 == 1)
            c.push(a[i]);
    }
    return c;
}
var n = [1, 2, 3, 4, 5, 6];
console.log(odd(n));

//  Result: [1, 3, 5]

// A.Print odd numbers in an array(IIFE)

(function (a) {
    var c = [];
    for (var i = 0; i <= a.length; i++) {
        if (a[i] % 2 == 1)
            c.push(a[i]);
    }
    console.log(c);
})([6, 7, 8, 9, 10, 11]);

// Result: [7, 9, 11]

// ---------------------------------------------------------------------

// B. Convert all the strings to title caps in a string array(Anonymous Function)

var titleCase = function (a) {
    a = a.toLowerCase().split(' ');
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    return a.join(' ');
}
console.log(titleCase("Convert all the strings to title caps in a string array"));

// Result: Convert All The Strings To Title Caps In A String Array


// B. Convert all the strings to title caps in a string array(IIFE)

(function titleCase(a) {
    a = a.toLowerCase().split(' ');
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    console.log(a.join(' '));
})("Convert all the strings to title caps in a string array");

// Result: Convert All The Strings To Title Caps In A String Array

// ---------------------------------------------------------------------

// C. Sum of all numbers in an array(Anonymous Function)

var sum = function (a) {
    var c = 0;
    for (var i = 0; i < a.length; i++) {
        c += a[i]
    }
    return c;
}
console.log(sum([21, 22, 23, 24, 25, 26]));

// Result: 141

// C. Sum of all numbers in an array(IIFE)

(function (a) {
    var c = 0;
    for (var i = 0; i < a.length; i++) {

        c += a[i]
    }
    console.log(c);
})([21, 22, 23, 24, 25, 26]);

// Result: 141

// ---------------------------------------------------------------------

// D. Return all the prime numbers in an array(Anonymous Function)

var num = function (a) {
    a = a.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    return a
}
console.log(num([2, 3, 4, 5, 11, 7, 8, 9, 10, 20, 27, 28, 29, 33, 37, 38]));

// Result: [2, 3, 5, 11, 7, 29, 37]

// D. Return all the prime numbers in an array(IIFE)

(function (a) {
    a = a.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(a)
})([2, 3, 4, 5, 11, 7, 8, 9, 10, 20, 27, 28, 29, 33, 37, 38]);

// Result: [2, 3, 5, 11, 7, 29, 37]

// ---------------------------------------------------------------------

// E. Return all the palindromes in an array(Anonymous Function)

var palindrome = function (a) {
    var c = [];
    for (var i = 0; i < (a.length); i++) {

        var b = a[i].toString().split("")

        for (var j = (b.length); j > 0; j--) {
            if ((b[j - 1]) == (b[b.length - j])) {
                if (j == 1) {
                    c.push(a[i]);
                }
            } else {
                break;
            }
        }
    }
    return c;

}
console.log(palindrome(["reviver", "signature", "sequence", "level", "deified"]));

// Result: ['reviver', 'level', 'deified']

// E. Return all the palindromes in an array(IIFE)

(function (a) {
    var c = [];
    for (var i = 0; i < (a.length); i++) {

        var b = a[i].toString().split("")

        for (var j = (b.length); j > 0; j--) {

            if ((b[j - 1]) == (b[b.length - j])) {
                if (j == 1) {
                    c.push(a[i]);
                }
            } else {
                break;
            }
        }
    }
    console.log(c)
})(["reviver", "signature", "sequence", "level", "deified"]);

// Result: ['reviver', 'level', 'deified']

// ---------------------------------------------------------------------

// F. Return median of two sorted arrays of the same size(Anonymous Function)

let median = function (a, b, n) {
    let x = 0;
    let y = 0;
    let count;
    let m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++) {
        if (x == n) {
            m1 = m2;
            m2 = b[0];
            break;
        }
        else if (y == n) {
            m1 = m2;
            m2 = a[0];
            break;
        }
        if (a[x] <= b[y]) {
            m1 = m2;
            m2 = a[x];
            x++;
        }
        else {
            m1 = m2;
            m2 = b[y];
            y++;
        }
    }
    return ((m1 + m2) / 2);
};
console.log(median([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 5));

// Result: 5.5

// F. Return median of two sorted arrays of the same size(IIFE)

(function (a, b, n) {
    let i = 0;
    let j = 0;
    let count;
    let m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++) {
        if (i == n) {
            m1 = m2;
            m2 = b[0];
            break;
        }
        else if (j == n) {
            m1 = m2;
            m2 = a[0];
            break;
        }
        if (a[i] <= b[j]) {
            m1 = m2;
            m2 = a[i];
            i++;
        }
        else {
            m1 = m2;
            m2 = b[j];
            j++;
        }
    }
    console.log((m1 + m2) / 2);

})([1, 2, 3], [6, 7, 8], 5);

// Result: 7.5

// ---------------------------------------------------------------------

// G. Remove duplicates from an array(Anonymous Function)

var unique = function (a) {

    let uniqueArr = [];


    for (let i of a) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    return (uniqueArr);
}
console.log(unique([1, 2, 3, 2, 6, 7, 3, 7, 8, 9]));

// Result: [1, 2, 3, 6, 7, 8, 9]

// G. Remove duplicates from an array(IIFE)

(function (a) {
    var uniqueArr = [];
    for (let i of a) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }

    }
    console.log(uniqueArr)
})([1, 2, 3, 2, 6, 7, 3, 7, 8, 9]);

// Result: [1, 2, 3, 6, 7, 8, 9]

// ---------------------------------------------------------------------

// H. Rotate an array by k times(Anonymous Function)

var rotate = function (a, k) {
    for (var i = 0; i < k; i++) {
        a.unshift(a.pop());
    }
    return a;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 3));

// Result: [4, 5, 6, 1, 2, 3]

// H. Rotate an array by k times(IIFE)

(function (a, k) {
    for (var i = 0; i < k; i++) {
        a.unshift(a.pop());
    }
    console.log(a)
})([5, 6, 7, 8, 9], 3);

// Result: [7, 8, 9, 5, 6]

// ===============================================================================================================================================================================
// ===============================================================================================================================================================================

// 3. Do the below programs in arrow functions

// A. Print odd numbers in an array.

var odd = (a) => {
    var c = [];
    for (var i = 0; i <= a.length; i++) {
        if (a[i] % 2 == 1)
            c.push(a[i]);
    }
    return c;
}
var a = odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(a);

// Result: [1, 3, 5, 7, 9]

// -----------------------------------------------------------------------

// B. Convert all the strings to title caps in a string array.

var titleCase = (a) => {
    a = a.toLowerCase().split(' ');
    for (var i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    return a.join(' ');
}
var a = titleCase("convert all the strings to title caps in a string array");
console.log(a);

// Result: Convert All The Strings To Title Caps In A String Array

// -----------------------------------------------------------------------

// C. Sum of all numbers in an array

var sum = (a) => {
    var c = 0;
    for (var i = 0; i < a.length; i++) {
        c += a[i]
    }
    return c;
}
var a = sum([10, 20, 30, 40])
console.log(a)

// Result: 100

// ------------------------------------------------------------------------

// D. Return all the prime numbers in an array.

var num = (a) => {
    a = a.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    return a
}
var a = num([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 25, 27, 37, 39, 59, 66]);
console.log(a);

// Result: [1, 2, 3, 5, 7, 11, 37, 59]

// -------------------------------------------------------------------------

// E. Return all the palindromes in an array.

var palindrome = (a) => {
    var z = [];
    for (var i = 0; i < (a.length); i++) {

        var y = a[i].toString().split("")

        for (var x = (y.length); x > 0; x--) {

            if ((y[x - 1]) == (y[y.length - x])) {
                if (x == 1) {
                    z.push(a[i]);
                }
            } else {
                break;
            }
        }
    }
    return z;

}
var a = palindrome(["reviver", "signature", "sequence", "level", "deified"])
console.log(a);

// Result: ['reviver', 'level', 'deified']

// ----------------------------------------------------------------------------
