/* Assignment 2 - Fetch, async/await & array methods */

// Async-funktion för att hämta data från TheMealDB
async function getMeals() {
  try {
    // Hämta data från API:et (alla måltider som börjar på bokstaven "a")
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const data = await res.json();

    // Spara alla måltider i en variabel
    const meals = data.meals;

    // Kontroll: skriv ut hur många måltider som hämtades
    console.log("Antal måltider hämtade:", meals.length);

    /* ----------------------------------------------
        Sortera och visa de fem första måltiderna
       ---------------------------------------------- */
    const firstFive = meals
      .map(meal => meal.strMeal) // plockar bara ut namnen
      .sort((a, b) => a.localeCompare(b)) // sorterar alfabetiskt
      .slice(0, 5); // tar de fem första

    console.log("De fem första måltiderna i alfabetisk ordning:");
    console.log(firstFive);

    /* ----------------------------------------------
        Filtrera måltider efter kategori
       ---------------------------------------------- */
    const givenCategory = "Chicken"; // ändra om du vill testa annan kategori
    const filteredMeals = meals.filter(
      meal => meal.strCategory.toLowerCase() === givenCategory.toLowerCase()
    );

    console.log(`Måltider i kategorin "${givenCategory}":`);
    filteredMeals.forEach(meal => {
      console.log(`${meal.strMeal} (${meal.strCategory})`);
    });

    /* ----------------------------------------------
       Räkna antal måltider per kategori
       ---------------------------------------------- */
    const categoryCount = meals.reduce((acc, meal) => {
      const category = meal.strCategory;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    console.log("Antal måltider per kategori:");
    console.log(categoryCount);

    /* ----------------------------------------------
       Stretch Goals
       ---------------------------------------------- */

    // Grupperar måltider efter vald nyckel, t.ex. kategori
    function groupBy(items, key) {
      return items.reduce((acc, item) => {
        const group = item[key];
        if (!acc[group]) {
          acc[group] = [];
        }
        acc[group].push(item);
        return acc;
      }, {});
    }

    const groupedByCategory = groupBy(meals, "strCategory");
    console.log("Gruppade måltider per kategori:");
    console.log(groupedByCategory);

    // Skapar en enklare sammanfattning av varje måltid
    const mealSummaries = meals.map(meal => ({
      id: meal.idMeal,
      name: meal.strMeal,
      category: meal.strCategory,
      ingredients: Object.keys(meal)
        .filter(key => key.startsWith("strIngredient") && meal[key])
        .map(key => meal[key])
    }));

    console.log("Sammanfattning av måltider:");
    console.log(mealSummaries);

    // Räknar hur ofta varje ingrediens förekommer
    const ingredientFrequency = mealSummaries.reduce((acc, meal) => {
      meal.ingredients.forEach(ingredient => {
        acc[ingredient] = (acc[ingredient] || 0) + 1;
      });
      return acc;
    }, {});

    console.log("Frekvens av ingredienser:");
    console.log(ingredientFrequency);

  } catch (error) {
    console.error("Något gick fel:", error);
  }
}

// Kör funktionen
getMeals();

