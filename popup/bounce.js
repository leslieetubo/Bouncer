// Array of random sentences
const sentences = [
	"\"I am one man So I can only block YouTube ads. Don't get too comfy.\"",
	"To YouTube ads. For honor and glory!",
    "To YouTube ads. To victory, my comrades!",
    "To YouTube ads. By the sword, I shall conquer!",
    "To YouTube ads. Onward, to battle!",
    "To YouTube ads. I fear no foe!",
    "To YouTube ads. A warrior's heart knows no fear!",
    "To YouTube ads. Stand strong, stand tall!",
    "To YouTube ads. For king and country!",
    "To YouTube ads. Steel and valor!",
    "To YouTube ads. With fire in our hearts!",
    "To YouTube ads. For the fallen, we fight!",
    "To YouTube ads. In the name of justice!",
    "To YouTube ads. Today, we earn our place in history!",
    "To YouTube ads. To the last breath!",
    "To YouTube ads. Victory or death!",
    "To YouTube ads. No retreat, no surrender!",
    "To YouTube ads. By my blade, you shall fall!",
    "To YouTube ads. I am the storm!",
    "To YouTube ads. Warriors, unite!",
    "To YouTube ads. Blood and thunder!"
];

// Function to type a sentence with a typewriter effect
function typeSentence(sentence, index, delay) {
	if (index < sentence.length) {
		document.getElementById("typing-container").textContent += sentence.charAt(index);
		setTimeout(() => {
			typeSentence(sentence, index + 1, delay);
		}, delay);
	}
}

// Function to type random sentences after a delay
function typeRandomSentences() {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const randomSentence = sentences[randomIndex];
	document.getElementById("typing-container").textContent = ""; // Clear previous text
	typeSentence(randomSentence, 0, 50); // Adjust the delay as needed
}

// Delay in milliseconds before typing starts
const initialDelay = 1000; // 1 seconds

// Start typing random sentences after the initial delay
setTimeout(typeRandomSentences, initialDelay);
