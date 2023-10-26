# Testa ts/react med jest

Detta är ett monorepo-upplägg.

`app` beror av `lib`. De har båda sina egna tester.

## Delarna

### `lib`

`lib` är konfigurerat att köra testerna med jest, och med Babel för att sköta TypeScript-kompilering:

* `@babel/preset-env`
* `@babel/preset-typescript`


### `app`

`app` innehåller både TypeScript och React-komponenter (med tester), och är konfigurerat att köra testerna med jest, och med Babel för att sköta TypeScript-kompilering:

* `@babel/preset-env`
* `@babel/preset-typescript`
* `@babel/preset-react`

&mdash; samt mockad laddning för import av assets  i form av bilder.

React-komponenttest görs med `@testing-library/react`.

## Vad som funkar

Efter `npm install` fungerar det mesta fint

Bygga och köra i devmode:

    npm run app:build # funkar, hamnar i ./app/dist
    npm run app:start # funkar, startar på http://localhost:3001/

Köra tester:

    npm run lib:test # libs tester (innehåller bara .ts)
    npm run app:test # apps tester (innehåller både .ts- och react-tester)
    npm run test     # alla tester

## Problemet

Problemet inträffar om `app` importerar _**och även använder**_ något från `lib`.
Titta i `./app/src/util.ts` - om man försöker **använda** en importerad funktion från `lib` och kör appens tester får man:

     FAIL  src/util.test.ts
        ● Test suite failed to run

    SyntaxError: /Users/petter/dev/P/kata/ts-react-jest/lib/src/util.ts: Unexpected token, expected "," (1:26)

    > 1 | export function doubleIt(v: number) {
        |                           ^
      2 |     return v * 2;
      3 | }
      4 |

`lib/src/util.ts` tycks helt enkelt inte transpileras vid körning av test.  Hur kan jag få den att fatta?

