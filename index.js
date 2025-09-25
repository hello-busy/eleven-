#!/usr/bin/env node

/**
 * Eleven Counter - A simple program that demonstrates counting to eleven
 * This project shows basic JavaScript functionality and demonstrates
 * counting, arrays, and string manipulation.
 */

class ElevenCounter {
    constructor() {
        this.numbers = [];
        this.target = 11;
    }

    /**
     * Count from 1 to eleven and store the results
     * @returns {Array} Array of numbers from 1 to 11
     */
    countToEleven() {
        this.numbers = [];
        for (let i = 1; i <= this.target; i++) {
            this.numbers.push(i);
        }
        return this.numbers;
    }

    /**
     * Get a formatted string representation of the count
     * @returns {string} Formatted count string
     */
    getFormattedCount() {
        const numbers = this.countToEleven();
        return `Counting to eleven: ${numbers.join(', ')}`;
    }

    /**
     * Check if we've reached eleven
     * @returns {boolean} True if the last number is 11
     */
    hasReachedEleven() {
        return this.numbers.length > 0 && this.numbers[this.numbers.length - 1] === 11;
    }

    /**
     * Get the sum of all numbers from 1 to 11
     * @returns {number} The sum (should be 66)
     */
    getSum() {
        const numbers = this.countToEleven();
        return numbers.reduce((sum, num) => sum + num, 0);
    }
}

// Main execution
function main() {
    console.log('🎯 Welcome to the Eleven Counter!');
    console.log('='.repeat(40));
    
    const counter = new ElevenCounter();
    
    // Demonstrate counting
    console.log(counter.getFormattedCount());
    
    // Show additional info
    console.log(`\n📊 Statistics:`);
    console.log(`   • Total numbers: ${counter.numbers.length}`);
    console.log(`   • Sum of all numbers: ${counter.getSum()}`);
    console.log(`   • Reached eleven: ${counter.hasReachedEleven() ? '✅ Yes' : '❌ No'}`);
    
    console.log('\n🎉 Mission accomplished - we counted to eleven!');
}

// Export for testing
module.exports = { ElevenCounter };

// Run main function if this file is executed directly
if (require.main === module) {
    main();
}