// List of boba quotes
const bobaQuotes = [
    "Sip, sip, hooray!",
    "You're the pearl to my tea!",
    "Happiness is a full cup of boba!",
    "Keep calm and boba on!",
    "Boba: little pearls of joy!"
];

// Handle adding regular boba pearls
document.getElementById('add-boba').addEventListener('click', () => {
    const bobaPearlsContainer = document.getElementById('boba-pearls');
    const bobaPearl = document.createElement('div');
    bobaPearl.className = 'boba-pearl';

    // Randomize pearl position
    bobaPearl.style.left = Math.random() * 120 + 'px';
    bobaPearl.style.bottom = Math.random() * 50 + 'px';

    bobaPearlsContainer.appendChild(bobaPearl);

    // Update the quote
    const randomQuote = bobaQuotes[Math.floor(Math.random() * bobaQuotes.length)];
    document.getElementById('boba-quote').innerText = randomQuote;
});

// Handle adding blue boba pearls
document.getElementById('add-boba-blue').addEventListener('click', () => {
    const bobaPearlsContainer = document.getElementById('boba-pearls');
    const bobaPearl = document.createElement('div');
    bobaPearl.className = 'boba-pearl boba-blue'; // Apply blue class

    bobaPearl.style.left = Math.random() * 120 + 'px';
    bobaPearl.style.bottom = Math.random() * 50 + 'px';

    bobaPearlsContainer.appendChild(bobaPearl);

    // Update quote for blue pearl
    document.getElementById('boba-quote').innerText = "Blue pearls for a refreshing sip!";
});

// Handle adding red boba pearls
document.getElementById('add-boba-red').addEventListener('click', () => {
    const bobaPearlsContainer = document.getElementById('boba-pearls');
    const bobaPearl = document.createElement('div');
    bobaPearl.className = 'boba-pearl boba-red'; // Apply red class

    bobaPearl.style.left = Math.random() * 120 + 'px';
    bobaPearl.style.bottom = Math.random() * 50 + 'px';

    bobaPearlsContainer.appendChild(bobaPearl);

    // Update quote for red pearl
    document.getElementById('boba-quote').innerText = "Red pearls for a sweet touch!";
});

// Handle adding milk (default white milk)
document.getElementById('add-bobamilk').addEventListener('click', () => {
    const milkLayer = document.getElementById('boba-milk');
    let currentHeight = parseInt(window.getComputedStyle(milkLayer).height) || 0;

    if (currentHeight < 200) {
        milkLayer.style.height = (currentHeight + 20) + 'px';
    }

    // Update quote for milk
    document.getElementById('boba-quote').innerText = "A creamy touch makes everything better!";
});

// Handle adding mango milk
document.getElementById('add-boba-mango').addEventListener('click', () => {
    const milkLayer = document.getElementById('boba-milk');
    let currentHeight = parseInt(window.getComputedStyle(milkLayer).height) || 0;

    if (currentHeight < 200) {
        milkLayer.style.height = (currentHeight + 20) + 'px';
        milkLayer.style.backgroundColor = "#ffcc00"; // Mango milk color
    }

    // Update quote for mango milk
    document.getElementById('boba-quote').innerText = "Mango milk for a tropical twist!";
});

// Handle adding a straw
document.getElementById('add-boba-straw').addEventListener('click', () => {
    const strawContainer = document.getElementById('boba-straws');
    const straw = document.createElement('div');
    straw.className = 'straw';
    
    // Add a flower to the straw
    const flower = document.createElement('div');
    flower.className = 'flower';
    straw.appendChild(flower);

    strawContainer.appendChild(straw);

    // Update quote for straw
    document.getElementById('boba-quote').innerText = "A straw to sip the sweetness!";
});

// Handle saving the boba creation
document.getElementById('save-boba').addEventListener('click', () => {
    // Show the message box
    document.getElementById('message-box').style.display = 'block';
});

// Handle submitting the message
document.getElementById('submit-message').addEventListener('click', () => {
    const userMessage = document.getElementById('user-message').value;
    
    if (userMessage) {
        // Display the saved message
        document.getElementById('boba-saved-message').innerText = `Your message: "${userMessage}"`;
    }

    // Hide the message box after submission
    document.getElementById('message-box').style.display = 'none';

    // Clear the textarea
    document.getElementById('user-message').value = '';
});
