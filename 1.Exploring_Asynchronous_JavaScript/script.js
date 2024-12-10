// Task 1: Configuration
const baseUrl = "https://gateway.marvel.com/v1/public/characters";
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
const limit = 10; // Number of characters to fetch per request

// Task 2: Fetch Marvel Characters
async function fetchMarvelCharacters() {
  try {
    const response = await fetch(`${baseUrl}?apikey=${apiKey}&limit=${limit}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Fetched characters:", data.data.results);
    return data.data.results;
  } catch (error) {
    console.error("Failed to fetch characters:", error);
    return [];
  }
}

// Task 3: Update User Interface
async function displayCharacters() {
  const charactersContainer = document.getElementById("characters");
  const characters = await fetchMarvelCharacters();

  // Clear the container
  charactersContainer.innerHTML = "";

  // Populate the UI with character information
  characters.forEach(character => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character");

    const img = document.createElement("img");
    img.src = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    img.alt = character.name;

    const name = document.createElement("h3");
    name.textContent = character.name;

    characterDiv.appendChild(img);
    characterDiv.appendChild(name);
    charactersContainer.appendChild(characterDiv);
  });
}

// Trigger display of characters when the page loads
document.addEventListener("DOMContentLoaded", displayCharacters);
