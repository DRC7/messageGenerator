

//Define an array of words to be used in the messages
const words = ["exciting", "fantastic", "inspiring", "challenging", "rewarding"]

// Define an array of phrases to be used in the messages
const phrases = ["journey ahead", "adventure awaits", "path to success", "road to greatness", "opportunities ahead", "bright future"]

// Define an array of endings to be used in the messages
const endings = ["just begin!", "let's go", "get started!", "let's do it!", "let's rock!", "let's get it!"]

// Define an object to store the arrays of data
const data = {
    words: words,
    phrases: phrases,
    endings: endings

}

// Define a function to generate a random index based on the length of an array
function generateIndex(array) {
    return Math.floor(Math.random() * array.length)
}

// Define a function to generate a random message 
function generateMessage(data) {
    // Use the generateIndex function to get a random index for each array 
    const wordIndex = generateIndex(data.words)
    const phraseIndex = generateIndex(data.phrases)
    const endingIndex = generateIndex(data.endings)

    // Use template literals to assemble the message

    const message = `It's going to be a ${data.words[wordIndex]} ${data.phrases[phraseIndex]}! ${data.endings[endingIndex]}`
    
    

    return message
}

const message = generateMessage(data)
console.log(message)

const messageId = document.getElementById('message-display')
const btn = document.getElementById('btn')

btn.addEventListener("click", () => {
    messageId.innerHTML = generateMessage(data)
})

messageId.innerHTML = generateMessage(data)

