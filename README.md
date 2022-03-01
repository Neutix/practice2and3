* [x] Opprett et React prosjekt med Parcel som vist på forelesningen. Legg til react-router-dom
* [x] Bruk React Router til å la brukeren gå til / for å kunne klikke på "ny quiz", /question for å vise spørsmål og "/answer/*" for å vise svaret
      Om vis et tilfeldig spørsmål når brukeren ser på en ny quiz. Bruk gjerne randomQuestion i questions.js Last ned questions.js
* [x] Vis svaralternativene på spørsmålet. Om brukeren velger riktig, send brukeren til /answer/correct. Om de velger feil send dem til /answer/wrong. Bruk isCorrectAnswers i questions.js Last ned questions.js
* [ ] Bruk en nested <Routes> for å vise "riktig" eller feil for "/answer/correct" og "/answer/wrong"
* [ ] Legg inn en useState for questionsAnswered og en useState for correctAnswers på toppnivå. Send inn setterne til "/question" og getterne til "/" slik at du kan oppdatere og vise antall korrekte spørsmål
* [ ] Legg til jest, babel-jest, @babel/preset-env og @babel/preset-react for å kunne skrive Jest-tester med React
* [ ] Skriv en test med expect(element).toMatchSnapshot() for å sjekke at forsiden vises riktig.
* [ ] Bruk document.createElement og ReactDOM.render for å vise en React komponent
* [ ] Bruk "jest": { "testEnvironment": "jsdom" } for å kunne benytte `document` i tester
* [ ] Bruk <MemoryRouter> for å kunne vise <Link> i en test
* [ ] Skriv en test med Simulate.click for å sjekke håndtering av brukerens svar
* [ ] Flytt randomQuestion til en React.createContext for å kunne styre spørsmålet fra testen
* [ ] Bruk jest.fn for å sende inn mock-funksjoner til en React komponent
* [ ] Bruk expect(<mock>).toBeCalled() for å sjekke svaret