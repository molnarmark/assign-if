✔Assign If

> call `Object.assign` if the passed expression evaluates to true.

## Usage
```javascript
const assignIf = require('assign-if');

const evaluation = assignIf({a: 1, b: 2}, {c: 3}, 5 > 4);
//=> {success: true, object: {a: 1, b: 2, c: 3}}

const evaluation2 = assignIf({a: 1, b: 2}, {c: 3}, 1 == 2);
//=> {success: false, object: {a: 1, b: 2}}
```

## License
- MIT