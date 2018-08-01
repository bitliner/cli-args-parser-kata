cli-args-parser-kata
===
The goal of this program is to model a cli arguments parser. Given a series of input the program should produce a valid output according to the following specification.

## How to run the test
First of all you need to run
```
npm install
```
And than you can run the tests
```
npm test
```

## Specification
Choose one of the following input formats:
- string like arguments `"--foo bar"`
- array like arguments `["--foo", "bar"]`

### 1. parse a `simple` flags
  given the following input:
  ```sh
  --foo
  ```
  the program should produce either a dictionary or a JSON object as follows:
  ```JSON
  {"foo": true}
  ```

### 2. parse a `composite` flags
  given the following input:
  ```sh
  --foo bar
  ```
  the program should produce either a dictionary or a JSON object as follows:
  ```JSON
  {"foo": "bar"}
  ```

### 3. parse a `composite` flags with integer values
  given the following input:
  ```sh
  --number 1
  ```
  the program should produce either a dictionary or a JSON object as follows:
  ```JSON
  {"number": 1}
  ```

### 4. parse multiple flags at once
  given the following input:
  ```sh
  --foo --bar baz --number 1
  ```
  the program should produce either a dictionary or a JSON object as follows:
  ```JSON
  {"bar": "baz", "foo": true, "number": 1}
  ```

### 5. handle multiple values for the same flag
  given the following input:
  ```sh
  --foo --bar baz --bar zab --number 1
  ```
  the program should produce either a dictionary or a JSON object as follows:
  ```JSON
  {"bar": ["baz", "zab"], "foo": true, "number": 1}
  ```

### 6. try to support both `string` and `array` input formats
within the same function or a new function one of your choice.

**IMPORTANT:**  Implement the requirements focusing on **writing the best code** you can produce.

Credits to [Ivo Putzer](https://github.com/ivoputzer) for the original idea.
