Assignment 2

Inledning:
Den här uppgiften bygger vidare på samma kodstil och struktur som jag använt i Assignment 1 och End Project, för att hålla en tydlig och enhetlig kodbas genom hela kursen.

Syfte:
Syftet med uppgiften är att träna på att använda fetch, async/await och olika array-metoder för att hämta och bearbeta data från ett API.

Beskrivning:
Jag använder TheMealDB API för att hämta en lista med måltider.
All bearbetning och utskrift sker i konsolen, inte i HTML-filen.

Så här fungerar koden:
- Jag börjar med att hämta data från API:et med fetch och omvandlar svaret till JSON.

- När datan har laddats använder jag olika array-metoder för att jobba med den:

.sort() och .slice() för att visa de fem första måltiderna i alfabetisk ordning.

.filter() för att visa måltider från en viss kategori.

.reduce() för att räkna hur många måltider som finns i varje kategori.

- Resultaten skrivs ut direkt i konsolen.

1. Jag har också lagt till några extra funktioner (stretch goals) för att:

2. Gruppera måltider efter kategori,

3. Skapa enklare objekt med bara viktiga fält,

4. Och räkna hur ofta varje ingrediens förekommer.

Kommentarer:
Alla steg i koden är kommenterade direkt i app.js för att förklara vad som händer och hur flödet fungerar.

Reflektion:
Den här uppgiften gjorde det tydligare hur man kan kombinera fetch och asynkron kod med array-metoder för att hantera JSON-data på ett effektivt och strukturerat sätt. Det gav också en bra förståelse för hur man kan filtrera, sortera och omvandla data på flera olika sätt.

