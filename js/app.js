// === Assignment 2: Fetch, async/await, API, JSON & Array Methods ===

// Hämtar data från TheMealDB API
const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";

async function fetchMeals() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    const meals = data.meals;
    console.log("Totalt antal måltider:", meals.length);

    // 1️⃣ Sortera och skriv ut de 5 första måltiderna i alfabetisk ordning
    const sortedMeals = meals
      .map(meal => meal.strMeal)
      .sort((a, b) => a.localeCompare(b))
      .slice(0, 5);
    console.log("Första 5 måltider i alfabetisk ordning:", sortedMeals);

    // 2️⃣ Filtrera måltider med viss kategori
    const chosenCategory = "Chicken";
    const filteredMeals = meals.filter(
      meal => meal.strCategory?.toLowerCase() === chosenCategory.toLowerCase()
    );
    console.log(`Måltider med kategorin "${chosenCategory}":`);
    filteredMeals.forEach(meal =>
      console.log(`- ${meal.strMeal} (${meal.strCategory})`)
    );

    // 3️⃣ Räkna hur många gånger varje kategori förekommer
    const categoryCount = meals.reduce((acc, meal) => {
      const category = meal.strCategory;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});
    console.log("Antal måltider per kategori:", categoryCount);

    // ⭐ Stretch goal: Group By
    const groupBy = (items, key) =>
      items.reduce((result, item) => {
        const value = item[key];
        if (!result[value]) result[value] = [];
        result[value].push(item);
        return result;
      }, {});
    const groupedByCategory = groupBy(meals, "strCategory");
    console.log("Grupperade måltider per kategori:", groupedByCategory);

    // ⭐ Stretch goal: Map till enklare sammanfattningar
    const mealSummaries = meals.map(meal => ({
      id: meal.idMeal,
      name: meal.strMeal,
      category: meal.strCategory,
      ingredients: Object.keys(meal)
        .filter(key => key.startsWith("strIngredient") && meal[key])
        .map(key => meal[key])
    }));
    console.log("Måltidssammanfattningar (första 3):", mealSummaries.slice(0, 3));

    // ⭐ Stretch goal: Frekvens av alla ingredienser
    const ingredientFrequency = mealSummaries.reduce((acc, meal) => {
      meal.ingredients.forEach(ingredient => {
        acc[ingredient] = (acc[ingredient] || 0) + 1;
      });
      return acc;
    }, {});
    console.log("Ingrediensfrekvens:", ingredientFrequency);

  } catch (error) {
    console.error("Fel vid hämtning av data:", error);
  }
}

// Kör funktionen
fetchMeals();
