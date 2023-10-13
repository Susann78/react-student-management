# Student Management System

In dieser Aufgabe sollte eine einfache `Oberfläche für die Verwaltung von Studenten` mit React erstellt werden. <br>
Diese sollte beinhalten:

- die Anzeige von Studenten in einer Übersicht
- die Anzeige der Details eines einzelnen Eintrags
- das Anlegen neuer Studenteneinträge mittels Formular
- das Löschen vorhandener Studenteneinträge per Knopfdruck
  <br>
  <br>

![Student Management](/readme-assets/student-management-screen.png)
<br>
<br>

## Die Datenstruktur

In der Datei `src/js/service/data.js` befindet sich ein Array mit einigen Beispieldaten von Studenten.
Jeder Eintrag hat folgende Struktur:

```
{
    id: 1,
    img: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/321.jpg',
    name: 'Peter Pan',
    birthdate: new Date('1994-01-15'),
    city: 'Hamburg',
    study: STUDIES.cs,
    ...
}
```

Dazu gibt es die Konstante `STUDIES`, die als ENUM für Studiengänge fungiert. Diese Konstante sieht wie folgt aus:

```
const STUDIES = {
    cs: 'Computer Science',
    ba: 'Business Administration',
    his: 'History',
    ...
};
```

## Vorgehensweise

Zunächst wurde eine Statevariable in der `App`-Komponente angelegt, die das Array der Studenten-Datensätze hält.
Als Initialwert wird sie mit dem importierten Datensatz aus der `data.js` vorgeladen. <br> Zudem wurden mittels `React Router` verschiedene `Routes` definiert und einzelne `Pages` für die verschiedenen Ansichten wie

- der Übersichtsansicht aller Studenten
- Detailansicht einzelner Studenteneinträge
- Ansicht zur Erstellung eines neuen Studenteneintrags
  <br>

erstellt. Die Datensätze einzelner Studenten werden als Kacheln angezeigt und als eigene `Komponente` ausgelagert. Der Kachel-Komponente wurden zudem zwei Buttons hinzugefügt, die einmal den Datensatz aus dem State der App-Komponente löscht oder zur Detailansicht des Datensatzes führt.<br>

Darüberhinaus wurde eine Formularkomponente zum Anlegen eines neuen Datensatzes erstellt, wobei sich der `genNewId()`-Hilfsfunktion aus der `data.js` bedient wurde, um eine eindeutige ID für neue Datensätze zu generieren. Für das Profil-Bild eines neu angelegten Datensatzes kommt `Faker.js` zum Einsatz. <br>
Die Seite ist responsive.

(Design & Development by Susann Gailus)
