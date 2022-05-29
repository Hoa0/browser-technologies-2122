# Browser Technologies @cmda-minor-web 20-21

## Table of Contents

- [Demo](#demo)
- [Installatie](#installatie)
- [Concept](#concept)
- [Progressive Enhancement](#progressive-enhancement)
- [Core Functionaliteit](#core-functionaliteit)
- [Browser testen](#browser-testen)
- [Feature detection](#feature-detection)
- [Wireflow](#wireflow)
- [Wishlist](#wishlist)
- [License](#license)
- [Bronnen](#bronnen)

## Demo

Enquete invullen over de minor web development

Bekijk [website-BT-enquete](https://brot2122.herokuapp.com)

## Installatie

Dit project gebruiken

```commandline
git clone https://github.com/Hoa0/browser-technologies-2122.git
```

Npm packages installeren voor dit project

```commandline
npm install
```

Server starten

```commandline
npm run dev
```

## Concept
### User Story

> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

## Progressive Enhancement
Dit principe houdt in dat je website of webapplicatie in alle soorten browsers moeten gaan werken. Ook waarbij moderne technologieën toegepast zijn, waarin deze functies niet worden ondersteund. 

Opdracht 1: [PE](https://allyssaa.github.io/browser-technologies-2122/opdrachten/)</br>
Opdracht 2: [Breek het web](https://github.com/Hoa0/browser-technologies-2122/wiki/Breek-het-web)

 <table>
  <tr>
    <td>Enquete overzicht - Functional - HTML </td>
     <td>Enquete vragen - Usable - HTML, CSS </td>
     <td>Enquete einde & mogelijkheid om antwoorden te wijzigen - Pleasurable - HTML, CSS, JS </td>
  </tr>
  <tr>
    <td><img src="https://github.com/Hoa0/browser-technologies-2122/blob/main/static/images/readme/bt-1.png"  width="600"></td>
    <td><img src="https://github.com/Hoa0/browser-technologies-2122/blob/main/static/images/readme/bt-2.png"  width="600"></td>
    <td><img src="https://github.com/Hoa0/browser-technologies-2122/blob/main/static/images/readme/bt-3.png"  width="300"></td>
  </tr>
 </table>

### Functional - HTML :<br />
- Student kan de enquete invullen en verzenden en wijzigen<br />
- In de eerste laag begin je met semantisch HTML je website op te bouwen. Voor de enquete heb ik input velden gebruikt dat vervolgens wordt afgehandeld als een formulier, waarbij de verzendknop ervoor zorgt dat de gegevens van de client naar de server wordt gestuurd. Helaas ziet de website in deze laag niet heel aantrekkelijk uit.

### Reliable: <br />
Het werkt altijd en op het zelfde manier<br />

#### Usable - HTML & CSS: <br />
- In deze laag richt zich vooral op de bruikbaarheid van de functie dat verbetert kan worden door het toevoegen van styling. Zoals het toepassen van een `:hover`  op een button of kleuren contrast, zoadat het formulier leesbaar is. De gebruikerservaring wordt hiermee verbeterd en de website heeft meer vormgeving.<br />

### Pleasurable - HTML & CSS & JS: <br />
- Deze laag focus zich op die pleziergedeelte van de gebruikerservaring. Door het toevoegen van animaties of andere functies zal je de gebruikerservaring verbeteren. 
- Localstorage, voor het opslaan van vragen en het wijzigen daarvan.

## Core functionaliteit

- [x] Naam en studentnummer invullen
- [x] Vragen lijst invullen over de minor
- [x] Antwoorden kunnen wijzigen
- [x] Foutmelding weergeven wanneer een veld niet is ingevuld.

## Browser testen

- [x] Safari
- [x] Brave
- [x] Chrome
- [x] Firefox

**website testen**

- Wanneer JavaScript niet beschikbaar is, zal de tussentijdse progressie niet opgeslagen kunnen worden in local storage
- Door de geteste browsers wordt het attribuut _required_ groot en deels ondersteund, vanaf 2011 volledige support door de grootste gebruikte browsers. Hierom werkt het op de geteste browsers.
- De meest recente CSS syntaxes zijn opgevangen met `@media` of `@supports` om te controleren als het bruikbaar is op een browser. Zowel met als zonder CSS werkt de core functionaliteit van de website nog steeds.

## Feature detection
- [x] Media-query: Check of de browser @media query ondersteund, zoniet? geeft het dan aan
- [x] CSS met @supports: Hiermee kan je gemakkelijk detecteren of bepaalde CSS-functie beschikbaar is voor je browser.  CSS tussen de haakjes worden uitgevoerd, bijvoorbeeld: <br />
`/* Als browser CSS variabelen ondersteund */
@supports (--css: variables) {
  :root {
    --color-white: #f2e9e4;
    --color-black: #343a40;
    --color-btn: #94d2bd;
  }    
}`

- [x] -moz, -webkit: Als een property nog redelijk nieuw is kan je deze aankaarten met een -moz of -webkit dan werkt het ook voor safari en voor firefox
- [x] LocalStorage: check of localstorage beschikbaar is en slaat gegevens op.
<img src="https://github.com/Hoa0/browser-technologies-2122/blob/main/static/images/readme/feature-dec.png"  width="500">

## Wireflow

<img src="https://github.com/Hoa0/browser-technologies-2122/blob/main/static/images/readme/wireflow-v2.png"  width="700">

## Wishlist
- [ ] Status bar, feedback voor de student, hoe ver de student is met zijn vragen invullen

## License

[MIT License](https://github.com/Hoa0/browser-technologies-2122/blob/main/LICENSE)

## Bronnen
- https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement
- https://www.digitalocean.com/community/tutorials/css-feature-detection-css
- https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
- https://github.com/cmda-minor-web/browser-technologies-2122/blob/main/assignments/eindopdracht.md 
- https://medium.com/@lunamayjohansson/3-layers-of-progressive-enhancement-84ec77424694
