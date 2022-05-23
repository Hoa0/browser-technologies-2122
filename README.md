# Browser Technologies @cmda-minor-web 20-21

## Enquete

Enquete invullen over de minor web development

Bekijk [website-BT-enquete](https://brot2122.herokuapp.com)

## Table of Contents

- [Opdrachten](#opdrachten)
- [Concept](#concept)
- [Core-functionaliteit](#cor-functionaliteit)
- [Browser-test](#browser-test)
- [Feature-detection](#Feature-detection)
- [Progressive Enhancement](#ProgressiveEnhancement)
- [Wireflow](#wireflow)
- [Wishlist](#wishlist)
- [Installation](#Installation)
- [License](#License)
- [Bronnen](#bronnen)

## Opdrachten

Opdracht 1: [PE](https://allyssaa.github.io/browser-technologies-2122/opdrachten/)</br>
Opdracht 2: [Breek het web](https://github.com/Hoa0/browser-technologies-2122/wiki/Breek-het-web)

## Concept
### User Story

> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

Enquete overzicht - alleen html <br />
<img src="https://github.com/Hoa0/browser-technologies-2122/blob/main/static/images/readme/bt-1.png"  width="300">

Enquete vragen - html, css, js <br />
<img src="https://github.com/Hoa0/browser-technologies-2122/blob/main/static/images/readme/bt-3.png"  width="300">

Enquete einde - html, css, js<br />
<img src="https://github.com/Hoa0/browser-technologies-2122/blob/main/static/images/readme/bt-3.png"  width="300">

## Cor functionaliteit

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

- JS, Het uitzetten hiervan zorgt ervoor dat er in de web tool ‘applicatie’ niet wordt opgeslagen. Wanneer JS aanstaat zie je alle ingevulde vragen.
- required, wordt bij elke geteste browsers ondersteund
- css uitzetten, core functionaliteit werkt nog in zijn geheel


## Feature detection
- [x] Media-query: Check of de browser @media query ondersteund, zoniet? geeft het dan aan
- [x] CSS met @supports: Hiermee kan je gemakkelijk detecteren of bepaalde CSS-functie beschikbaar is voor je browser.  CSS tussen de haakjes worden uitgevoerd, bijvoorbeeld @supports (—css:variables)
- [x] -moz, -webkit: Als een property nog redelijk nieuw is kan je deze aankaarten met een -moz of -webkit dan werkt het ook voor safari en voor firefox
- [x] LocalStorage: check of localstorage beschikbaar is en slaat gegevens op.
<img src="https://github.com/Hoa0/browser-technologies-2122/blob/main/static/images/readme/feature-dec.png"  width="300">

## Progressive Enhancement
Dit principe houdt in dat je website of webapplicatie in alle soorten browsers moeten gaan werken. Ook waarbij moderne technologieën toegepast zijn, waarin deze functies niet worden ondersteund. 

### Functional - HTML :<br />
Student kan de enquete invullen en verzenden en wijzigen<br />

### Reliable: <br />
Het werkt altijd en op het zelfde manier<br />

#### Usable - HTML & CSS: <br />
Css, kleuren contras toegepast zoadat het formulier leesbaar is<br />

### Pleasurable - HTML & CSS & JS: <br />
Gebruikerservaring wordt verbetert waarbij de gebruiker de website met plezier kan bezoeken
- Localstorage, voor het opslaan van vragen en het wijzigen daarvan.

## Wireflow

<img src="https://github.com/Hoa0/browser-technologies-2122/blob/main/static/images/readme/wireflow-v2.png"  width="500">

## Wishlist
- [ ] Status bar, feedback voor de student, hoe ver de student is met zijn vragen invullen

## Installation

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

## License

[MIT License](https://github.com/Hoa0/browser-technologies-2122/blob/main/LICENSE)

## Bronnen
- https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement
- https://www.digitalocean.com/community/tutorials/css-feature-detection-css
- https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
- https://github.com/cmda-minor-web/browser-technologies-2122/blob/main/assignments/eindopdracht.md 