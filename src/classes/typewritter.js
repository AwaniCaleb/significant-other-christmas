/**
 * Static class for creating a typewriter effect.
 * This class provides an easy way to animate text as if it were being typed character by character.
 */
class Typewriter {
    // Static variables to store the text, the current position, and the speed
    static currentPosition = 0; // Tracks the current character index
    static text = '';           // The text to be typed
    static speed = 50;          // Typing speed in milliseconds

    /**
     * Initializes and starts the typewriter effect.
     * @param {string} targetId - The ID of the HTML element where text will appear.
     * @param {string} textContent - The text to be displayed as a typewriter effect.
     * @param {number} typingSpeed - The speed of typing in milliseconds (default is 50ms).
     */
    static start(targetId, textContent, typingSpeed = 50) {
        this.text = textContent;      // Assign the text to be typed
        this.currentPosition = 0;     // Reset the character index
        this.speed = typingSpeed;     // Set the typing speed

        // Clear the target element before starting
        document.getElementById(targetId).innerHTML = '';

        // Begin the typing process
        this.#type(targetId);
    }

    /**
     * Private method that handles typing one character at a time.
     * Uses recursion with setTimeout to simulate typing delay.
     * @param {string} targetId - The ID of the target HTML element.
     */
    static #type(targetId) {
        // Ensure we haven't finished typing
        if (this.currentPosition < this.text.length) {
            // Append the next character to the element
            document.getElementById(targetId).innerHTML += this.text.charAt(this.currentPosition);

            // Increment to move to the next character
            this.currentPosition++;

            // Call this method again after a delay (simulates typing speed)
            setTimeout(() => this.#type(targetId), this.speed);
        }
    }
}

// Example usage
// Call the typewriter effect on an element with ID 'demo'
// Typewriter.start("demo", "Lorem ipsum typing effect!", 50);
