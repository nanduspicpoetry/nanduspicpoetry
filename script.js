const gallery = document.getElementById('gallery');
const addPoemBtn = document.getElementById('addPoemBtn');

// Example poems
const poems = [
    {
        img: "https://source.unsplash.com/400x300/?lavender,poetry",
        text: "Whispers of lavender skies,\nPainting dreams in my weary eyes."
    },
    {
        img: "https://source.unsplash.com/400x300/?sunset,fields",
        text: "Golden fields where silence weeps,\nAnd every petal a secret keeps."
    }
];

// Function to create a new poetry card
function createPoetryCard(poem) {
    const card = document.createElement('div');
    card.className = 'poetry-card';

    const img = document.createElement('img');
    img.src = poem.img;
    img.alt = "Poetry Image";

    const para = document.createElement('p');
    para.textContent = poem.text;

    card.appendChild(img);
    card.appendChild(para);

    gallery.appendChild(card);
}

// Load existing poems
poems.forEach(createPoetryCard);

// Handle adding a new poem
addPoemBtn.addEventListener('click', () => {
    const newPoem = {
        img: "https://source.unsplash.com/400x300/?nature,poetry",
        text: "Another verse in petals spun,\nAnother story just begun."
    };
    createPoetryCard(newPoem);
});
