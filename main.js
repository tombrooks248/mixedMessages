const messages = ["Christmas is great", "elf on the shelf", "London Bridge is falling donw", " random message 4"]

const randomArrayGenerator = (array) => {
    return Math.floor(Math.random(0,1)*array.length)
}

console.log(messages[randomArrayGenerator(messages)])


// I these are some comments to see if I can put them into github