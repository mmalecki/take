# take
Run tests on various versions of node.js/io.js using [give](https://github.com/mmalecki/give).

## Installation

```sh
npm -g install take
```

You can also install it as a `devDependency`, if you want to use it to run
tests on a package.

```sh
npm install --save-dev take
```

## Usage
```sh
take "node v0.12.0" "iojs v1.3.0" "npm test"
```

## package.json
```json
{
  "name": "take-example",
  "version": "0.0.0",
  "devDependencies": {
    "take": "^1.0.0"
  },
  "scripts": {
    "test": "node test/simple-test.js",
    "take": "take \"node v0.12.0\" \"iojs v1.3.0\" \"npm test\""
  },

