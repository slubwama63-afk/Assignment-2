# Assignment 2 – Fetch, Async/Await & Array Methods

#Inledning
I den här uppgiften tränar jag på att använda fetch tillsammans med async/await för att hämta data från ett API.  
Jag använder även flera av JavaScripts inbyggda array-metoder för att sortera, filtrera, reducera och omvandla data.  
Allt skrivs ut direkt i webbläsarens console (det behövs alltså ingen visning i HTML).

API:et jag använder är [TheMealDB](https://www.themealdb.com) som innehåller information om olika maträtter, kategorier och ingredienser.  



#Kodens flöde och logik

1. Hämta data från API
Programmet hämtar måltider med fetch() från TheMealDB:s öppna API.  
Med await response.json() omvandlas svaret till ett JavaScript-objekt.  
Hämtningen sker i en asynkron funktion (`async function fetchMeals()`).

2. Sortera och visa de fem första måltiderna
- .map() används för att hämta endast namnen (strMeal).
- .sort((a, b) => a.localeCompare(b)) sorterar alfabetiskt.
- .slice(0, 5) plockar ut de fem första resultaten.
- Utskriften sker direkt i konsolen.

3. Filtrera på kategori
- .filter() används för att bara visa måltider från en viss kategori, t.ex. “Chicken”.
- .toLowerCase() används på båda jämförelsesidorna så att sökningen inte är skiftlägeskänslig.
- Resultatet visas som namn + kategori i konsolen.

4. Räkna antal måltider per kategori
- .reduce() används för att skapa ett nytt objekt som räknar hur många gånger varje kategori förekommer.
- Exempel på resultat:
  	json
  { "Chicken": 6, "Beef": 4, "Seafood": 3 }

