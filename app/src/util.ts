export function transformText(text: string) {
    return text.toUpperCase();
}

/**
 * Problematisk kod - vid körning i test
 */
// import av denna är OK, användning är det EJ
// (antar att den skalas bort om den ej används)
import { doubleIt } from "lib/src/util";
/**
 * Försöker använda .ts-funktion från `lib`
 * Detta fungerar vid bygge och devserver, men EJ vid test.
 * return v * 4 är en fallback för att visa att testerna fungerar i övrigt.
 */
export function quadrupleIt(v: number) {
    //return doubleIt(doubleIt(v));
    return v * 4;
}
