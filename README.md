# eleven- 🎯

A simple and elegant Node.js project that demonstrates counting to eleven with style!

## Overview

This project showcases basic JavaScript programming concepts including:
- Object-oriented programming with ES6 classes
- Array manipulation and iteration
- Mathematical operations and validation
- Simple testing without external dependencies
- Clean, documented code structure

## Features

- 🔢 **Count to Eleven**: Generates numbers from 1 to 11
- 📊 **Statistics**: Calculates sum and provides counting metrics
- ✅ **Validation**: Confirms when eleven is reached
- 🎨 **Formatted Output**: Beautiful console display with emojis
- 🧪 **Built-in Tests**: Comprehensive test suite included

## Installation

No external dependencies required! Just Node.js.

```bash
git clone https://github.com/hello-busy/eleven-.git
cd eleven-
```

## Usage

### Run the main application:
```bash
npm start
# or
node index.js
```

### Run the test suite:
```bash
npm test
# or 
node test.js
```

## Example Output

```
🎯 Welcome to the Eleven Counter!
========================================
Counting to eleven: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11

📊 Statistics:
   • Total numbers: 11
   • Sum of all numbers: 66
   • Reached eleven: ✅ Yes

🎉 Mission accomplished - we counted to eleven!
```

## API

The `ElevenCounter` class provides the following methods:

- `countToEleven()` - Returns an array of numbers from 1 to 11
- `getFormattedCount()` - Returns a formatted string representation
- `hasReachedEleven()` - Checks if counting has reached 11
- `getSum()` - Calculates the sum of all numbers (1+2+...+11 = 66)

## Testing

The project includes a simple test runner that validates:
- Class instantiation
- Correct array generation
- Proper sequence validation
- Sum calculation accuracy
- String formatting

All tests are self-contained and require no external testing frameworks.

## License

MIT License - feel free to use this code for learning and demonstration purposes!