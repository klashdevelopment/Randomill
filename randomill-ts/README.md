# Randomill TS
A typescript random data library.

Import it:
```ts
import {string, number, StringType} from 'randomill-ts';
```
or require it:
```js
const {string, number, StringType} = require('randomill-ts');
```

### Use It

1. Numbers
```ts
number(); // Can be used simply (0-1),
number(10); // With a minimum,
number(10, 50); // Or a maximum.
```

2. Strings

Randomill provides all types of data for strings, all shown in the StringType enum:
```
    GibberishLetters,
    GibberishNumbers,
    Gibberish,
    FirstName,
    LastName,
    City,
    Country,
    Email,
    USState,
    PhoneNumber
```

Simply use one of these:
```ts
string(StringType.FirstName);

// For Gibberish, GibberishLetters, and GibberishNumbers, you may also provide a length.
string(StringType.Gibberish, 15);
```