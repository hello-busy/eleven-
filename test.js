#!/usr/bin/env node

/**
 * Simple test suite for the Eleven Counter
 * This demonstrates basic testing functionality without external dependencies
 */

const { ElevenCounter } = require('./index.js');

class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }

    /**
     * Add a test case
     * @param {string} name - Test name
     * @param {Function} testFn - Test function that should return true if passed
     */
    test(name, testFn) {
        this.tests.push({ name, testFn });
    }

    /**
     * Run all tests and report results
     */
    run() {
        console.log('🧪 Running Eleven Counter Tests');
        console.log('='.repeat(40));

        this.tests.forEach(({ name, testFn }) => {
            try {
                const result = testFn();
                if (result) {
                    console.log(`✅ ${name}`);
                    this.passed++;
                } else {
                    console.log(`❌ ${name} - Test returned false`);
                    this.failed++;
                }
            } catch (error) {
                console.log(`❌ ${name} - Error: ${error.message}`);
                this.failed++;
            }
        });

        console.log('\n📊 Test Results:');
        console.log(`   • Passed: ${this.passed}`);
        console.log(`   • Failed: ${this.failed}`);
        console.log(`   • Total: ${this.tests.length}`);

        if (this.failed === 0) {
            console.log('\n🎉 All tests passed!');
            process.exit(0);
        } else {
            console.log('\n💥 Some tests failed!');
            process.exit(1);
        }
    }
}

// Create test runner and add tests
const runner = new TestRunner();

runner.test('ElevenCounter can be instantiated', () => {
    const counter = new ElevenCounter();
    return counter instanceof ElevenCounter;
});

runner.test('countToEleven returns array of 11 numbers', () => {
    const counter = new ElevenCounter();
    const result = counter.countToEleven();
    return Array.isArray(result) && result.length === 11;
});

runner.test('countToEleven returns correct sequence', () => {
    const counter = new ElevenCounter();
    const result = counter.countToEleven();
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    return JSON.stringify(result) === JSON.stringify(expected);
});

runner.test('hasReachedEleven returns true after counting', () => {
    const counter = new ElevenCounter();
    counter.countToEleven();
    return counter.hasReachedEleven() === true;
});

runner.test('getSum returns correct sum (66)', () => {
    const counter = new ElevenCounter();
    const sum = counter.getSum();
    return sum === 66; // 1+2+3+...+11 = 66
});

runner.test('getFormattedCount returns string with all numbers', () => {
    const counter = new ElevenCounter();
    const formatted = counter.getFormattedCount();
    return typeof formatted === 'string' && 
           formatted.includes('1') && 
           formatted.includes('11') &&
           formatted.includes('Counting to eleven');
});

// Run the tests
runner.run();