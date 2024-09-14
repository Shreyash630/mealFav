const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const mealList = document.getElementById('meal-list');
let favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];

// Add event listener to search button
searchButton.addEventListener('click', searchMeal);

// Add event listener to search input for "Enter" key press
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchMeal();
    }
});

// Function to search for meals
function searchMeal() {
    const searchValue = searchInput.value.toLowerCase();
    const meals = mealList.getElementsByTagName('li');

    for (let i = 0; i < meals.length; i++) {
        const mealName = meals[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (mealName.includes(searchValue)) {
            meals[i].style.display = 'block';
        } else {
            meals[i].style.display = 'none';
        }
    }
}

// Add favorite button functionality
const favoriteButtons = document.querySelectorAll('btn-fav');
favoriteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const mealItem = mealList.children[index]; // Get corresponding meal item
        const mealName = mealItem.getElementsByTagName('h3')[0].textContent;
        const mealImage = mealItem.getElementsByTagName('img')[0].src; // Get image source

        // Check if the meal is already in favorites
        const mealData = { name: mealName, image: mealImage };
        const mealExists = favoriteMeals.some(meal => meal.name === mealName);

        if (!mealExists) {
            favoriteMeals.push(mealData);
            localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals)); // Save to local storage
            alert(`${mealName} added to favorites!`);
        } else {
            alert(`${mealName} is already in favorites!`);
        }
    });
});

// Ensure favorites are correctly saved in local storage
window.addEventListener('load', () => {
    favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
});