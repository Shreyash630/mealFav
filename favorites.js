// Get the favorite list element
const favoriteList = document.getElementById('favorite-list');

// Load favorite meals from localStorage
let favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];

// Function to display favorite meals
function displayFavorites() {
    // Clear the list first
    favoriteList.innerHTML = '';

    if (favoriteMeals.length === 0) {
        favoriteList.innerHTML = '<p>No favorite meals added yet.</p>';
    } else {
        favoriteMeals.forEach(meal => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const mealName = document.createElement('p');

            img.src = meal.image; // Set the image source
            img.alt = meal.name; // Alt text for the image
            img.style.width = '100px'; // Adjust image size
            img.style.height = '100px';
            mealName.textContent = meal.name;

            li.appendChild(img);
            li.appendChild(mealName);

            favoriteList.appendChild(li);
        });
    }
}

// Call the function to display favorites on page load
displayFavorites();