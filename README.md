# super-context-service

This module utilize _`express-http-context`_ package in order to create a dynamic context for requests between node services.

## Installation
`npm install --save super-context-service` then use it in project

## Functions
super-context-service uses a number of methods:

- `middleware` - a middleware that should be used in your express app in order to init the context (_See example below_)
- `get(key: String): any` - get a specific value from context
- `getFullContext(): any` - get the full context object or null if context is not define
- `set(key: String, value: any): void` - set a value in current context

## Example

```sh
// main.js
...
const httpContext = require('super-context-service');
const app = express();
...
app.use(httpContext.middleware);
...
```

You can then set values on the context

```sh
// file1.js
const httpContext = require('super-context-service');

httpContext.set('test', 123);
```

and then in other places in code you can use it:

```sh
// file2.js
const httpContext = require('super-context-service');

const item = httpContext.get('test');
console.log(item); // Will print 123
```